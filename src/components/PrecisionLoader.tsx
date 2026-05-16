import { motion, AnimatePresence } from"framer-motion";
import { useState, useEffect } from"react";

const easeOutExpo = [0.16, 1, 0.3, 1] as [number, number, number, number];

const PrecisionLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let start: number | null = null;
    const duration = 2000; // 2 seconds as specified

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const t = Math.min(elapsed / duration, 1);
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      setProgress(eased * 100);

      if (t < 1) {
        requestAnimationFrame(step);
      } else {
        setTimeout(() => {
          setVisible(false);
          setTimeout(onComplete, 600);
        }, 200);
      }
    };

    requestAnimationFrame(step);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[99999] flex items-center justify-center"
          style={{ background:"hsl(var(--foreground))" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: easeOutExpo }}
        >
          {/* Gold progress line */}
          <div className="absolute top-0 left-0 right-0 h-[2px]">
            <motion.div
              className="h-full"
              style={{
                width: `${progress}%`,
                background:"linear-gradient(90deg, hsl(var(--primary)), #B3B3B3)",
              }}
              transition={{ duration: 0.05 }}
            />
          </div>

          {/* Subtle percentage */}
          <motion.span
            className="font-body text-xs tracking-[0.3em] uppercase"
            style={{ color:"hsla(var(--primary), 0.4)" }}
            exit={{ opacity: 0 }}
          >
            {Math.round(progress)}%
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PrecisionLoader;
