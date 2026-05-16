import { motion } from"framer-motion";
import { PLACEHOLDER_IMAGE } from"@/constants/placeholderImage";
import WordReveal from"@/components/WordReveal";

const easeOutExpo = [0.22, 1, 0.36, 1] as [number, number, number, number];

const services = [
  {
    title:"Demo Tile Alpha",
    subtitle:"Category Label",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit — placeholder description for bento cells.",
    image: PLACEHOLDER_IMAGE,
    span:"md:col-span-2 md:row-span-2",
  },
  {
    title:"Demo Tile Beta",
    subtitle:"Category Label",
    description:"Sed do eiusmod tempor incididunt ut labore — secondary filler blurb.",
    image: PLACEHOLDER_IMAGE,
    span:"md:col-span-1 md:row-span-1",
  },
  {
    title:"Demo Tile Gamma",
    subtitle:"Category Label",
    description:"Ut enim ad minim veniam quis nostrud — compact supporting sentence.",
    image: PLACEHOLDER_IMAGE,
    span:"md:col-span-1 md:row-span-1",
  },
  {
    title:"Demo Tile Delta",
    subtitle:"Category Label",
    description:"Duis aute irure dolor in reprehenderit — wide tile footer copy sample.",
    image: PLACEHOLDER_IMAGE,
    span:"md:col-span-2 md:row-span-1",
  },
];

const BentoCard = ({ service, index }: { service: typeof services[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 60, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: false, amount: 0.2 }}
    transition={{ delay: index * 0.15, duration: 1.2, ease: easeOutExpo }}
    className={`${service.span} glass-card rounded-lg overflow-hidden relative group cursor-pointer`}
  >
    <img
      src={service.image}
      alt={service.subtitle}
      className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700"
      loading="eager"
      fetchPriority="high"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
    <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8">
      <p className="text-primary font-body text-xs tracking-[0.2em] uppercase mb-2">
        {service.subtitle}
      </p>
      <h3 className="font-display text-xl md:text-2xl font-bold mb-2" style={{ color:"rgba(255,255,255,0.95)" }}>
        {service.title}
      </h3>
      <p className="font-body text-sm leading-relaxed max-w-md" style={{ color:"rgba(255,255,255,0.6)" }}>
        {service.description}
      </p>
    </div>
  </motion.div>
);

const BentoGrid = () => {
  return (
    <section
      className="px-4 md:px-8 max-w-7xl mx-auto  section-frost relative"
      style={{ paddingTop:"15vh", paddingBottom:"15vh" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="mb-16 relative z-10"
      >
        <WordReveal
          text="Demo Highlights"
          className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4"
          as="p"
        />
        <WordReveal
          text="Four Tiles. Same Dummy Tone."
          className="font-display text-3xl md:text-5xl font-bold leading-tight"
          delay={0.1}
          as="h2"
        />
      </motion.div>

      {/* Desktop bento grid */}
      <div className="hidden md:grid md:grid-cols-3 md:grid-rows-3 gap-4 auto-rows-[240px] relative z-10">
        {services.map((service, i) => (
          <BentoCard key={service.title} service={service} index={i} />
        ))}
      </div>

      {/* Mobile layout */}
      <div className="flex flex-col gap-4 md:hidden relative z-10">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: i * 0.1, duration: 1.2, ease: easeOutExpo }}
            className="glass-card rounded-lg overflow-hidden relative aspect-[4/3] group"
          >
            <img
              src={service.image}
              alt={service.subtitle}
              className="absolute inset-0 w-full h-full object-cover opacity-40"
              loading="eager"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
            <div className="relative z-10 h-full flex flex-col justify-end p-6">
              <p className="text-primary font-body text-xs tracking-[0.2em] uppercase mb-2">
                {service.subtitle}
              </p>
              <h3 className="font-display text-xl font-bold mb-1" style={{ color:"rgba(255,255,255,0.95)" }}>
                {service.title}
              </h3>
              <p className="font-body text-sm leading-relaxed" style={{ color:"rgba(255,255,255,0.6)" }}>
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BentoGrid;
