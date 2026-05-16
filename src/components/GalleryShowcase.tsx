import { motion, AnimatePresence } from"framer-motion";
import { Link } from"react-router-dom";
import { useRef, useState, useCallback, useEffect } from"react";
import { PLACEHOLDER_IMAGE } from"@/constants/placeholderImage";

const gallerySlides = [
  {
    id: 1,
    src: PLACEHOLDER_IMAGE,
    alt: "Gallery placeholder",
    title: "ADVANCED\nMACHINERY",
    description: "Industry-leading equipment for accurate cutting, drilling, and shaping at production scale.",
  },
  {
    id: 2,
    src: PLACEHOLDER_IMAGE,
    alt: "Gallery placeholder",
    title: "CNC\nMACHINING",
    description: "Precision routing and drilling for complex components and repeat manufacturing.",
  },
  {
    id: 3,
    src: PLACEHOLDER_IMAGE,
    alt: "Gallery placeholder",
    title: "EDGE\nFINISHING",
    description: "Consistent edge application for durable, specification-grade joinery.",
  },
  {
    id: 4,
    src: PLACEHOLDER_IMAGE,
    alt: "Gallery placeholder",
    title: "CUSTOM\nJOINERY",
    description: "Bespoke components and interiors engineered to drawing and sample approval.",
  },
];

const GalleryShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const projects = gallerySlides;

  const paginate = useCallback((dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + gallerySlides.length) % gallerySlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, [paginate]);

  const prev = (current - 1 + projects.length) % projects.length;
  const next = (current + 1) % projects.length;

  const imageVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ?"100%" :"-100%",
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
    exit: (dir: number) => ({
      x: dir > 0 ?"-100%" :"100%",
      opacity: 0,
      scale: 0.8,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    }),
  };

  const titleVariants = {
    enter: { opacity: 0, y: 20, scale: 0.95 },
    center: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
    exit: { opacity: 0, y: -20, scale: 1.05, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden flex flex-col"
      style={{
        minHeight:"100vh",
      }}
    >
      <div className="w-full px-8 md:px-16 pt-12 z-30 flex justify-between items-center">
        <p className="font-display text-2xl md:text-3xl font-bold tracking-widest uppercase mb-4" style={{ color:"#999999" }}>
          Our Gallery
        </p>
        <Link
          to="/gallery"
          className="font-body text-[10px] tracking-[0.2em] uppercase hover:text-[#999999] transition-colors"
          style={{ color:"rgba(255,255,255,0.7)" }}
        >
          View Full Gallery
        </Link>
      </div>

      <div className="relative flex-1 flex items-center justify-center w-full mt-10 mb-16">
        <div className="relative w-full max-w-[1800px] flex items-center justify-center gap-6 md:gap-12 lg:gap-20 px-4">
          <div
            className="hidden md:block relative overflow-hidden flex-shrink-0 cursor-pointer"
            style={{ width:"clamp(160px, 18vw, 280px)", height:"clamp(220px, 40vh, 450px)", marginTop:"10vh" }}
            onClick={() => paginate(-1)}
          >
            <motion.img
              key={`left-${prev}`}
              src={projects[prev].src}
              alt={projects[prev].alt}
              className="w-full h-full object-cover"
              initial={{ opacity: 0.5, filter:"brightness(0.3)" }}
              animate={{ opacity: 1, filter:"brightness(0.3)" }}
              whileHover={{ filter:"brightness(0.5)" }}
              transition={{ duration: 0.8 }}
            />
          </div>

          <div
            className="relative overflow-hidden flex-shrink-0 z-20"
            style={{
              width:"clamp(240px, 28vw, 420px)",
              height:"clamp(340px, 50vh, 600px)",
              boxShadow:"0 20px 50px rgba(0,0,0,0.5)",
            }}
          >
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.img
                key={`center-${current}`}
                src={projects[current].src}
                alt={projects[current].alt}
                custom={direction}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-black/20 pointer-events-none" />

            <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none px-6">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.h2
                  key={`title-${current}`}
                  variants={titleVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="font-display font-bold uppercase text-center leading-[1.08] whitespace-pre-line drop-shadow-xl"
                  style={{
                    color:"rgba(255, 255, 255, 0.98)",
                    fontSize:"clamp(16px, 2.1vw, 30px)",
                    letterSpacing:"0.08em",
                    textShadow:"0 10px 30px rgba(0,0,0,0.5)",
                    maxWidth:"90%",
                  }}
                >
                  {projects[current].title}
                </motion.h2>
              </AnimatePresence>
            </div>
          </div>

          <div
            className="hidden md:block relative overflow-hidden flex-shrink-0 cursor-pointer"
            style={{ width:"clamp(160px, 18vw, 280px)", height:"clamp(220px, 40vh, 450px)", marginTop:"10vh" }}
            onClick={() => paginate(1)}
          >
            <motion.img
              key={`right-${next}`}
              src={projects[next].src}
              alt={projects[next].alt}
              className="w-full h-full object-cover"
              initial={{ opacity: 0.5, filter:"brightness(0.3)" }}
              animate={{ opacity: 1, filter:"brightness(0.3)" }}
              whileHover={{ filter:"brightness(0.5)" }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </div>
      </div>

      <div className="w-full px-8 md:px-16 pb-16 flex flex-col items-center justify-center gap-8 md:gap-16 z-30 mt-8">
        <AnimatePresence mode="wait">
          <motion.p
            key={`desc-${current}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6 }}
            className="font-body text-sm leading-[1.8] max-w-sm text-center"
            style={{ color:"rgba(255,255,255,0.7)" }}
          >
            {projects[current].description}
          </motion.p>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GalleryShowcase;
