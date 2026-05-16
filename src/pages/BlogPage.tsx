import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLenis } from "@/hooks/useLenis";
import { Facebook, Linkedin, Link2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { blogSupabase, formatBlogDate, type BlogPost } from "@/integrations/blogSupabase/client";
import { PLACEHOLDER_IMAGE } from "@/constants/placeholderImage";

const XIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const easeOutExpo = [0.16, 1, 0.3, 1] as [number, number, number, number];

const BlogPage = () => {
  useLenis();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let active = true;
    (async () => {
      const { data, error } = await blogSupabase
        .from("blogs")
        .select("id, slug, title, excerpt, cover_image, published_at, is_published, content, images")
        .eq("is_published", true)
        .order("published_at", { ascending: false });
      if (!active) return;
      if (error) setError(error.message);
      else setPosts((data as BlogPost[]) || []);
      setLoading(false);
    })();
    return () => {
      active = false;
    };
  }, []);

  const handleShare = (platform: string, url: string, title: string) => {
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);
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

  return (
    <div className="grain-overlay w-full min-h-screen">
      <Navbar />

      <section className="relative w-full pt-32 pb-24 px-6 md:px-12 max-w-[1500px] mx-auto min-h-screen">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">
          <div className="w-full lg:w-[35%] xl:w-[40%] flex-shrink-0">
            <div className="sticky top-40 flex flex-col items-start">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: easeOutExpo }}
                className="font-display font-bold text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-[5rem] xl:text-[7rem] leading-[0.85] tracking-tighter flex flex-col"
                style={{ color: "rgba(255,255,255,0.92)" }}
              >
                <span className="flex items-center whitespace-nowrap">
                  BLOG NEWS
                  <span className="inline-block w-12 md:w-24 h-[2px] bg-white ml-4 align-middle hidden sm:block"></span>
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: easeOutExpo }}
                className="mt-8 md:mt-12 ml-2 md:ml-4"
              >
                <p className="font-body text-lg md:text-xl lg:text-2xl text-white/60 leading-relaxed max-w-[250px]">
                  Demo editorial drops<br />whenever CMS feels like it
                </p>
              </motion.div>
            </div>
          </div>

          <div className="w-full lg:w-[65%] xl:w-[60%] flex flex-col gap-24 pt-10 lg:pt-32 pb-20">
            {loading && (
              <p className="font-body text-white/50">Spinning up pretend articles…</p>
            )}
            {error && (
              <p className="font-body text-red-400/70">Failed to load posts: {error}</p>
            )}
            {!loading && !error && posts.length === 0 && (
              <p className="font-body text-white/50">No CMS rows yet — seed Supabase when ready.</p>
            )}
            {posts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 1, ease: easeOutExpo }}
                className="group relative flex flex-col sm:flex-row gap-8 lg:gap-12 items-center"
              >
                <div className="w-full sm:w-[45%] md:w-[50%] flex-shrink-0">
                  <div
                    className="rounded-2xl overflow-hidden glass-card aspect-[4/5] relative"
                    style={{ border: "0.5px solid rgba(255,255,255,0.1)" }}
                  >
                    <img
                        src={PLACEHOLDER_IMAGE}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                  </div>
                </div>

                <div className="w-full sm:w-[55%] md:w-[50%] flex flex-col justify-center">
                  <p
                    className="font-body text-[11px] tracking-[0.2em] uppercase mb-4"
                    style={{ color: "#999999" }}
                  >
                    {formatBlogDate(post.published_at)}
                  </p>

                  <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.2] mb-6 text-white group-hover:text-[#999999] transition-colors duration-500">
                    {post.title}
                  </h2>

                  {post.excerpt && (
                    <p className="font-body text-sm md:text-base text-white/50 leading-relaxed mb-8 line-clamp-3">
                      {post.excerpt}
                    </p>
                  )}

                  <div className="flex flex-wrap items-center gap-6 mb-8">
                    <button
                      onClick={() => navigate(`/blog/${post.slug}`)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-body text-xs tracking-[0.15em] uppercase transition-all duration-300"
                      style={{
                        color: "rgba(255,255,255,0.9)",
                        background: "rgba(255, 255, 255, 0.08)",
                        backdropFilter: "blur(20px)",
                        border: "0.5px solid rgba(255, 255, 255, 0.15)",
                      }}
                    >
                      Read More
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M3 8h10M9 4l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="flex items-center gap-3 pt-6 border-t border-white/10">
                    <span className="font-body text-[10px] tracking-[0.1em] text-white/40 uppercase mr-2">
                      Share
                    </span>
                    {[
                      { id: "facebook", icon: <Facebook className="w-4 h-4" /> },
                      { id: "x", icon: <XIcon className="w-3.5 h-3.5" /> },
                      { id: "linkedin", icon: <Linkedin className="w-4 h-4" /> },
                      { id: "copy", icon: <Link2 className="w-4 h-4" /> },
                    ].map((social) => {
                      const shareUrl =
                        typeof window !== "undefined"
                          ? `${window.location.origin}/blog/${post.slug}`
                          : `https://example.com/blog/${post.slug}`;
                      return (
                        <button
                          key={social.id}
                          onClick={() => handleShare(social.id, shareUrl, post.title)}
                          className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                          style={{
                            background: "rgba(18, 34, 59, 0.6)",
                            border: "0.5px solid rgba(255, 255, 255, 0.1)",
                            color: "rgba(255, 255, 255, 0.6)",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = "rgba(153, 153, 153, 0.5)";
                            e.currentTarget.style.color = "#999999";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                            e.currentTarget.style.color = "rgba(255, 255, 255, 0.6)";
                          }}
                          aria-label={`Share on ${social.id}`}
                        >
                          {social.icon}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {i !== posts.length - 1 && (
                  <div className="absolute -bottom-12 left-0 right-0 h-px bg-white/10 hidden sm:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
