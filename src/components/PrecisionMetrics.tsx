import { motion, useInView } from"framer-motion";
import { useRef, useEffect, useState } from"react";

const E = [0.16, 1, 0.3, 1] as [number, number, number, number];

const CountUp = ({ target, suffix, isInView, delay }: { target: number | null; suffix: string; isInView: boolean; delay: number }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!isInView) {
      setCount(0);
      setHasStarted(false);
    }
  }, [isInView]);

  useEffect(() => {
    if (!isInView || target === null || hasStarted) return;

    const timeout = setTimeout(() => {
      setHasStarted(true);
      const duration = 3500;
      const startTime = performance.now();

      const step = (now: number) => {
        const elapsed = now - startTime;
        const t = Math.min(elapsed / duration, 1);
        const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
        setCount(Math.round(eased * target));
        if (t < 1) requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [isInView, delay, target, hasStarted]);

  if (target === null) return null;
  return <>{count}{suffix}</>;
};

const PrecisionMetrics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section
      className="relative w-full overflow-hidden flex flex-col justify-center"
      style={{ minHeight:"auto" }}
      ref={ref}
    >
      {/* Dark mesh background to match the site */}
      

      <div className="relative z-10 max-w-[1600px] mx-auto w-full px-5 md:px-16 py-10 md:py-24">
        
        {/* Header — inline on mobile, absolute on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.0, ease: E }}
          className="md:absolute md:top-12 md:left-8 lg:left-16 mb-6 md:mb-0"
        >
          <p className="font-display text-xl md:text-2xl lg:text-3xl font-bold tracking-widest uppercase mb-2 md:mb-4" style={{ color:"#999999" }}>
            Performance
          </p>
          <h2 className="font-display font-bold text-base md:text-xl" style={{ color:"#999999" }}>
            The Precision Metrics
          </h2>
        </motion.div>

        {/* Metrics layout – mobile 2×2 grid, desktop asymmetrical */}
        <div className="relative w-full mt-0 md:mt-24">
          {/* Mobile: 2×2 grid — compact, fully visible, no overflow */}
          <div className="md:hidden grid grid-cols-2 gap-3 pt-4 pb-28">
            {/* 40% */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.1, ease: E }}
              className="flex flex-col items-center text-center rounded-2xl py-5 px-3"
              style={{ background:"rgba(255,255,255,0.04)", border:"0.5px solid rgba(255,255,255,0.1)" }}
            >
              <div className="flex items-baseline justify-center">
                <span className="font-display font-bold" style={{ fontSize:"clamp(36px, 11vw, 56px)", color:"rgba(255,255,255,0.95)", lineHeight: 1 }}>
                  <CountUp target={40} suffix="" isInView={isInView} delay={0.2} />
                </span>
                <span className="font-display font-bold ml-1" style={{ fontSize:"clamp(16px, 5vw, 22px)", color:"rgba(255,255,255,0.95)" }}>
                  %
                </span>
              </div>
              <p className="font-body text-[10px] leading-snug mt-2 text-center" style={{ color:"rgba(255,255,255,0.5)" }}>
                <strong className="font-medium text-white/75 block mb-0.5 text-[11px]">Repeat Rate</strong>
                Client retention
              </p>
            </motion.div>

            {/* 15+ */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2, ease: E }}
              className="flex flex-col items-center text-center rounded-2xl py-5 px-3"
              style={{ background:"rgba(255,255,255,0.04)", border:"0.5px solid rgba(255,255,255,0.1)" }}
            >
              <div className="flex items-baseline justify-center">
                <span className="font-display font-bold" style={{ fontSize:"clamp(36px, 11vw, 56px)", color:"rgba(255,255,255,0.95)", lineHeight: 1 }}>
                  <CountUp target={15} suffix="" isInView={isInView} delay={0.3} />
                </span>
                <span className="font-display font-bold ml-1" style={{ fontSize:"clamp(16px, 5vw, 22px)", color:"rgba(255,255,255,0.95)" }}>
                  +
                </span>
              </div>
              <p className="font-body text-[10px] leading-snug mt-2 text-center" style={{ color:"rgba(255,255,255,0.5)" }}>
                <strong className="font-medium text-white/75 block mb-0.5 text-[11px]">Years Experience</strong>
                Precision craftsmanship
              </p>
            </motion.div>

            {/* 90% */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.3, ease: E }}
              className="flex flex-col items-center text-center rounded-2xl py-5 px-3"
              style={{ background:"rgba(255,255,255,0.04)", border:"0.5px solid rgba(255,255,255,0.1)" }}
            >
              <div className="flex items-baseline justify-center">
                <span className="font-display font-bold" style={{ fontSize:"clamp(36px, 11vw, 56px)", color:"rgba(255,255,255,0.95)", lineHeight: 1 }}>
                  <CountUp target={90} suffix="" isInView={isInView} delay={0.4} />
                </span>
                <span className="font-display font-bold ml-1" style={{ fontSize:"clamp(16px, 5vw, 22px)", color:"rgba(255,255,255,0.95)" }}>
                  %
                </span>
              </div>
              <p className="font-body text-[10px] leading-snug mt-2 text-center" style={{ color:"rgba(255,255,255,0.5)" }}>
                <strong className="font-medium text-white/75 block mb-0.5 text-[11px]">Approval Rate</strong>
                200+ projects
              </p>
            </motion.div>

            {/* UAE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.4, ease: E }}
              className="flex flex-col items-center text-center rounded-2xl py-5 px-3"
              style={{ background:"rgba(255,255,255,0.04)", border:"0.5px solid rgba(255,255,255,0.1)" }}
            >
              <div className="flex items-baseline justify-center">
                <span className="font-display font-bold" style={{ fontSize:"clamp(28px, 9vw, 44px)", color:"rgba(255,255,255,0.95)", lineHeight: 1 }}>
                  UAE
                </span>
              </div>
              <p className="font-body text-[10px] leading-snug mt-2 text-center" style={{ color:"rgba(255,255,255,0.5)" }}>
                <strong className="font-medium text-white/75 block mb-0.5 text-[11px]">Manufacturing</strong>
                Ras Al Khaimah, RAK
              </p>
            </motion.div>
          </div>

          {/* Desktop: original asymmetrical layout */}
          <div className="hidden md:block relative w-full h-[60vh]">
            {/* 90% — Left Middle */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1.2, delay: 0.2, ease: E }}
              className="absolute left-0 top-[5%]"
            >
              <div className="flex items-baseline">
                <span className="font-display font-bold" style={{ fontSize:"clamp(80px, 12vw, 160px)", color:"rgba(255,255,255,0.95)", lineHeight: 0.8 }}>
                  <CountUp target={90} suffix="" isInView={isInView} delay={0.3} />
                </span>
                <span className="font-display font-bold ml-2" style={{ fontSize:"clamp(24px, 3vw, 40px)", color:"rgba(255,255,255,0.95)" }}>
                  %
                </span>
              </div>
              <p className="font-body text-xs leading-relaxed mt-6 max-w-[220px]" style={{ color:"rgba(255,255,255,0.6)" }}>
                <strong className="font-medium text-white/80 block mb-1">Mock-up Approval Rate</strong>
                First-submission accuracy across 200+ projects
              </p>
            </motion.div>

            {/* 40% — Top Middle */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1.2, delay: 0.4, ease: E }}
              className="absolute left-[58%] top-[-10%]"
            >
              <div className="flex items-baseline">
                <span className="font-display font-bold" style={{ fontSize:"clamp(70px, 9vw, 130px)", color:"rgba(255,255,255,0.95)", lineHeight: 0.8 }}>
                  <CountUp target={40} suffix="" isInView={isInView} delay={0.5} />
                </span>
                <span className="font-display font-bold ml-2" style={{ fontSize:"clamp(24px, 3vw, 40px)", color:"rgba(255,255,255,0.95)" }}>
                  %
                </span>
              </div>
              <p className="font-body text-xs leading-relaxed mt-6 max-w-[200px]" style={{ color:"rgba(255,255,255,0.6)" }}>
                <strong className="font-medium text-white/80 block mb-1">Project Repeat Rate</strong>
                Client retention through consistent delivery
              </p>
            </motion.div>

            {/* 15+ — Top Right */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1.2, delay: 0.6, ease: E }}
              className="absolute right-[5%] top-[-10%]"
            >
              <div className="flex items-baseline">
                <span className="font-display font-bold" style={{ fontSize:"clamp(70px, 9vw, 130px)", color:"rgba(255,255,255,0.95)", lineHeight: 0.8 }}>
                  <CountUp target={15} suffix="" isInView={isInView} delay={0.7} />
                </span>
                <span className="font-display font-bold ml-2" style={{ fontSize:"clamp(24px, 3vw, 40px)", color:"rgba(255,255,255,0.95)" }}>
                  +
                </span>
              </div>
              <p className="font-body text-xs leading-relaxed mt-6 max-w-[200px]" style={{ color:"rgba(255,255,255,0.6)" }}>
                <strong className="font-medium text-white/80 block mb-1">Years Experience</strong>
                Decades of precision craftsmanship
              </p>
            </motion.div>

            {/* UAE — Bottom Middle */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1.2, delay: 0.8, ease: E }}
              className="absolute left-[35%] bottom-[5%]"
            >
              <div className="flex items-baseline">
                <span className="font-display font-bold" style={{ fontSize:"clamp(80px, 11vw, 150px)", color:"rgba(255,255,255,0.95)", lineHeight: 0.8 }}>
                  UAE
                </span>
              </div>
              <p className="font-body text-xs leading-relaxed mt-6 max-w-[240px]" style={{ color:"rgba(255,255,255,0.6)" }}>
                <strong className="font-medium text-white/80 block mb-1">Based Manufacturing</strong>
                Ras Al Khaimah facility, Al Ghail Industrial Zone
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrecisionMetrics;
