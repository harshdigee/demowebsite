import { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLenis } from "@/hooks/useLenis";
import { PLACEHOLDER_IMAGE } from "@/constants/placeholderImage";

const easeOutExpo = [0.22, 1, 0.36, 1] as [number, number, number, number];

const AboutUsPage = () => {
  useLenis();

  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="grain-overlay" style={{ minHeight: "100vh" }}>
      <Navbar />

      {/* Hero / Cinematic Layout Section */}
      <section className="relative w-full min-h-[120vh] md:min-h-[120vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
        <div className="relative w-full max-w-[1400px] mx-auto h-auto md:h-[90vh] flex items-center justify-center">
          {/* Mobile Layout: Stacked */}
          <div className="md:hidden flex flex-col items-center w-full px-6 gap-6">
            <motion.div
              className="relative z-20 w-full max-w-[380px] h-[45vh]"
              initial={{ scale: 1.8, opacity: 0, filter: "blur(10px)" }}
              whileInView={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: false, amount: 0.05 }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl relative">
                <img src={PLACEHOLDER_IMAGE} alt="Demo placeholder" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>

          {/* Desktop Layout: Asymmetrical */}
          <div className="hidden md:flex relative w-full h-full items-center justify-center gap-6 px-10">
            <motion.div
              className="w-[24%] self-end mb-[8%] z-10 shrink-0"
              style={{ y: y1 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.05 }}
              transition={{ duration: 1.2, delay: 0.4, ease: easeOutExpo }}
            >
              <div className="glass-card rounded-xl overflow-hidden shadow-2xl">
                <img src={PLACEHOLDER_IMAGE} alt="Demo placeholder" className="w-full h-auto object-cover" />
              </div>
            </motion.div>

            <motion.div
              className="relative z-20 w-[42%] h-[72vh] shrink-0"
              initial={{ scale: 1.8, opacity: 0, filter: "blur(10px)" }}
              whileInView={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: false, amount: 0.05 }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl relative">
                <img src={PLACEHOLDER_IMAGE} alt="Demo placeholder" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 to-transparent pointer-events-none" />
              </div>
            </motion.div>

            <motion.div
              className="w-[22%] self-start mt-[8%] z-10 shrink-0"
              style={{ y: y2 }}
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.05 }}
              transition={{ duration: 1.2, delay: 0.6, ease: easeOutExpo }}
            >
              <div className="glass-card rounded-xl overflow-hidden shadow-2xl">
                <img src={PLACEHOLDER_IMAGE} alt="Demo placeholder" className="w-full h-auto object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 1 — intro copy only */}
      <section className="relative z-20 overflow-hidden" style={{ padding: "60px 0" }}>
        <div className="about-s1-container" style={{ margin: "0 auto", padding: "0 24px", boxSizing: "border-box" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.05 }}
            transition={{ duration: 0.8, ease: easeOutExpo }}
          >
            <p
              className="about-s1-prose"
              style={{
                color: "#e5e7eb",
                lineHeight: 1.8,
                textAlign: "justify",
                marginBottom: 16,
                fontFamily: "'Helvetica', sans-serif",
              }}
              lang="en"
            >
              Lorem ipsum dolor sit amet — demo About intro paragraph one. Replace before publishing.
            </p>
            <p
              className="about-s1-prose"
              style={{
                color: "#9ca3af",
                fontWeight: 600,
                lineHeight: 1.8,
                textAlign: "justify",
                marginBottom: 0,
                fontFamily: "'Helvetica', sans-serif",
              }}
              lang="en"
            >
              Consectetur adipiscing elit sed do eiusmod tempor incididunt — demo About intro paragraph two for spacing preview.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — demo headline grid */}
      <section className="relative z-20 overflow-hidden" style={{ padding: "40px 0" }}>
        <motion.div
          className="about-s1-container"
          style={{
            margin: "0 auto",
            padding: "40px 24px",
            boxSizing: "border-box",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.05 }}
          transition={{ duration: 1, ease: easeOutExpo }}
        >
          <h3
            className="about-s2-heading text-left md:text-justify"
            style={{
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.22,
              marginBottom: 24,
              fontFamily: "'Helvetica', sans-serif",
            }}
            lang="en"
          >
            {/* Mobile: fixed wraps to match ss2 — desktop unchanged below */}
            <span className="md:hidden">
              Demo headline crafted for
              <br />
              small screens only,
              <br />
              <span
                className="about-s2-italic"
                style={{ fontWeight: 700, fontStyle: "italic", color: "#9ca3af" }}
              >
                <span className="whitespace-nowrap">Italic accents preview</span>
              </span>
              <br />
              <span
                className="about-s2-italic"
                style={{ fontWeight: 700, fontStyle: "italic", color: "#9ca3af" }}
              >
                typography pairing
              </span>
              <br />
              <span
                className="about-s2-italic"
                style={{ fontWeight: 700, fontStyle: "italic", color: "#9ca3af" }}
              >
                without real claims
              </span>
              <br />
              so stakeholders can judge <span className="whitespace-nowrap">spacing,</span>
              <br />
              <span className="whitespace-nowrap">breakpoints,</span>
              <br />
              and <span className="whitespace-nowrap">motion curves</span> quickly.
            </span>
            <span className="hidden md:block">
              As a fictional studio showcased
              <br />
              on this demo template,
              <br />
              <span
                className="about-s2-italic"
                style={{ fontWeight: 700, fontStyle: "italic", color: "#9ca3af" }}
              >
                We imagine glossy brochure layouts
                <br />
                designed
              </span>{" "}
              to support storytelling layouts for
              <br />
              multi-column grids and stacked
              <br />
              previews.
            </span>
          </h3>

          <p
            className="about-s2-prose"
            style={{
              color: "#9ca3af",
              lineHeight: 1.68,
              textAlign: "justify",
              marginBottom: 12,
              fontFamily: "'Helvetica', sans-serif",
            }}
            lang="en"
          >
            Demo bullet-style prose about imaginary catalog items — kitchens, wardrobes, wall panels — purely illustrative filler.
          </p>
          <p
            className="about-s2-prose"
            style={{
              color: "#9ca3af",
              lineHeight: 1.68,
              textAlign: "justify",
              fontFamily: "'Helvetica', sans-serif",
            }}
            lang="en"
          >
            Additional dummy paragraph referencing fictional approvals — swap with legally reviewed copy when this becomes a live brand.
          </p>
        </motion.div>
      </section>

      {/* SECTION 3 — Precision Backed by Engineering Excellence */}
      <section className="relative w-full overflow-hidden" style={{ padding: "60px 0" }}>
        <div className="about-s1-container" style={{ margin: "0 auto", padding: "0 24px", boxSizing: "border-box" }}>
          <div style={{ position: "relative" }}>

            {/* Right images — staggered: img1 top-right, img2 shifted left below */}
            <div className="about-s3-images-wrap">
              <motion.div
                className="glass-card shadow-2xl about-s3-img1"
                style={{ borderRadius: 10, overflow: "hidden" }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.05 }}
                transition={{ duration: 1, delay: 0.2, ease: easeOutExpo }}
              >
                <img src={PLACEHOLDER_IMAGE} alt="Demo placeholder" style={{ width: "100%", height: "100%", display: "block", objectFit: "cover" }} />
              </motion.div>
            </div>

            {/* Left text — heading aligned with img1 top, paragraphs below */}
            <motion.div
              className="about-s3-text-col"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.05 }}
              transition={{ duration: 1, ease: easeOutExpo }}
            >
              <h3 className="about-s3-heading" style={{
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1.2,
                marginBottom: 4,
                fontFamily: "'Helvetica', sans-serif",
              }}>
                Precision Backed by
              </h3>
              <p className="about-s3-subheading" style={{
                fontWeight: 600,
                fontStyle: "italic",
                color: "#9ca3af",
                lineHeight: 1.3,
                marginBottom: 20,
                fontFamily: "'Helvetica', sans-serif",
              }}>
                Engineering Excellence
              </p>
              <p style={{
                fontSize: 15,
                color: "#d1d5db",
                lineHeight: 1.7,
                textAlign: "justify",
                overflowWrap: "break-word",
                fontFamily: "'Helvetica', sans-serif",
              }}
                lang="en"
              >
                Our pretend facility spans imaginary square footage with fictional machinery tolerances — numbers shown for layout rhythm only.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expanded Gallery / Details */}
      <section className="relative overflow-hidden" style={{ padding: "60px 0 100px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", boxSizing: "border-box" }}>
          <motion.h2
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: "rgba(255,255,255,0.92)",
              textAlign: "center",
              marginBottom: 60,
              fontFamily: "'Helvetica', sans-serif",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.05 }}
            transition={{ duration: 1, ease: easeOutExpo }}
          >
            Demo Manufacturing Storyboard
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              className="flex flex-col gap-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.05 }}
              transition={{ duration: 1, ease: easeOutExpo }}
            >
              <div style={{ borderRadius: 10, overflow: "hidden" }} className="glass-card w-full aspect-[4/3]">
                <img src={PLACEHOLDER_IMAGE} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Demo placeholder" />
              </div>
              <h4 style={{ fontSize: 22, fontWeight: 700, color: "#ffffff", marginBottom: 8 }}>Placeholder Column Title One</h4>
              <p style={{ fontSize: 15, color: "#d1d5db", lineHeight: 1.7, textAlign: "justify", overflowWrap: "break-word" }} lang="en">
                Fusce dapibus tellus ac cursus commodo tortor mauris condimentum nibh — filler paragraph beside placeholder imagery.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col gap-6 md:mt-24"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.05 }}
              transition={{ duration: 1, delay: 0.2, ease: easeOutExpo }}
            >
              <div style={{ borderRadius: 10, overflow: "hidden" }} className="glass-card w-full aspect-[4/3]">
                <img src={PLACEHOLDER_IMAGE} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Demo placeholder" />
              </div>
              <h4 style={{ fontSize: 22, fontWeight: 700, color: "#ffffff", marginBottom: 8 }}>Placeholder Column Title Two</h4>
              <p style={{ fontSize: 15, color: "#d1d5db", lineHeight: 1.7, textAlign: "justify", overflowWrap: "break-word" }} lang="en">
                Second filler column describing imaginary QA checkpoints — no certifications implied on this demo stack.
              </p>
            </motion.div>
          </div>

          {/* Metrics Block */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-24 border-t border-white/10 pt-16">
            {[
              { value: "01", label: "Demo metric label A" },
              { value: "02", label: "Demo metric label B" },
              { value: "03", label: "Demo metric label C" },
              { value: "04", label: "Demo metric label D" },
              { value: "05", label: "Demo metric label E" },
            ].map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: easeOutExpo }}
                className="flex flex-col items-center text-center p-6 glass-card rounded-2xl"
              >
                <span style={{ fontSize: 28, fontWeight: 700, color: "#ffffff", marginBottom: 8 }}>{metric.value}</span>
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>{metric.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUsPage;
