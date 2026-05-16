import { useState, useEffect } from"react";
import { motion, AnimatePresence } from"framer-motion";
import { ChevronDown } from"lucide-react";
import Navbar from"@/components/Navbar";
import Footer from"@/components/Footer";
import { useLenis } from"@/hooks/useLenis";
import WordReveal from"@/components/WordReveal";
import { useNavigate } from"react-router-dom";
import { PLACEHOLDER_IMAGE } from"@/constants/placeholderImage";

const easeOutExpo = [0.22, 1, 0.36, 1] as [number, number, number, number];

const faqs = [
  {
    q:"Does this demo include real procurement?",
    a:"No — accordion answers are Latin-inspired stubs while designers iterate on hierarchy.",
  },
  {
    q:"Who is the imaginary audience?",
    a:"Stakeholders reviewing animation curves, grid density, and toast UX.",
  },
  {
    q:"Can I trust compliance statements shown here?",
    a:"Absolutely not until counsel replaces every clause with jurisdiction-specific language.",
  },
  {
    q:"Does the contact form send emails?",
    a:"It only fires local toasts from ContactForm.tsx — wire Supabase or SMTP before launch.",
  }
];

const FAQPage = () => {
  useLenis();
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="grain-overlay w-full min-h-screen" >
      <Navbar />

      {/* Hero Section with Curved Image */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex flex-col items-center justify-center pt-20">
        <div 
          className="absolute inset-0 z-0 overflow-hidden"
          style={{ clipPath:"ellipse(150% 100% at 50% 0%)" }}
        >
          <img 
            src={PLACEHOLDER_IMAGE} 
            alt="Procurement Background" 
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/60 via-transparent to-[#0f172a]" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
          <WordReveal
            text="Demo FAQ Stack"
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
            delay={0.1}
            as="h1"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: easeOutExpo }}
            className="font-body text-lg md:text-xl text-white/70 max-w-2xl mx-auto"
          >
            Pretend answers accompany accordion easing demos — swap legal tone later.
          </motion.p>
        </div>
      </section>

      {/* FAQs Accordion List */}
      <section className="relative z-10 w-full px-4 md:px-8 py-20 md:py-32">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: easeOutExpo }}
                  className="rounded-xl overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-md"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left px-6 py-5 md:px-8 md:py-6 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-display text-lg md:text-xl text-white/90">
                      {faq.q}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white"
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height:"auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0">
                          <p className="font-body text-base text-white/60 leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA / RFQ Section */}
      <section className="relative z-10 w-full px-4 md:px-8 pb-32 mt-10">
        <motion.div 
          className="max-w-5xl mx-auto rounded-3xl overflow-hidden relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 1, ease: easeOutExpo }}
          style={{ minHeight:"400px" }}
        >
          <div className="absolute inset-0">
            <img 
              src={PLACEHOLDER_IMAGE} 
              alt="Demo CTA backdrop" 
              className="w-full h-full object-cover brightness-[0.35]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent" />
          </div>
          
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-10 md:p-20 min-h-[400px]">
            <motion.h2 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.15, ease: easeOutExpo }}
              className="font-display text-3xl md:text-5xl font-bold text-white mb-6"
            >
              Demo RFQ Banner
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.25, ease: easeOutExpo }}
              className="font-body text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Need filler persuasion? Pretend procurement decks upload here — actual ingestion ships later with backend hooks.
            </motion.p>
            <motion.a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
                setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior:"smooth" }), 100);
              }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.35, ease: easeOutExpo }}
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

export default FAQPage;
