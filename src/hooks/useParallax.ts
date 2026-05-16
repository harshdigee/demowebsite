import { useScroll, useTransform } from"framer-motion";
import { useRef } from"react";

/**
 * Layered parallax: text at 1.1x speed, images at 0.85x speed.
 */
export const useParallax = (speedFactor = 1.1) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end","end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [60 * speedFactor, -60 * speedFactor]);
  const cardY = useTransform(scrollYProgress, [0, 1], [60 * 0.85, -60 * 0.85]);
  const blurValue = useTransform(scrollYProgress, [0, 0.3, 0.6], [0, 20, 40]);

  return { ref, textY, cardY, blurValue, scrollYProgress };
};
