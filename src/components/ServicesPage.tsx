import { motion } from"framer-motion";
import { useRef } from"react";
import customJoineryImg from"@/assets/custom-joinery.jpg";
import cncMachiningImg from"@/assets/cnc-machining.jpg";
import edgeBandingImg from"@/assets/edge-banding.jpg";
import commercialImg from"@/assets/commercial-residential.jpg";
import bespokeFurnitureImg from"@/assets/bespoke-furniture.webp";
import MaskedImage from"@/components/MaskedImage";
import WordReveal from"@/components/WordReveal";

const easeOutExpo = [0.16, 1, 0.3, 1] as [number, number, number, number];

const services = [
  {
    id:"joinery",
    subtitle:"Custom Joinery",
    title:"Custom Joinery Solutions in Dubai",
    text:"Custom joinery brings creativity and skilled craftsmanship together in a flawless way. We focus on making every piece of joinery reflect the unique personality of your brand.",
    image: customJoineryImg,
    imageAlt:"Custom joinery craftsmanship at our facility",
  },
  {
    id:"cnc",
    subtitle:"CNC Machining",
    title:"CNC Machining & Precision Cutting",
    text:"Precision plays a key role in building interiors that are both stylish and durable. We use cutting-edge CNC machining tools to turn designs into crafted pieces.",
    image: cncMachiningImg,
    imageAlt:"HOMAG CNC machining equipment at our facility",
  },
  {
    id:"edge",
    subtitle:"Edge Banding",
    title:"Edge Banding & Finishing",
    text:"Small details can create a big impact in spaces like retail stores and hotels. We pay close attention to edge banding and finishing because these touches matter.",
    image: edgeBandingImg,
    imageAlt:"Edge banding and finishing quality control",
  },
  {
    id:"commercial",
    subtitle:"Commercial",
    title:"Commercial & Residential Projects",
    text:"We put the same care and skill into every joinery or interior project we take on. Whether it's a cosy home or a large business space, you can expect quality in both.",
    image: commercialImg,
    imageAlt:"Commercial hospitality interior project",
  },
  {
    id:"bespoke",
    subtitle:"Bespoke Furniture",
    title:"Bespoke Furniture Manufacturing",
    text:"Furniture sets the tone and personality in any room. Custom-made furniture adds another layer by making your space personal.",
    image: bespokeFurnitureImg,
    imageAlt:"Bespoke furniture manufacturing line at our facility",
  },
];

const ServiceCard = ({
  service,
  index,
  imageHeight,
}: {
  service: typeof services[0];
  index: number;
  imageHeight: string;
}) => {
  const staggerDelay = 0.2 + index * 0.2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 1.2, delay: staggerDelay, ease: easeOutExpo }}
      whileHover={{ scale: 1.02 }}
      className="rounded-lg overflow-hidden group cursor-pointer relative"
      style={{
        background:"rgba(18, 34, 59, 0.4)",
        border:"0.5px solid rgba(255, 255, 255, 0.15)",
        backdropFilter:"blur(40px)",
        WebkitBackdropFilter:"blur(40px)",
        transition:"backdrop-filter 0.5s ease, -webkit-backdrop-filter 0.5s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backdropFilter ="blur(60px)";
        (e.currentTarget.style as any).WebkitBackdropFilter ="blur(60px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backdropFilter ="blur(40px)";
        (e.currentTarget.style as any).WebkitBackdropFilter ="blur(40px)";
      }}
    >
      <MaskedImage
        src={service.image}
        alt={service.imageAlt}
        className={imageHeight}
        delay={staggerDelay + 0.1}
      />
      <div className="relative p-4 md:p-5 flex flex-col justify-center max-w-full">
        <WordReveal
          text={service.subtitle}
          className="font-body text-xs tracking-[0.25em] uppercase mb-2 max-w-full text-left"
          style={{ color:"#999999" }}
          delay={staggerDelay + 0.4}
          as="p"
        />
        <WordReveal
          text={service.title}
          className="font-display text-base md:text-lg font-bold mb-3 leading-snug max-w-full text-left"
          style={{ color:"rgba(255,255,255,0.95)" }}
          delay={staggerDelay + 0.5}
          as="h3"
        />
        <motion.p
          className="font-body text-sm leading-[1.6] max-w-full text-left"
          style={{ color:"rgba(255,255,255,0.6)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.2, delay: staggerDelay + 0.6, ease: easeOutExpo }}
        >
          {service.text}
        </motion.p>
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
    </motion.div>
  );
};

const ServicesPage = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  return (
    <section
      className="px-4 md:px-8  section-frost relative overflow-hidden"
      style={{ paddingTop:"15vh", paddingBottom:"15vh" }}
      id="services-detail"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 md:mb-20 text-center">
          <WordReveal
            text="Our Services"
            className="font-display text-2xl md:text-3xl font-bold tracking-widest uppercase mb-6"
            style={{ color:"#999999" }}
            as="p"
          />
          <WordReveal
            text="Craftsmanship at Every Scale"
            className="font-display text-3xl md:text-5xl font-bold leading-tight"
            style={{ color:"rgba(255,255,255,0.9)" }}
            delay={0.1}
            as="h2"
          />
        </div>

        {/* ROW 1: 2 cards */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {[0, 1].map((i) => (
            <ServiceCard key={services[i].id} service={services[i]} index={i} imageHeight="h-56 md:h-72" />
          ))}
        </div>

        {/* ROW 2: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[2, 3, 4].map((i) => (
            <ServiceCard key={services[i].id} service={services[i]} index={i} imageHeight="h-44 md:h-52" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
