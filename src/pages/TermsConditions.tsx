import { useEffect } from"react";
import { motion, useScroll, useTransform } from"framer-motion";
import Navbar from"@/components/Navbar";
import Footer from"@/components/Footer";
import { useLenis } from"@/hooks/useLenis";
import WordReveal from"@/components/WordReveal";
import { PLACEHOLDER_IMAGE } from"@/constants/placeholderImage";

const easeOutExpo = [0.16, 1, 0.3, 1] as [number, number, number, number];

const TermsConditions = () => {
  useLenis();
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title:"1. Acceptance of Terms",
      content:"By accessing or using our website, you agree to these terms. If you do not agree, please do not use our services or website.",
    },
    {
      title:"2. Services Overview",
      content:"We offer bespoke joinery, custom furniture, kitchen cabinetry, wall paneling, fit-outs, and related woodworking solutions. All products are custom-made, subject to availability and confirmed specifications.",
    },
    {
      title:"3. Quotes & Pricing",
      content: (
        <ul className="list-disc pl-6 space-y-2 text-white/60">
          <li>All quotations are valid for a limited time as stated in the quote.</li>
          <li>Final costs may vary based on material availability, project changes, or custom requests.</li>
          <li>Prices do not include installation unless stated otherwise.</li>
        </ul>
      ),
    },
    {
      title:"4. Project Timelines",
      content:"We strive to complete projects on time, but delays may occur due to supply issues, technical adjustments, or client revisions.",
    },
    {
      title:"5. Intellectual Property",
      content:"All content on this site, including designs, images, and text, is proprietary and may not be used without written consent.",
    },
    {
      title:"6. User Conduct",
      content: (
        <>
          <p className="mb-4">Users must not:</p>
          <ul className="list-disc pl-6 space-y-2 text-white/60">
            <li>Misuse the website</li>
            <li>Attempt unauthorized access</li>
            <li>Upload malicious content or spam</li>
          </ul>
        </>
      ),
    },
    {
      title:"7. Limitation of Liability",
      content: (
        <>
          <p className="mb-4">We shall not be liable for:</p>
          <ul className="list-disc pl-6 space-y-2 text-white/60">
            <li>Any indirect damages arising from website usage</li>
            <li>Delays or failures caused by external factors (e.g., suppliers, transport)</li>
          </ul>
        </>
      ),
    },
    {
      title:"8. Third-Party Links",
      content:"Our site may contain links to third-party sites. We are not responsible for their content or privacy practices.",
    },
    {
      title:"9. Modifications",
      content:"We may update these terms at any time without prior notice. Continued use of our website indicates acceptance of the new terms.",
    },
    {
      title:"10. Governing Law",
      content:"These terms are governed by the laws of UAE.",
    },
    {
      title:"11. Contact",
      content: (
        <div className="flex flex-col gap-2">
          <p>For questions about these Terms & Conditions, contact us at:</p>
          <p>Please use our contact form on the contact page to reach out to us.</p>
        </div>
      ),
    },
  ];

  return (
    <div className="grain-overlay w-full min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden flex items-end">
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
          <img src={PLACEHOLDER_IMAGE} alt="Terms and Conditions" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/70 to-black/30" />
        </motion.div>

        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 md:px-12 pb-24 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOutExpo }}
            className="font-body text-xs tracking-[0.35em] uppercase mb-6"
            style={{ color:"#999999" }}
          >
            Legal Information
          </motion.p>
          <WordReveal
            text="Terms & Conditions"
            className="font-display text-5xl md:text-6xl lg:text-[5rem] font-bold leading-[1.05] mb-6"
            style={{ color:"rgba(255,255,255,0.95)" }}
            delay={0.1}
            as="h1"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: easeOutExpo }}
            className="font-body text-sm md:text-base text-white/50"
          >
            Effective Date: 17/6/2025
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative w-full px-6 md:px-12 py-20 md:py-32">
        <div className="max-w-4xl mx-auto">
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: easeOutExpo }}
            className="font-body text-lg md:text-xl text-white/80 leading-relaxed mb-16"
          >
            These Terms & Conditions govern your use of our website and services.
          </motion.p>

          <div className="flex flex-col gap-8 md:gap-12">
            {sections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, ease: easeOutExpo }}
                className="rounded-2xl p-8 md:p-10 border border-white/5"
                style={{ 
                  background:"rgba(18, 34, 59, 0.3)",
                  backdropFilter:"blur(20px)",
                  WebkitBackdropFilter:"blur(20px)",
                }}
              >
                <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-6">
                  {section.title}
                </h2>
                <div className="font-body text-base md:text-lg text-white/60 leading-relaxed">
                  {section.content}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsConditions;