import { motion } from"framer-motion";
import ContactForm from"@/components/ContactForm";

const ContactUs = () => {

  return (
    <section
      className="py-24 px-4 md:px-8 lg:px-20  relative"
      id="contact"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-2xl md:text-3xl font-bold tracking-widest uppercase mb-6"
            style={{ color:"#999999" }}
          >
            Contact Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30, filter:"blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter:"blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight"
            style={{ color:"hsl(33, 30%, 90%)" }}
          >
            Let's Work <span className="text-gold-gradient">Together.</span>
          </motion.h2>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl p-0 overflow-hidden"
            style={{
              background:"rgba(18, 34, 59, 0.4)",
              backdropFilter:"blur(40px)",
              WebkitBackdropFilter:"blur(40px)",
              border:"0.5px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            {/* Top glass shine */}
            <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            
            <div className="p-6 md:p-8">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
