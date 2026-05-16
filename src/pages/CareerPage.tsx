import { useEffect } from"react";
import { motion, useScroll, useTransform } from"framer-motion";
import { useNavigate } from"react-router-dom";
import Navbar from"@/components/Navbar";
import Footer from"@/components/Footer";
import { useLenis } from"@/hooks/useLenis";
import WordReveal from"@/components/WordReveal";
import { PLACEHOLDER_IMAGE } from"@/constants/placeholderImage";

const easeOutExpo = [0.16, 1, 0.3, 1] as [number, number, number, number];

const CareerPage = () => {
  useLenis();
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll();
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      title:"WELL DEFINED CAREER PATH",
      desc:"Clear progression frameworks that recognize and reward your growing expertise in joinery and manufacturing.",
    },
    {
      title:"UNPARALLELED CAREER GROWTH",
      desc:"Opportunities to work on high-profile, large-scale commercial projects that elevate your professional portfolio.",
    },
    {
      title:"INNOVATION DRIVEN CULTURE",
      desc:"Access to state-of-the-art German technology and a workplace that encourages creative problem-solving.",
    },
    {
      title:"REWARDING EXCELLENCE",
      desc:"Competitive compensation and a supportive environment that truly values your craftsmanship and dedication.",
    },
  ];

  return (
    <div className="grain-overlay w-full min-h-screen" >
      <Navbar />

      {/* Hero Section — Full-screen background image with simple centered text */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-24">
        {/* Background image */}
        <motion.img
          src={PLACEHOLDER_IMAGE}
          alt="Team and manufacturing"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ y: imageY, scale: 1.1, filter:"brightness(0.45)" }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/80 via-[#0f172a]/60 to-[#0f172a]/95" />

        {/* Centered content (no box, just clean text) */}
        <div className="relative z-10 w-full px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.1, ease: easeOutExpo }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: easeOutExpo }}
              className="font-body text-xs tracking-[0.35em] uppercase mb-5"
              style={{ color:"#999999" }}
            >
              Let's Work Together
            </motion.p>

            <WordReveal
              text="Join Our Team of Craftsmanship and Innovation"
              className="font-display text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.08] mb-6"
              style={{ color:"rgba(255,255,255,0.96)" }}
              delay={0.1}
              as="h1"
            />

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.9, delay: 0.3, ease: easeOutExpo }}
              className="font-body text-sm md:text-base leading-relaxed md:leading-loose"
              style={{ color:"rgba(255,255,255,0.72)" }}
            >
              We don’t just build furniture—we craft experiences, shape environments, and redefine spaces with precision and purpose. Our team is at the heart of everything we do, blending traditional craftsmanship with advanced German technology to deliver exceptional joinery solutions. We’re always looking for passionate, creative, and skilled individuals who share our commitment to quality, innovation, and excellence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Benefits / Advantages Section */}
      <section className="relative w-full px-6 md:px-12 py-24 bg-[#0a1220]/50 border-t border-white/5">
        
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, ease: easeOutExpo }}
              className="font-body text-xs tracking-[0.35em] uppercase mb-4"
              style={{ color:"#999999" }}
            >
              Advantages
            </motion.p>
            <WordReveal
              text="Benefits of Working With Us"
              className="font-display text-4xl md:text-5xl font-bold leading-[1.1] max-w-3xl mx-auto"
              style={{ color:"rgba(255,255,255,0.95)" }}
              delay={0.1}
              as="h2"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 1, delay: 0.1 + i * 0.15, ease: easeOutExpo }}
                whileHover={{ y: -8, transition: { duration: 0.4, ease: easeOutExpo } }}
                className="group rounded-3xl p-8 flex flex-col justify-between cursor-default min-h-[280px]"
                style={{
                  background:"rgba(255,255,255,0.03)",
                  border:"0.5px solid rgba(255,255,255,0.1)",
                  backdropFilter:"blur(20px)",
                  WebkitBackdropFilter:"blur(20px)",
                  transition:"border-color 0.5s ease, background 0.5s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor ="rgba(153, 153, 153,0.3)";
                  e.currentTarget.style.background ="rgba(255,255,255,0.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor ="rgba(255,255,255,0.1)";
                  e.currentTarget.style.background ="rgba(255,255,255,0.03)";
                }}
              >
                <div>
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-8"
                    style={{ background:"rgba(153, 153, 153,0.1)", color:"#999999" }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  </div>
                  <h3 className="font-display text-lg font-medium mb-4 leading-snug" style={{ color:"rgba(255,255,255,0.92)" }}>
                    {item.title}
                  </h3>
                </div>
                <p className="font-body text-sm leading-relaxed" style={{ color:"rgba(255,255,255,0.5)" }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full px-6 md:px-12 py-24 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1, ease: easeOutExpo }}
        >
          <a
            href="mailto:careers@interior.ae"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-body text-sm tracking-[0.2em] uppercase transition-all duration-500 cursor-pointer"
            style={{
              color:"white",
              background:"#13294B",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background ="#1A365D";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background ="#13294B";
            }}
          >
            Apply Now
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default CareerPage;