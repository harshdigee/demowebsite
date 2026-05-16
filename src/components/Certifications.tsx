import { motion } from "framer-motion";
import { ShieldCheck, Leaf, HardHat } from "lucide-react";

const certifications = [
  {
    title: "Demo ISO Suite · Alpha",
    description: "Placeholder scope statement",
    issuer: "Fictional Registrar LLC",
    certNo: "DEMO-ISO-9001-001",
    scope: "Imaginary widgets that prove modal spacing — replace before audits.",
    validity: "Expires whenever you swap this JSON blob.",
    icon: ShieldCheck,
  },
  {
    title: "Demo ISO Suite · Beta",
    description: "Environmental storyline stub",
    issuer: "Fictional Registrar LLC",
    certNo: "DEMO-ISO-14001-002",
    scope: "Carbon-ish verbs without telemetry — filler clause number two.",
    validity: "Illustrative validity line only.",
    icon: Leaf,
  },
  {
    title: "Demo ISO Suite · Gamma",
    description: "Safety narrative stub",
    issuer: "Fictional Registrar LLC",
    certNo: "DEMO-ISO-45001-003",
    scope: "Hard hats pictured for icon balance — no onsite guarantees.",
    validity: "Calendar decoration for designers.",
    icon: HardHat,
  },
];

const easeOutExpo = [0.16, 1, 0.3, 1] as [number, number, number, number];

const Certifications = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, ease: easeOutExpo }}
              className="font-body text-[10px] tracking-[0.35em] uppercase mb-4"
              style={{ color: "#999999" }}
            >
              Demo badges
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.1, ease: easeOutExpo }}
              className="font-display text-3xl md:text-4xl font-bold text-white"
            >
              Pretend <span className="italic" style={{ color: "#999999" }}>Certificates</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2, ease: easeOutExpo }}
            className="font-body text-sm text-white/50 max-w-md md:text-right"
          >
            Cards mirror the visual language of compliance grids without linking to real PDFs — swap entire dataset before launch.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => {
            const Icon = cert.icon;
            return (
              <motion.a
                key={idx}
                href="#"
                onClick={(e) => e.preventDefault()}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: easeOutExpo }}
                className="p-8 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#999999]/30 transition-all duration-500 group cursor-pointer hover:-translate-y-2 block"
              >
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[#999999]/10 transition-colors duration-500">
                  <Icon className="w-7 h-7 text-[#999999] group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="font-display text-2xl text-white mb-1 tracking-wide">{cert.title}</h3>
                <p className="font-body text-sm text-[#999999] uppercase tracking-wider mb-4">{cert.description}</p>
                <p className="font-body text-xs text-white/50 leading-relaxed mb-3">{cert.scope}</p>
                <div className="border-t border-white/5 pt-4 mt-auto">
                  <p className="font-body text-[10px] text-white/40 uppercase tracking-wider mb-1">Certificate: {cert.certNo}</p>
                  <p className="font-body text-[10px] text-white/40 uppercase tracking-wider mb-1">Issued by: {cert.issuer}</p>
                  <p className="font-body text-[10px] text-[#999999] uppercase tracking-wider">{cert.validity}</p>
                </div>
                <p className="font-body text-xs text-[#999999] mt-4 group-hover:text-white/70 transition-colors duration-300">
                  Demo PDF (disabled) →
                </p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
