import { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import aboutImg from "@/assets/about-us.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLenis } from "@/hooks/useLenis";

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
                <img src={aboutImg} alt="Interior" className="w-full h-full object-cover" />
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
                <img src="/about1.png" alt="Factory" className="w-full h-auto object-cover" />
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
                <img src={aboutImg} alt="Interior" className="w-full h-full object-cover" />
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
                <img src="/about-interior.png" alt="Interior Design" className="w-full h-auto object-cover" />
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
              We are a UAE-based commercial joinery specialist, delivering engineered woodwork solutions to contractors, developers, and hospitality projects across the region.
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
              We operate as both a main contractor and specialist subcontractor, delivering large-scale commercial and mixed-use projects with structured planning, technical precision, and reliable execution. Our focus is on consistent performance and high-quality delivery in demanding construction environments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — "As an established joinery manufacturer" */}
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
              As an established joinery
              <br />
              manufacturer in the UAE,
              <br />
              <span
                className="about-s2-italic"
                style={{ fontWeight: 700, fontStyle: "italic", color: "#9ca3af" }}
              >
                <span className="whitespace-nowrap">We operate purpose-built</span>
              </span>
              <br />
              <span
                className="about-s2-italic"
                style={{ fontWeight: 700, fontStyle: "italic", color: "#9ca3af" }}
              >
                production facilities
              </span>
              <br />
              <span
                className="about-s2-italic"
                style={{ fontWeight: 700, fontStyle: "italic", color: "#9ca3af" }}
              >
                facilities designed
              </span>
              <br />
              to support <span className="whitespace-nowrap">large-scale</span>
              <br />
              <span className="whitespace-nowrap">commercial manufacturing</span>
              <br />
              and <span className="whitespace-nowrap">high-volume</span> project delivery.
            </span>
            <span className="hidden md:block">
              As an established joinery manufacturer
              <br />
              in the UAE,
              <br />
              <span
                className="about-s2-italic"
                style={{ fontWeight: 700, fontStyle: "italic", color: "#9ca3af" }}
              >
                We operate purpose-built production facilities
                <br />
                designed
              </span>{" "}
              to support large-scale commercial
              <br />
              manufacturing and high-volume project
              <br />
              delivery.
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
            Our scope includes fire-rated doors, kitchens, wardrobes, wall cladding, and bespoke architectural joinery. We implement strict quality control and production monitoring systems to ensure consistency, accuracy, and reliable project execution.
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
            We are also a compliant supplier of fire-rated door systems, delivering 30, 60, and 120-minute rated solutions in line with UAE Civil Defence requirements. We provide full technical documentation and support for project approvals and compliance.
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
                <img src="/about2.png" alt="Joinery Detail" style={{ width: "100%", height: "100%", display: "block", objectFit: "cover" }} />
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
                Our 50,000 sq. ft. manufacturing facility is equipped with state-of-the-art European machinery, enabling high-volume production with tolerances of up to ±0.1mm.
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
            The Art of Manufacturing
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
                <img src="/about4.png" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Production Facility" />
              </div>
              <h4 style={{ fontSize: 22, fontWeight: 700, color: "#ffffff", marginBottom: 8 }}>Large-Scale Commercial Manufacturing</h4>
              <p style={{ fontSize: 15, color: "#d1d5db", lineHeight: 1.7, textAlign: "justify", overflowWrap: "break-word" }} lang="en">
                Our team of engineers and skilled craftsmen work in tandem with automated systems to achieve the balance between precision engineering and efficient production. Each stage of the manufacturing process is monitored to ensure consistent quality across projects of any scale.
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
                <img src="/about5.png" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Quality Control" />
              </div>
              <h4 style={{ fontSize: 22, fontWeight: 700, color: "#ffffff", marginBottom: 8 }}>Strict Quality Control</h4>
              <p style={{ fontSize: 15, color: "#d1d5db", lineHeight: 1.7, textAlign: "justify", overflowWrap: "break-word" }} lang="en">
                From raw material processing through to final finishing, we implement rigorous quality control procedures at every stage. Our fire-rated door systems are delivered with full compliance documentation, reflecting our commitment to safety, regulatory standards, and reliable execution.
              </p>
            </motion.div>
          </div>

          {/* Metrics Block */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-24 border-t border-white/10 pt-16">
            {[
              { value: "50,000", label: "Sq. Ft. Manufacturing Facility" },
              { value: "120+", label: "Skilled Workforce Per Shift" },
              { value: "90+", label: "Installation Staff Available" },
              { value: "High-Volume", label: "Production Capability For Large Developments" },
              { value: "Specialist", label: "In Commercial, Residential, And Hospitality Projects" },
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
