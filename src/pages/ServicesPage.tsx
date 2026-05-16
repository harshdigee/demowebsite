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

      {/* ─── Hero ─── */}
      <section className="relative w-full min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            src={customJoineryImg}
            alt="Commercial Joinery"
            className="w-full h-full object-cover"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: E }}
            style={{ filter:"brightness(0.3)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto w-full px-6 md:px-12 pb-20 pt-40">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: E }}
            className="font-body text-[10px] tracking-[0.35em] uppercase mb-4"
            style={{ color:"#999999" }}
          >
            What We Do
          </motion.p>
          <WordReveal
            text="Craftsmanship at Every Scale"
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-8"
            style={{ color:"rgba(255,255,255,0.95)" }}
            delay={0.3}
            as="h1"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: E }}
            className="font-body text-base md:text-lg max-w-xl leading-[1.7] text-justify"
            style={{ color:"rgba(255,255,255,0.6)" }}
          >
            From precision CNC machining to certified fire-rated door systems, we deliver end-to-end joinery and fit-out solutions for the UAE's most demanding projects.
          </motion.p>
        </div>
      </section>

      {/* ─── Section 1: Custom Joinery — Image Right ─── */}
      <section className="relative w-full px-6 md:px-12 py-24 md:py-36">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
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
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.1, ease: E }}
              className="font-display text-3xl md:text-5xl font-bold leading-[1.1] mb-8"
              style={{ color:"rgba(255,255,255,0.95)" }}
            >
              Custom Joinery Solutions in Dubai
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2, ease: E }}
              className="font-body text-base leading-relaxed mb-6"
              style={{ color:"rgba(255,255,255,0.6)" }}
            >
              We provide well-organized joinery works for fit-out projects across the UAE. Many contractors and developers in offices, hotels, retail spaces, healthcare facilities, and mixed-use buildings rely on us. We handle everything from manufacturing and supplying to installing commercial joinery packages, ensuring they match approved shop drawings, project specifications, and timelines.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.3, ease: E }}
              className="font-body text-base leading-relaxed"
              style={{ color:"rgba(255,255,255,0.5)" }}
            >
              Our services cover reception desks, cabinetry, wall panels, workstations, and other architectural joinery elements used in commercial interiors. With years of experience in handling office joinery, we are also a trusted hospitality joinery supplier in the UAE.
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
            <img
              src={customJoineryImg}
              alt="Custom joinery craftsmanship"
              className="w-full h-full object-cover"
              style={{ aspectRatio:"4/3" }}
            />
          </motion.div>
        </div>
      </section>

      {/* ─── Section 2: CNC Machining — Image Left ─── */}
      <section className="relative w-full px-6 md:px-12 py-24 md:py-36">
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 1.05 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.2, delay: 0.1, ease: E }}
            className="rounded-2xl overflow-hidden order-2 lg:order-1"
            style={{ border:"0.5px solid rgba(255,255,255,0.1)" }}
          >
            <img
              src={cncMachiningImg}
              alt="HOMAG CNC machining"
              className="w-full h-full object-cover"
              style={{ aspectRatio:"4/3" }}
            />
          </motion.div>

          <div className="order-1 lg:order-2">
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
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.1, ease: E }}
              className="font-display text-3xl md:text-5xl font-bold leading-[1.1] mb-8"
              style={{ color:"rgba(255,255,255,0.95)" }}
            >
              CNC Machining & Precision Cutting
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2, ease: E }}
              className="font-body text-base leading-relaxed mb-6"
              style={{ color:"rgba(255,255,255,0.6)" }}
            >
              We run our own manufacturing facilities equipped with advanced CNC machines, including German HOMAG systems, to cut, drill, and shape joinery components with sub-millimetre accuracy.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.3, ease: E }}
              className="font-body text-base leading-relaxed"
              style={{ color:"rgba(255,255,255,0.5)" }}
            >
              These controlled systems allow accurate measurements and ensure products remain consistent even in large quantities. The CNC process makes it possible to create complex joinery designs while meeting approved material standards and project specifications.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ─── Section 3: Edge Banding — Image Right ─── */}
      <section className="relative w-full px-6 md:px-12 py-24 md:py-36">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
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
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.1, ease: E }}
              className="font-display text-3xl md:text-5xl font-bold leading-[1.1] mb-8"
              style={{ color:"rgba(255,255,255,0.95)" }}
            >
              Edge Banding & Finishing
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2, ease: E }}
              className="font-body text-base leading-relaxed mb-6"
              style={{ color:"rgba(255,255,255,0.6)" }}
            >
              All joinery parts go through strict edge banding and finishing steps to ensure they last longer and maintain uniform detail quality in commercial setups.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.3, ease: E }}
              className="font-body text-base leading-relaxed"
              style={{ color:"rgba(255,255,255,0.5)" }}
            >
              High-grade edge banding covers open edges and shields surfaces in busy areas like cabinets, reception desks, shelves, and workstations. These processes make sure the joinery systems match project material rules and stay reliable over time.
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
            <img
              src={edgeBandingImg}
              alt="Edge banding and finishing"
              className="w-full h-full object-cover"
              style={{ aspectRatio:"4/3" }}
            />
          </motion.div>
        </div>
      </section>

      {/* ─── Section 4: Commercial Project Work — Full Width Banner ─── */}
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

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
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
            className="font-display text-3xl md:text-5xl font-bold leading-[1.1] mb-8 max-w-2xl"
            style={{ color:"rgba(255,255,255,0.95)" }}
          >
            Commercial Project Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2, ease: E }}
            className="font-body text-base md:text-lg leading-relaxed mb-6 max-w-2xl"
            style={{ color:"rgba(255,255,255,0.65)" }}
          >
            We focus on contractor-led projects. We work with contractors, consultants, and project leaders to provide planned joinery solutions covering offices, hotels, shops, and mixed-use commercial buildings.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.3, ease: E }}
            className="font-body text-base md:text-lg leading-relaxed max-w-2xl"
            style={{ color:"rgba(255,255,255,0.5)" }}
          >
            As a commercial fit-out contractor, we handle manufacturing schedules, manage site deliveries, and oversee installation teams to stay in sync with the construction programme and meet every project's needs.
          </motion.p>
        </div>
      </section>

      {/* ─── Section 5: Fire Rated Doors — Image Left ─── */}
      <section className="relative w-full px-6 md:px-12 py-24 md:py-36">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 1.05 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.2, delay: 0.1, ease: E }}
            className="rounded-2xl overflow-hidden"
            style={{ border:"0.5px solid rgba(255,255,255,0.1)" }}
          >
            <img
              src={bespokeFurnitureImg}
              alt="Fire rated door manufacturing"
              className="w-full h-full object-cover"
              style={{ aspectRatio:"4/3" }}
            />
          </motion.div>

          <div>
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
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.1, ease: E }}
              className="font-display text-3xl md:text-5xl font-bold leading-[1.1] mb-8"
              style={{ color:"rgba(255,255,255,0.95)" }}
            >
              Fire Rated Door Supply & Installation
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2, ease: E }}
              className="font-body text-base leading-relaxed mb-6"
              style={{ color:"rgba(255,255,255,0.6)" }}
            >
              We stand as a trusted fire-rated door supplier in Dubai, offering certified fire door systems made for commercial projects throughout the UAE. We produce and set up UAE Civil Defence approved fire doors with fire resistance ratings of 30, 60, or 120 minutes.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.3, ease: E }}
              className="font-body text-base leading-relaxed"
              style={{ color:"rgba(255,255,255,0.5)" }}
            >
              Every system complies with BS 476 fire-rated doors UAE standards and includes the necessary documents required to pass authority approvals and inspections. Our fire door services cover supply, installation, coordinating frames, integrating hardware, and providing certification documents.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ─── Capabilities Cards ─── */}
      <section className="relative w-full px-6 md:px-12 py-24 md:py-36">
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: E }}
            className="font-body text-[10px] tracking-[0.35em] uppercase mb-4 text-center"
            style={{ color:"#999999" }}
          >
            Why Choose Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: E }}
            className="font-display text-3xl md:text-5xl font-bold leading-[1.1] mb-16 text-center"
            style={{ color:"rgba(255,255,255,0.95)" }}
          >
            Our Process, Your Advantage
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num:"01", title:"Production Planning", desc:"Every project follows a structured process that includes production planning, quality checks, and installation coordination to match contractor schedules." },
              { num:"02", title:"Quality Assurance", desc:"Strict quality control at every stage ensures consistent output across projects of any scale, from boutique retail to large-scale hospitality." },
              { num:"03", title:"Site Coordination", desc:"We manage on-site installations, set project schedules, and organize contractor-driven delivery plans for seamless project execution." },
            ].map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.1 + i * 0.15, ease: E }}
                className="rounded-2xl p-6 md:p-7 max-w-full"
                style={{
                  background:"rgba(255,255,255,0.03)",
                  border:"0.5px solid rgba(255,255,255,0.1)",
                  backdropFilter:"blur(20px)",
                }}
              >
                <span
                  className="font-display text-4xl font-bold block mb-5 text-justify"
                  style={{ color:"rgba(153, 153, 153,0.3)" }}
                >
                  {item.num}
                </span>
                <h3 className="font-display text-lg font-bold mb-3 leading-snug text-justify max-w-full" style={{ color:"rgba(255,255,255,0.9)" }}>
                  {item.title}
                </h3>
                <p className="font-body text-sm leading-[1.6] text-justify max-w-full" style={{ color:"rgba(255,255,255,0.5)" }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Bottom CTA ─── */}
      <section className="relative w-full px-6 md:px-12 pb-32">
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
              Send your RFQ, BOQ, or technical drawings and let our team handle the rest -- from manufacturing to final installation.
            </motion.p>
            <motion.a
              href="/"
              onClick={(e) => {
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
      </section>

      <Footer />
    </div>
  );
};

export default ServicesInternalPage;
