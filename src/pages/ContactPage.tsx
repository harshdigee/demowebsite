import { useEffect } from"react";
import { motion } from"framer-motion";
import Navbar from"@/components/Navbar";
import Footer from"@/components/Footer";
import { useLenis } from"@/hooks/useLenis";
import ContactForm from"@/components/ContactForm";
import { PLACEHOLDER_IMAGE } from"@/constants/placeholderImage";

const easeOutExpo = [0.22, 1, 0.36, 1] as [number, number, number, number];

const ContactPage = () => {
  useLenis();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="grain-overlay w-full min-h-screen" >
      <Navbar />

      {/* Hero with background image */}
      <section className="relative w-full h-[55vh] md:h-[65vh] flex items-center justify-center pt-24 overflow-hidden">
        <div
          className="absolute inset-0 z-0 overflow-hidden"
          style={{ clipPath:"ellipse(150% 100% at 50% 0%)" }}
        >
          <img
            src={PLACEHOLDER_IMAGE}
            alt="Contact background"
            className="w-full h-full object-cover"
            style={{ filter:"brightness(0.6)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/60 via-transparent to-[#0f172a]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.8 }}
            transition={{ duration: 0.7, ease: easeOutExpo }}
            className="font-display text-2xl md:text-3xl font-bold tracking-widest uppercase mb-6"
            style={{ color:"#999999" }}
          >
            Contact
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.8 }}
            transition={{ duration: 0.9, ease: easeOutExpo }}
            className="font-display text-4xl md:text-5xl lg:text-[3.5rem] leading-tight text-white mb-4"
          >
            Reach out — demo copy only
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.8 }}
            transition={{ duration: 0.9, delay: 0.1, ease: easeOutExpo }}
            className="font-body text-sm md:text-base text-white/70 max-w-2xl mx-auto"
          >
            Connect with fictional stakeholders through this prototype form — submissions toast locally only.
          </motion.p>
        </div>
      </section>

      {/* Main contact block */}
      <section className="relative w-full pb-28 px-4 md:px-8 lg:px-20">
        <div className="max-w-2xl mx-auto">
          <div
            className="rounded-3xl border border-white/10 bg-[rgba(6,10,17,0.85)] backdrop-blur-2xl px-6 py-8 md:px-10 md:py-10 lg:px-12 lg:py-12"
          >
            {/* Contact form */}
            <div
              className="rounded-2xl p-0 overflow-hidden relative"
              style={{
                background:"rgba(18, 34, 59, 0.55)",
                border:"0.5px solid rgba(255, 255, 255, 0.12)",
                backdropFilter:"blur(32px)",
                WebkitBackdropFilter:"blur(32px)",
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent rounded-t-2xl" />
              
              <div className="p-6 md:p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
