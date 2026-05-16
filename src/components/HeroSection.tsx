import { motion } from"framer-motion";
import { Play } from"lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video placeholder */}
      <div
        className="absolute inset-0 w-full h-full flex items-center justify-center"
        style={{ background: "linear-gradient(135deg, #0a1628 0%, #12223b 50%, #0f172a 100%)" }}
      >
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Play button placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex flex-col items-center gap-6"
        >
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "0.5px solid rgba(255,255,255,0.2)",
              backdropFilter: "blur(20px)",
            }}
          >
            <Play className="w-8 h-8 ml-1" style={{ color: "rgba(255,255,255,0.6)" }} />
          </div>
          <p
            className="font-body text-xs tracking-[0.3em] uppercase"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            Video Placeholder
          </p>
        </motion.div>
      </div>

      {/* Subtle vignette for cinematic depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:"radial-gradient(ellipse at center, transparent 40%, rgba(18, 34, 59, 0.35) 100%)",
        }}
      />
    </section>
  );
};

export default HeroSection;
