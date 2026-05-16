import { motion } from"framer-motion";
import { Quote } from"lucide-react";

// Temporary sample testimonials — replace with real client quotes later
const testimonials = [
  {
    quote:"“Carousel transitions felt buttery — still waiting on actual deliverables.”",
    author:"Demo Client A",
    role:"Imaginary PM",
    company:"Placeholder Ventures",
  },
  {
    quote:"“Their decks borrowed Helvetica confidently while KPIs stayed at zero.”",
    author:"Demo Client B",
    role:"Creative Ops",
    company:"Sample Holdings LLC",
  },
  {
    quote:"“Responsive breakpoints convinced leadership before procurement woke up.”",
    author:"Demo Client C",
    role:"Placeholder Sponsor",
    company:"Concept Contractor Group",
  }
];

const easeOutExpo = [0.16, 1, 0.3, 1] as [number, number, number, number];

const Testimonials = () => {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-20 relative  overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.8 }}
            transition={{ duration: 0.8, ease: easeOutExpo }}
            className="font-display text-2xl md:text-3xl font-bold tracking-widest uppercase mb-6"
            style={{ color:"#999999" }}
          >
            Vocal Beta Readers
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.8 }}
            transition={{ duration: 0.8, delay: 0.1, ease: easeOutExpo }}
            className="font-display text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            Trusted by Imaginary <br className="hidden md:block" />
            <span className="italic" style={{ color:"#999999" }}>Stakeholders</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="glass-card p-10 rounded-2xl flex flex-col relative group transition-all duration-500 hover:-translate-y-2"
              style={{
                background:"rgba(255,255,255,0.03)",
                border:"1px solid rgba(255,255,255,0.05)"
              }}
            >
              <Quote className="w-10 h-10 mb-6 opacity-20 text-[#999999] group-hover:opacity-40 transition-opacity duration-500" />
              <p className="font-body text-sm text-white/70 leading-relaxed mb-8 flex-grow">{t.quote}</p>
              <div>
                <h4 className="font-display text-white text-lg tracking-wide mb-1">{t.author}</h4>
                <p className="font-body text-xs text-[#999999] uppercase tracking-wider">{t.role}</p>
                <p className="font-body text-xs text-white/40 mt-1">{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;