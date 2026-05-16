import { useEffect } from"react";
import { motion, useScroll, useTransform } from"framer-motion";
import Navbar from"@/components/Navbar";
import Footer from"@/components/Footer";
import { useLenis } from"@/hooks/useLenis";
import WordReveal from"@/components/WordReveal";

const easeOutExpo = [0.16, 1, 0.3, 1] as [number, number, number, number];

const PrivacyPolicy = () => {
  useLenis();
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title:"1. Information We Collect",
      content: (
        <>
          <p className="mb-4">We may collect the following types of information:</p>
          <ul className="list-disc pl-6 space-y-2 text-white/60">
            <li><strong className="text-white/80">Personal Information:</strong> Name, phone number, email, and address when you contact us or fill out a form.</li>
            <li><strong className="text-white/80">Project Details:</strong> Preferences or specifications related to joinery or interior projects.</li>
            <li><strong className="text-white/80">Technical Data:</strong> Browser type, IP address, time zone, and device information via cookies and analytics tools.</li>
          </ul>
        </>
      ),
    },
    {
      title:"2. How We Use Your Information",
      content: (
        <>
          <p className="mb-4">We use your data to:</p>
          <ul className="list-disc pl-6 space-y-2 text-white/60">
            <li>Respond to inquiries and service requests</li>
            <li>Provide project estimates and updates</li>
            <li>Improve our website and customer experience</li>
            <li>Communicate special offers or updates (if subscribed)</li>
          </ul>
        </>
      ),
    },
    {
      title:"3. Cookies",
      content:"Our website uses cookies to enhance user experience and track traffic data. You can disable cookies via your browser settings.",
    },
    {
      title:"4. Sharing Your Data",
      content:"We do not sell or trade your personal data. Information may be shared with trusted third parties strictly for purposes like hosting, marketing, or analytics—under confidentiality agreements.",
    },
    {
      title:"5. Data Protection",
      content:"We implement industry-standard measures to protect your personal data from unauthorized access or disclosure.",
    },
    {
      title:"6. Your Rights",
      content: (
        <>
          <p className="mb-4">You can:</p>
          <ul className="list-disc pl-6 space-y-2 text-white/60">
            <li>Request access to your stored data</li>
            <li>Ask for corrections or deletions</li>
            <li>Opt out of marketing communications at any time</li>
          </ul>
        </>
      ),
    },
    {
      title:"7. Changes to Policy",
      content:"We reserve the right to modify this Privacy Policy at any time. Updates will be posted on this page with a revised effective date.",
    },
    {
      title:"8. Contact Us",
      content: (
        <div className="flex flex-col gap-2">
          <p>For any questions regarding this policy, contact us at:</p>
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
          <img src="/faq1.png" alt="Privacy Policy" className="w-full h-full object-cover" />
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
            text="Privacy Policy"
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
            We are committed to protecting your privacy. This policy explains how we collect, use, and protect your personal information when you visit our website or use our services.
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

export default PrivacyPolicy;