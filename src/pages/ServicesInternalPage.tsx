import { useEffect } from"react";
import { motion } from"framer-motion";
import { useNavigate } from"react-router-dom";
import Navbar from"@/components/Navbar";
import Footer from"@/components/Footer";
import { useLenis } from"@/hooks/useLenis";
import WordReveal from"@/components/WordReveal";

import customJoineryImg from"@/assets/custom-joinery.jpg";
import cncMachiningImg from"@/assets/cnc-machining.jpg";
import edgeBandingImg from"@/assets/edge-banding.jpg";
import commercialImg from"@/assets/commercial-residential.jpg";
import bespokeFurnitureImg from"@/assets/bespoke-furniture.webp";

const E = [0.22, 1, 0.36, 1] as [number, number, number, number];

const ServicesInternalPage = () => {
  useLenis();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="grain-overlay w-full min-h-screen" >
      <Navbar />

      {/* Hero */}
      <section className="relative w-full min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            src="/service-hero.png"
            alt="Our Services"
            className="w-full h-full object-cover"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: E }}
            style={{ filter:"brightness(0.35)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto w-full px-6 md:px-12 pb-20 pt-40">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: E }}
            className="font-body text-[10px] tracking-[0.35em] uppercase mb-4"
            style={{ color:"#999999" }}
          >
            Our Services
          </motion.p>
          <WordReveal
            text="Commercial Joinery and Fit-Out Services in the UAE"
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-8"
            style={{ color:"rgba(255,255,255,0.95)" }}
            delay={0.3}
            as="h2"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: E }}
            className="font-body text-lg md:text-xl leading-[1.75] text-justify"
            style={{ color:"rgba(255,255,255,0.6)" }}
            lang="en"
          >
            We deliver large-scale commercial joinery and fit-out packages across the UAE. We partner with developers, main contractors, and hospitality operators to manufacture and install high-quality joinery for complex projects. From production to final installation, our team ensures precision, consistency, and on-time delivery.
          </motion.p>
        </div>
      </section>

      {/* Section 1: Custom Joinery - Image Right */}
      <section className="relative w-full py-24 md:py-36">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: E }}
            className="font-body text-[10px] tracking-[0.35em] uppercase mb-4"
            style={{ color:"#999999" }}
          >
            Custom Joinery
          </motion.p>
        </div>
        <div className="max-w-5xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.1, ease: E }}
              className="font-display text-3xl md:text-4xl font-bold leading-[1.1] mb-6"
              style={{ color:"rgba(255,255,255,0.95)" }}
            >
              Custom Joinery Solutions in Dubai
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2, ease: E }}
              className="font-body text-base leading-[1.8] mb-4 text-justify"
              style={{ color:"rgba(255,255,255,0.6)" }}
            >
              We provide fully integrated joinery solutions for commercial fit-out projects across the UAE.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.25, ease: E }}
              className="font-body text-base leading-[1.8] mb-4 text-justify"
              style={{ color:"rgba(255,255,255,0.6)" }}
            >
              We support contractors and developers across offices, hotels, retail spaces, healthcare facilities, and mixed-use developments.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.3, ease: E }}
              className="font-body text-base leading-[1.8] mb-4 text-justify"
              style={{ color:"rgba(255,255,255,0.6)" }}
            >
              Our scope covers manufacturing, supply, and installation of complete joinery packages, delivered in line with approved shop drawings, specifications, and project timelines.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.35, ease: E }}
              className="font-body text-base leading-[1.8] mb-4 text-justify"
              style={{ color:"rgba(255,255,255,0.5)" }}
            >
              Our capabilities include reception areas, cabinetry, wall cladding, workstations, and bespoke architectural joinery.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.4, ease: E }}
              className="font-body text-base leading-[1.8] text-justify"
              style={{ color:"rgba(255,255,255,0.5)" }}
            >
              With a strong track record in large-scale production, we ensure seamless coordination between factory output and on-site installation.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 1.05 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.2, delay: 0.2, ease: E }}
            className="rounded-2xl overflow-hidden"
            style={{ border:"0.5px solid rgba(255,255,255,0.1)" }}
          >
            <img src={customJoineryImg} alt="Custom joinery craftsmanship" className="w-full h-full object-cover" style={{ aspectRatio:"4/3" }} />
          </motion.div>
        </div>
      </section>

      {/* Section 2: CNC Machining - Image Left */}
      <section className="relative w-full py-24 md:py-36">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: E }}
            className="font-body text-[10px] tracking-[0.35em] uppercase mb-4"
            style={{ color:"#999999" }}
          >
            CNC Machining
          </motion.p>
        </div>
        <div className="max-w-5xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 1.05 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.2, delay: 0.1, ease: E }}
            className="rounded-2xl overflow-hidden order-2 lg:order-1"
            style={{ border:"0.5px solid rgba(255,255,255,0.1)" }}
          >
            <img src={cncMachiningImg} alt="HOMAG CNC machining" className="w-full h-full object-cover" style={{ aspectRatio:"4/3" }} />
          </motion.div>

          <div className="order-1 lg:order-2">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.1, ease: E }}
              className="font-display text-3xl md:text-4xl font-bold leading-[1.1] mb-6"
              style={{ color:"rgba(255,255,255,0.95)" }}
            >
              CNC Machining and Precision Cutting
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2, ease: E }}
              className="font-body text-base leading-[1.8] mb-5 text-justify"
              style={{ color:"rgba(255,255,255,0.6)" }}
            >
              We operate advanced in-house manufacturing facilities equipped with CNC technology, including German HOMAG systems. These allow us to cut, drill, and shape joinery components with high precision and consistency.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.3, ease: E }}
              className="font-body text-base leading-[1.8] text-justify"
              style={{ color:"rgba(255,255,255,0.5)" }}
            >
              Our production processes ensure repeatable quality across large volumes, meeting project specifications and material standards. This capability enables us to deliver complex joinery packages efficiently while supporting staged project installations.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Section 3: Edge Banding - Image Right */}
      <section className="relative w-full py-24 md:py-36">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: E }}
            className="font-body text-[10px] tracking-[0.35em] uppercase mb-4"
            style={{ color:"#999999" }}
          >
            Edge Banding
          </motion.p>
        </div>
        <div className="max-w-5xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.1, ease: E }}
              className="font-display text-3xl md:text-4xl font-bold leading-[1.1] mb-6"
              style={{ color:"rgba(255,255,255,0.95)" }}
            >
              Edge Banding & Finishing
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2, ease: E }}
              className="font-body text-base leading-[1.8] mb-5 text-justify"
              style={{ color:"rgba(255,255,255,0.6)" }}
            >
              All joinery components undergo controlled edge banding and finishing processes to ensure durability, precision, and consistency.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.3, ease: E }}
              className="font-body text-base leading-[1.8] text-justify"
              style={{ color:"rgba(255,255,255,0.5)" }}
            >
              High-quality edge banding protects exposed surfaces in high-traffic environments such as offices, retail spaces, and hospitality interiors. Finishing methods are selected based on project specifications and intended use, ensuring long-term performance and visual consistency across all installed elements.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 1.05 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.2, delay: 0.2, ease: E }}
            className="rounded-2xl overflow-hidden"
            style={{ border:"0.5px solid rgba(255,255,255,0.1)" }}
          >
            <img src={edgeBandingImg} alt="Edge banding and finishing" className="w-full h-full object-cover" style={{ aspectRatio:"4/3" }} />
          </motion.div>
        </div>
      </section>

      {/* Section 4: Commercial Project Work - Full Width Cinematic Banner */}
      <section className="relative w-full py-32 md:py-44 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            src={commercialImg}
            alt="Commercial project"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.8, ease: E }}
            style={{ filter:"brightness(0.25)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: E }}
            className="font-body text-[10px] tracking-[0.35em] uppercase mb-4"
            style={{ color:"#999999" }}
          >
            Commercial Projects
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: E }}
            className="font-display text-3xl md:text-4xl font-bold leading-[1.1] mb-8 max-w-2xl"
            style={{ color:"rgba(255,255,255,0.95)" }}
          >
            Commercial Project Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2, ease: E }}
            className="font-body text-base leading-[1.8] mb-5 text-justify"
            style={{ color:"rgba(255,255,255,0.65)" }}
          >
            We specialise in large-scale commercial projects, working closely with main contractors, consultants, and project teams to deliver coordinated joinery packages.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.3, ease: E }}
            className="font-body text-base leading-[1.8] text-justify"
            style={{ color:"rgba(255,255,255,0.5)" }}
          >
            We manage production planning, logistics, and on-site installation to align with overall construction programmes. Our structured approach ensures timely delivery, efficient site execution, and compliance with project requirements.
          </motion.p>
        </div>
      </section>

      {/* Section 5: Fire Rated Doors - Image Left */}
      <section className="relative w-full py-24 md:py-36">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: E }}
            className="font-body text-[10px] tracking-[0.35em] uppercase mb-4"
            style={{ color:"#999999" }}
          >
            Fire Safety
          </motion.p>
        </div>
        <div className="max-w-5xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 1.05 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.2, delay: 0.1, ease: E }}
            className="rounded-2xl overflow-hidden"
            style={{ border:"0.5px solid rgba(255,255,255,0.1)" }}
          >
            <img src={bespokeFurnitureImg} alt="Fire rated door manufacturing" className="w-full h-full object-cover" style={{ aspectRatio:"4/3" }} />
          </motion.div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.1, ease: E }}
              className="font-display text-3xl md:text-4xl font-bold leading-[1.1] mb-6"
              style={{ color:"rgba(255,255,255,0.95)" }}
            >
              Fire Rated Door Supply & Installation
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2, ease: E }}
              className="font-body text-base leading-[1.8] mb-4 text-justify"
              style={{ color:"rgba(255,255,255,0.6)" }}
            >
              We are a trusted supplier and installer of certified fire-rated door systems in the UAE.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.25, ease: E }}
              className="font-body text-base leading-[1.8] mb-4 text-justify"
              style={{ color:"rgba(255,255,255,0.6)" }}
            >
              We manufacture and install fire doors compliant with UAE Civil Defence requirements, with fire resistance ratings of 30, 60, and 120 minutes. All systems are delivered with full certification and documentation to support authority approvals and inspections.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.3, ease: E }}
              className="font-body text-base leading-[1.8] text-justify"
              style={{ color:"rgba(255,255,255,0.5)" }}
            >
              Our scope includes supply, installation, frame coordination, hardware integration, and certification compliance.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Comprehensive Capabilities Cards */}
      <section className="relative w-full py-24 md:py-36">
        
        <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: E }}
            className="font-body text-[10px] tracking-[0.35em] uppercase mb-4 text-center"
            style={{ color:"#999999" }}
          >
            Core Capabilities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: E }}
            className="font-display text-3xl md:text-5xl font-bold leading-[1.1] mb-6 text-center"
            style={{ color:"rgba(255,255,255,0.95)" }}
          >
            What Makes Us the Right Partner
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2, ease: E }}
            className="font-body text-base leading-relaxed text-center max-w-2xl mx-auto mb-16"
            style={{ color:"rgba(255,255,255,0.5)" }}
          >
            Choosing the right joinery partner is critical to project success. We combine manufacturing capability with project delivery expertise. We deliver:
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                ),
                title:"Large-Scale Capacity", 
                desc:"Large-scale production capacity with consistent quality across every project stage." 
              },
              { 
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                ),
                title:"End-to-End Coordination", 
                desc:"Full coordination from factory production through to on-site installation." 
              },
              { 
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                ),
                title:"Precision Manufacturing", 
                desc:"Precision-driven manufacturing using advanced CNC systems and European machinery." 
              },
              { 
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                ),
                title:"Strict Compliance", 
                desc:"Full compliance with project specifications and UAE regulatory standards." 
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.9, delay: 0.1 + i * 0.18, ease: E }}
                whileHover={{ y: -8, transition: { duration: 0.4, ease: E } }}
                className="group rounded-2xl p-7 flex flex-col cursor-default"
                style={{
                  background:"rgba(255,255,255,0.03)",
                  border:"0.5px solid rgba(255,255,255,0.1)",
                  backdropFilter:"blur(20px)",
                  transition:"border-color 0.5s ease, background 0.5s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor ="rgba(153, 153, 153,0.3)";
                  e.currentTarget.style.background ="rgba(255,255,255,0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor ="rgba(255,255,255,0.1)";
                  e.currentTarget.style.background ="rgba(255,255,255,0.03)";
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 shrink-0"
                  style={{ background:"rgba(153, 153, 153,0.08)", color:"#999999" }}
                >
                  {item.icon}
                </div>
                <h3 className="font-display text-lg font-bold mb-3 leading-snug" style={{ color:"rgba(255,255,255,0.92)" }}>
                  {item.title}
                </h3>
                <p className="font-body text-sm leading-[1.75]" style={{ color:"rgba(255,255,255,0.5)" }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative w-full pb-32">
        <div className="px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 1, ease: E }}
          className="max-w-5xl mx-auto rounded-3xl overflow-hidden relative"
          style={{ minHeight:"360px" }}
        >
          <div className="absolute inset-0">
            <img
              src={cncMachiningImg}
              alt="Get in touch"
              className="w-full h-full object-cover brightness-[0.25]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/50 to-transparent" />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center text-center p-10 md:p-20 min-h-[360px]">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.15, ease: E }}
              className="font-display text-3xl md:text-5xl font-bold text-white mb-6"
            >
              Ready to Start Your Project?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.25, ease: E }}
              className="font-body text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Send your RFQ, BOQ, or technical drawings and let our team handle the rest — from manufacturing to final installation.
            </motion.p>
            <motion.a
              href="/"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                navigate("/");
                setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior:"smooth" }), 150);
              }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.35, ease: E }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-4 rounded-full font-body text-sm font-medium tracking-wide uppercase transition-colors hover:bg-white/90 cursor-pointer inline-block"
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesInternalPage;
