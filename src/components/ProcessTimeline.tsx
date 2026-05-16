import { useRef } from"react";
import { motion, useScroll, useTransform } from"framer-motion";

const steps = [
  {
    title:"Kickoff Workshop",
    description:"Pretend stakeholders align on fictional milestones while reviewing spacing proofs — demo timeline entry.",
    year:"Phase 1 — Kickoff"
  },
  {
    title:"Palette Sandbox",
    description:"Imaginary finishes get picked from moodboards rendered entirely with placeholder photography.",
    year:"Phase 2 — Exploration"
  },
  {
    title:"Fabrication Storyboard",
    description:"No CNC chatter here — just Latin filler describing pretend throughput curves.",
    year:"Phase 3 — Fabrication Mock"
  },
  {
    title:"Rubber Stamp QA",
    description:"Quality storytelling beat where inspectors nod at perfectly kerned captions.",
    year:"Phase 4 — QA Theater"
  },
  {
    title:"Reveal Day",
    description:"Hero animations fade out and everyone grabs coffee — conclusion for demo sequencing.",
    year:"Phase 5 — Wrap"
  }
];

const easeOutExpo = [0.16, 1, 0.3, 1] as [number, number, number, number];

const ProcessTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center","end center"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="py-32 px-6 md:px-12 lg:px-20 relative  overflow-hidden" id="process">
      <div className="max-w-6xl mx-auto" ref={containerRef}>
        <div className="text-center mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: easeOutExpo }}
            className="font-display text-2xl md:text-3xl font-bold tracking-widest uppercase mb-6"
            style={{ color:"#999999" }}
          >
            Our Approach
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: easeOutExpo }}
            className="font-display text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            Our Imaginary <span className="italic" style={{ color:"#999999" }}>Timeline</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Animated Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 md:translate-x-0">
            <motion.div
              className="absolute top-0 left-0 w-full bg-[#999999] origin-top"
              style={{ height:"100%", scaleY: pathLength }}
            />
          </div>

          <div className="space-y-24 md:space-y-32 relative z-10">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-0 ${isEven ?"md:flex-row-reverse" :""}`}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[#0f172a] border-2 border-[#999999] -translate-x-1/2 md:-translate-x-1/2 shadow-[0_0_15px_rgba(153, 153, 153,0.5)] z-20" />

                  {/* Content Container */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ duration: 0.8, ease: easeOutExpo }}
                      className={`glass-card p-8 md:p-10 rounded-2xl md:max-w-md ${isEven ?"md:ml-auto md:mr-16" :"md:mr-auto md:ml-16"}`}
                      style={{
                        background:"rgba(255,255,255,0.03)",
                        border:"1px solid rgba(255,255,255,0.05)"
                      }}
                    >
                      <span className="font-body text-xs tracking-widest text-[#999999] uppercase mb-4 block">
                        {step.year}
                      </span>
                      <h3 className="font-display text-2xl text-white mb-4">
                        {step.title}
                      </h3>
                      <p className="font-body text-sm text-white/60 leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;