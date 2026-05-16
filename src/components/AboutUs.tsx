import { motion, useScroll, useTransform, useSpring } from"framer-motion";
import { useRef } from"react";
import { useNavigate } from"react-router-dom";
import WordReveal from"@/components/WordReveal";
import { PLACEHOLDER_IMAGE } from"@/constants/placeholderImage";

const elyseCurve = [0.16, 1, 0.3, 1] as [number, number, number, number];

const AboutUs = () => {
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Scroll progress tied to the section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end","end start"],
  });

  // Spring-smooth the raw scroll value — gives the silky lag feel
  const smooth = useSpring(scrollYProgress, {
    stiffness: 55,
    damping: 20,
    restDelta: 0.001,
  });

  // Gentle parallax on each column — left drifts slower, right faster
  const headlineY = useTransform(smooth, [0, 1], [80, -80]);
  const imageY    = useTransform(smooth, [0, 1], [30, -30]);
  const textY     = useTransform(smooth, [0, 1], [50, -50]);

  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight:"100vh" }}
      ref={ref}
      id="about"
    >
      {/* Subtle wavy mesh texture */}
      

      <div
        className="max-w-[1400px] mx-auto relative z-10 w-full px-6 md:px-10"
        style={{ paddingTop: 150, paddingBottom: 150 }}
      >
        {/* 3-column asymmetric grid — EXACT original layout preserved */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

          {/* LEFT — Giant headline, bottom-aligned (Phase 3 — last to enter) */}
          <motion.div
            style={{ y: headlineY }}
            className="lg:col-span-4 order-3 lg:order-1 flex flex-col justify-end max-w-full"
          >
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1.1, delay: 0.7, ease: elyseCurve }}
              className="max-w-full"
            >
              <WordReveal
                text="Timeless Craft. Precision-Focused Excellence."
                className="font-display text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold leading-[1.1] tracking-[-0.02em] max-w-full"
                style={{ color:"rgba(255,255,255,0.92)" }}
                delay={0.75}
                as="h2"
              />
            </motion.div>
          </motion.div>

          {/* CENTER — Large portrait image (Phase 2 — curtain reveal) */}
          <motion.div
            style={{ y: imageY }}
            className="lg:col-span-4 order-1 lg:order-2 flex justify-center"
          >
            <motion.div
              className="w-full max-w-[420px] relative overflow-hidden"
              style={{ aspectRatio:"2/3.2" }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1.2, delay: 0.2, ease: elyseCurve }}
            >
              <motion.img
                src={PLACEHOLDER_IMAGE}
                alt="Interior Industries facility"
                className="w-full h-full object-cover"
                loading="eager"
                style={{ display:"block", transformOrigin:"center" }}
                initial={{ scale: 1.15 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 1.6, delay: 0.2, ease: elyseCurve }}
              />

              {/* Bottom gradient for depth */}
              <div
                className="absolute inset-0 pointer-events-none z-20"
                style={{
                  background:"linear-gradient(to top, rgba(15, 30, 55, 0.4) 0%, transparent 40%)",
                }}
              />
            </motion.div>
          </motion.div>

          {/* RIGHT — Body text + Learn More (Phase 1 — first to enter) */}
          <motion.div
            style={{ y: textY }}
            className="lg:col-span-4 order-2 lg:order-3 flex flex-col justify-start pt-0 lg:pt-0 max-w-full"
          >
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: elyseCurve }}
              className="font-display text-xl md:text-2xl font-bold tracking-widest uppercase mb-6 max-w-full"
              style={{ color:"#999999" }}
            >
              About Us
            </motion.p>
            <motion.p
              className="font-body text-sm md:text-[0.95rem] leading-[1.8] mb-4 max-w-full text-justify"
              style={{ color:"rgba(255,255,255,0.6)" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1, delay: 0.1, ease: elyseCurve }}
            >
              Every element reflects a commitment to excellence. From the precision of our CNC machinery to our thoughtfully curated materials, the facility embodies a holistic approach to luxury joinery.
            </motion.p>

            <motion.p
              className="font-body text-sm md:text-[0.95rem] leading-[1.8] mb-8 max-w-full text-justify"
              style={{ color:"rgba(255,255,255,0.6)" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1, delay: 0.22, ease: elyseCurve }}
            >
              Whether you're seeking bespoke interiors, fire-rated solutions, or a partner that fosters precision, we deliver it all.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.38, ease: elyseCurve }}
            >
              <button
                onClick={() => navigate("/about-us")}
                className="inline-flex items-center gap-2.5 px-8 py-3 rounded-full font-body text-xs tracking-[0.2em] uppercase transition-all duration-500 cursor-pointer"
                style={{
                  color:"rgba(255,255,255,0.85)",
                  background:"rgba(255, 255, 255, 0.08)",
                  backdropFilter:"blur(20px)",
                  WebkitBackdropFilter:"blur(20px)",
                  border:"0.5px solid rgba(255, 255, 255, 0.15)",
                }}
              >
                Learn More
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
