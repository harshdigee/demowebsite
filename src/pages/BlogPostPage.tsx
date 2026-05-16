import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLenis } from "@/hooks/useLenis";
import { Facebook, Linkedin, Link2, ArrowLeft, ArrowRight, Grid } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { blogSupabase, formatBlogDate, type BlogPost } from "@/integrations/blogSupabase/client";
import { BlogImageGallery } from "@/components/BlogImageGallery";
import { normalizeBlogContentHtml } from "@/lib/blogContentHtml";
import { PLACEHOLDER_IMAGE } from "@/constants/placeholderImage";

/** Insert gallery between paragraph blocks when possible (admin HTML is mostly <p>…</p>). */
function splitHtmlAtMidParagraph(html: string): { before: string; after: string } | null {
  const re = /<\/p\s*>/gi;
  const endAfterTag: number[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(html)) !== null) {
    endAfterTag.push(m.index + m[0].length);
  }
  if (endAfterTag.length === 0) return null;
  const paragraphsBeforeGallery = Math.max(1, Math.floor(endAfterTag.length / 2));
  const pos = endAfterTag[paragraphsBeforeGallery - 1];
  return { before: html.slice(0, pos), after: html.slice(pos) };
}

const articleProseClass =
  "blog-article-body prose prose-lg prose-invert max-w-none font-body text-white/70 leading-relaxed marker:text-[#999999] " +
  "whitespace-normal break-words [&_p]:whitespace-normal [&_p]:mb-4 [&_p:last-child]:mb-0 " +
  "[&_ul]:my-5 [&_ol]:my-5 [&_ul]:list-disc [&_ol]:list-decimal [&_ul]:pl-6 [&_ol]:pl-6 [&_li]:my-1.5 [&_li]:marker:text-white/45 " +
  "[&_.blog-auto-list]:my-6 [&_.blog-auto-list]:list-disc [&_.blog-auto-list]:pl-6 [&_.blog-auto-list_li]:my-1.5 " +
  "[&_img]:max-w-full [&_img]:h-auto [&_img]:w-auto [&_img]:rounded-[12px] [&_img]:object-contain " +
  "[&_img]:shadow-[0_4px_12px_rgba(0,0,0,0.15)] [&_img]:my-7 [&_img]:mx-auto [&_img]:block " +
  "[&_figure]:mx-auto [&_figure]:my-8 [&_figure]:max-w-full [&_figure_img]:rounded-[12px]";

const XIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const easeOutExpo = [0.16, 1, 0.3, 1] as [number, number, number, number];

type NeighborPost = Pick<BlogPost, "slug" | "title"> | null;

const BlogPostPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  useLenis();
  const { toast } = useToast();

  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 300]);

  const [post, setPost] = useState<BlogPost | null>(null);
  const [prev, setPrev] = useState<NeighborPost>(null);
  const [next, setNext] = useState<NeighborPost>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (!slug) return;
    let active = true;
    setLoading(true);
    setNotFound(false);
    setPost(null);
    setPrev(null);
    setNext(null);

    (async () => {
      const { data, error } = await blogSupabase
        .from("blogs")
        .select("id, slug, title, excerpt, content, cover_image, images, published_at, is_published")
        .eq("slug", slug)
        .eq("is_published", true)
        .maybeSingle();

      if (!active) return;

      if (error || !data) {
        setNotFound(true);
        setLoading(false);
        return;
      }

      const current = data as BlogPost;
      setPost(current);

      if (current.published_at) {
        // Newer = more recent published_at
        const [{ data: newerData }, { data: olderData }] = await Promise.all([
          blogSupabase
            .from("blogs")
            .select("slug, title, published_at")
            .eq("is_published", true)
            .gt("published_at", current.published_at)
            .order("published_at", { ascending: true })
            .limit(1),
          blogSupabase
            .from("blogs")
            .select("slug, title, published_at")
            .eq("is_published", true)
            .lt("published_at", current.published_at)
            .order("published_at", { ascending: false })
            .limit(1),
        ]);

        if (!active) return;
        setNext((newerData?.[0] as NeighborPost) || null);
        setPrev((olderData?.[0] as NeighborPost) || null);
      }

      setLoading(false);
    })();

    return () => {
      active = false;
    };
  }, [slug]);

  const handleShare = (platform: string) => {
    if (!post) return;
    const url = typeof window !== "undefined" ? window.location.href : "";
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(post.title);
    let shareLink = "";
    switch (platform) {
      case "facebook":
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case "x":
        shareLink = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
        break;
      case "linkedin":
        shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
        break;
      case "copy":
        navigator.clipboard.writeText(url);
        toast({ title: "Link copied", description: "The blog link has been copied to your clipboard." });
        return;
    }
    if (shareLink) window.open(shareLink, "_blank", "width=600,height=400");
  };

  if (loading) {
    return (
      <div className="grain-overlay w-full min-h-screen">
        <Navbar />
        <div className="min-h-[60vh] flex items-center justify-center text-white/60 font-body">
          Loading…
        </div>
        <Footer />
      </div>
    );
  }

  if (notFound || !post) {
    return (
      <div className="grain-overlay w-full min-h-screen">
        <Navbar />
        <div className="min-h-[60vh] flex flex-col md:flex-row items-center justify-center text-white gap-4">
          <h1 className="text-3xl font-display">Post not found</h1>
          <button
            onClick={() => navigate("/blog")}
            className="text-[#999999] underline font-body"
          >
            Back to Blog
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  const contentHtml = post.content ?? "";
  const normalizedHtml = normalizeBlogContentHtml(contentHtml);
  const imagesRaw = (post.images || []).filter(Boolean);
  const images = imagesRaw.filter((src) => !contentHtml.includes(src));
  const gallerySplit =
    images.length > 0 && normalizedHtml.trim().length > 0
      ? splitHtmlAtMidParagraph(normalizedHtml)
      : null;

  return (
    <div className="grain-overlay w-full min-h-screen">
      <Navbar />

      {/* Hero — cover + title overlay; date top-right */}
      <section className="relative w-full min-h-[72vh] md:min-h-[85vh] overflow-hidden bg-[#0A1628]">
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
          <img src={PLACEHOLDER_IMAGE} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/55 to-[#0A1628]/25" />
        </motion.div>

        <div className="absolute top-0 left-0 right-0 z-20 pt-28 md:pt-32 px-6 md:px-12 flex justify-end">
          <time
            dateTime={post.published_at ?? undefined}
            className="font-body text-xs md:text-sm tracking-[0.12em] text-white/95"
          >
            {formatBlogDate(post.published_at)}
          </time>
        </div>

        <div className="relative z-10 w-full min-h-[72vh] md:min-h-[85vh] flex flex-col justify-end px-6 md:px-12 pb-16 md:pb-24 max-w-[1100px] mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: easeOutExpo }}
            className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] text-white [text-shadow:0_2px_40px_rgba(0,0,0,0.45)]"
          >
            {post.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.06, ease: easeOutExpo }}
            className="mt-5 md:mt-6 font-body text-sm md:text-base text-white/85"
          >
            By woodwestind
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="relative w-full px-6 md:px-12 py-16 md:py-24 bg-[#0A1628]">
        <div className="max-w-[900px] mx-auto">
          {contentHtml.trim().length > 0 && gallerySplit && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 1, ease: easeOutExpo }}
                className={articleProseClass}
                style={{ fontSize: "1.1rem" }}
                dangerouslySetInnerHTML={{ __html: gallerySplit.before }}
              />
              <BlogImageGallery images={images} title={post.title} />
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 1, ease: easeOutExpo }}
                className={articleProseClass}
                style={{ fontSize: "1.1rem" }}
                dangerouslySetInnerHTML={{ __html: gallerySplit.after }}
              />
            </>
          )}
          {contentHtml.trim().length > 0 && !gallerySplit && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 1, ease: easeOutExpo }}
                className={articleProseClass}
                style={{ fontSize: "1.1rem" }}
                dangerouslySetInnerHTML={{ __html: normalizedHtml }}
              />
              {images.length > 0 && <BlogImageGallery images={images} title={post.title} />}
            </>
          )}
          {contentHtml.trim().length === 0 && images.length > 0 && (
            <BlogImageGallery images={images} title={post.title} />
          )}

          {/* Share */}
          <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <span className="font-display text-xl text-white">Share this article</span>
            <div className="flex items-center gap-3">
              {[
                { id: "facebook", icon: <Facebook className="w-4 h-4" /> },
                { id: "x", icon: <XIcon className="w-3.5 h-3.5" /> },
                { id: "linkedin", icon: <Linkedin className="w-4 h-4" /> },
                { id: "copy", icon: <Link2 className="w-4 h-4" /> },
              ].map((social) => (
                <button
                  key={social.id}
                  onClick={() => handleShare(social.id)}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 glass-card"
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "0.5px solid rgba(255, 255, 255, 0.1)",
                    color: "rgba(255, 255, 255, 0.7)",
                  }}
                  aria-label={`Share on ${social.id}`}
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Prev / List / Next */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {prev ? (
              <button
                onClick={() => navigate(`/blog/${prev.slug}`)}
                className="flex flex-col items-start text-left group p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
              >
                <span className="flex items-center gap-2 text-xs font-body tracking-widest text-[#999999] uppercase mb-2">
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                  Previous Post
                </span>
                <span className="font-display text-white line-clamp-2">{prev.title}</span>
              </button>
            ) : (
              <div />
            )}

            <div className="flex justify-center">
              <button
                onClick={() => navigate("/blog")}
                className="flex flex-col items-center group p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
              >
                <Grid className="w-5 h-5 text-white/50 group-hover:text-[#999999] transition-colors mb-2" />
                <span className="text-xs font-body tracking-widest text-white/50 group-hover:text-white transition-colors uppercase">
                  {next ? "Back to list" : "Latest Posts"}
                </span>
              </button>
            </div>

            {next ? (
              <button
                onClick={() => navigate(`/blog/${next.slug}`)}
                className="flex flex-col items-end text-right group p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
              >
                <span className="flex items-center gap-2 text-xs font-body tracking-widest text-[#999999] uppercase mb-2">
                  Next Post
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="font-display text-white line-clamp-2">{next.title}</span>
              </button>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPostPage;
