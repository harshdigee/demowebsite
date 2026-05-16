import { motion } from"framer-motion";
import { useState, useEffect } from"react";

const elyseCurve = [0.16, 1, 0.3, 1] as [number, number, number, number];

interface MaskedImageProps {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
  direction?:"up" |"left" |"right";
  initialScale?: number;
  eager?: boolean;
}

const MaskedImage = ({
  src,
  alt,
  className ="",
  delay = 0,
  initialScale = 1.1,
}: MaskedImageProps) => {
  const [imageReady, setImageReady] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    if (img.complete) {
      setImageReady(true);
    } else {
      img.onload = () => setImageReady(true);
    }
    return () => { img.onload = null; };
  }, [src]);

  if (!imageReady) {
    return (
      <div
        className={`overflow-hidden ${className}`}
        style={{ background:"hsl(var(--foreground))" }}
      >
        <div className="w-full h-full" style={{
          background:"linear-gradient(90deg, #0f172a 0%, hsl(215, 53%, 22%) 50%, #0f172a 100%)",
          backgroundSize:"200% 100%",
          animation:"shimmer 1.5s ease-in-out infinite",
        }} />
      </div>
    );
  }

  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      initial={{ opacity: 0, scale: initialScale }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 1.4, delay, ease: elyseCurve }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        loading="eager"
        fetchPriority="high"
      />
    </motion.div>
  );
};

export default MaskedImage;
