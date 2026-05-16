import { useEffect } from"react";
import { motion } from"framer-motion";
import { useNavigate } from"react-router-dom";
import Navbar from"@/components/Navbar";
import Footer from"@/components/Footer";
import { useLenis } from"@/hooks/useLenis";
import WordReveal from"@/components/WordReveal";
import { PLACEHOLDER_IMAGE } from"@/constants/placeholderImage";

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
            src={PLACEHOLDER_IMAGE}
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
            text="Demo Services Overview"
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. This paragraph is placeholder copy for portfolio demos — swap with real messaging before launch.
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
              Demo Section Alpha
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2, ease: E }}
              className="font-body text-base leading-[1.8] mb-4 text-justify"
              style={{ color:"rgba(255,255,255,0.6)" }}
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium — dummy narrative for UI demonstration only.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.35, ease: E }}
              className="font-body text-base leading-[1.8] text-justify"
              style={{ color:"rgba(255,255,255,0.5)" }}
            >
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet — another filler paragraph to preview typography rhythm.
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
            <img src={PLACEHOLDER_IMAGE} alt="Demo service imagery" className="w-full h-full object-cover" style={{ aspectRatio:"4/3" }} />
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
            <img src={PLACEHOLDER_IMAGE} alt="Demo CNC placeholder" className="w-full h-full object-cover" style={{ aspectRatio:"4/3" }} />
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
              Demo Section Beta
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2, ease: E }}
              className="font-body text-base leading-[1.8] mb-5 text-justify"
              style={{ color:"rgba(255,255,255,0.6)" }}
            >
              At vero eos et accusamus et iusto odio dignissimos ducimus — placeholder manufacturing storyline for mockups.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.3, ease: E }}
              className="font-body text-base leading-[1.8] text-justify"
              style={{ color:"rgba(255,255,255,0.5)" }}
            >
              Similique sunt in culpa qui officia deserunt mollitia animi — filler text continues for layout checks.
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
              Demo Section Gamma
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2, ease: E }}
              className="font-body text-base leading-[1.8] mb-5 text-justify"
              style={{ color:"rgba(255,255,255,0.6)" }}
            >
              Placeholder finishing paragraph — demonstrates multi-line body copy without referencing real projects.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.3, ease: E }}
              className="font-body text-base leading-[1.8] text-justify"
              style={{ color:"rgba(255,255,255,0.5)" }}
            >
              Totam rem aperiam eaque ipsa quae ab illo inventore veritatis — illustrative supporting sentence for demos.
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
            <img src={PLACEHOLDER_IMAGE} alt="Edge banding and finishing" className="w-full h-full object-cover" style={{ aspectRatio:"4/3" }} />
          </motion.div>
        </div>
      </section>

      {/* Section 4: Commercial Project Work - Full Width Cinematic Banner */}
      <section className="relative w-full py-32 md:py-44 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            src={PLACEHOLDER_IMAGE}
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
            Demo Banner Headline
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2, ease: E }}
            className="font-body text-base leading-[1.8] mb-5 text-justify"
            style={{ color:"rgba(255,255,255,0.65)" }}
          >
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse — filler banner paragraph #1.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.3, ease: E }}
            className="font-body text-base leading-[1.8] text-justify"
            style={{ color:"rgba(255,255,255,0.5)" }}
          >
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur — filler banner paragraph #2 for rhythm.
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
            <img src={PLACEHOLDER_IMAGE} alt="Fire rated door manufacturing" className="w-full h-full object-cover" style={{ aspectRatio:"4/3" }} />
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
              Demo Compliance Section
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2, ease: E }}
              className="font-body text-base leading-[1.8] mb-4 text-justify"
              style={{ color:"rgba(255,255,255,0.6)" }}
            >
              Ut enim ad minima veniam quis nostrum exercitationem — illustrative regulatory-style copy only.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.25, ease: E }}
              className="font-body text-base leading-[1.8] mb-4 text-justify"
              style={{ color:"rgba(255,255,255,0.6)" }}
            >
              Quis autem vel eum iure reprehenderit qui dolorem — second dummy paragraph; no certifications implied.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.3, ease: E }}
              className="font-body text-base leading-[1.8] text-justify"
              style={{ color:"rgba(255,255,255,0.5)" }}
            >
              Excepteur sint occaecat cupidatat non proident sunt in culpa — closing filler lines for prototype review.
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
            Demo Capability Highlights
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2, ease: E }}
            className="font-body text-base leading-relaxed text-center max-w-2xl mx-auto mb-16"
            style={{ color:"rgba(255,255,255,0.5)" }}
          >
            Arcu cursus euismod quis viverra nibh cras pulvinar mattis — neutral filler intro before icon cards.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                ),
                title:"Demo Point One", 
                desc:"Lorem ipsum dolor sit amet — illustrative bullet copy for grid layouts." 
              },
              { 
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                ),
                title:"Demo Point Two", 
                desc:"Consectetur adipiscing elit sed do eiusmod tempor — placeholder description." 
              },
              { 
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                ),
                title:"Demo Point Three", 
                desc:"Ut labore et dolore magna aliqua — dummy manufacturing talking point." 
              },
              { 
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                ),
                title:"Demo Point Four", 
                desc:"Fictional compliance statement for prototype demos — replace before launch." 
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
              src={PLACEHOLDER_IMAGE}
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
              Demo Call-to-Action Block
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.25, ease: E }}
              className="font-body text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Tap Contact Us below — form submits locally with toast feedback only; wire real endpoints when you ship.
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
