import { motion, useScroll, useTransform, useSpring } from"framer-motion";
import { useRef } from"react";
import b2bBg from"@/assets/b2b-background.jpg";

const E = [0.16, 1, 0.3, 1] as [number, number, number, number];

const cards = [
  {
    title:"CAD FILES\nAVAILABILITY",
    body:"Download-ready .dwg and .3dm\nfiles for every product line.\nSeamless BIM integration.",
    num:"1",
  },
  {
    title:"SUSTAINABILITY\nCOMPLIANCE",
    body:"All engineered panels meet\nEuropean emission standards.\nFull material traceability.",
    num:"2",
  },
  {
    title:"MASS-PRODUCTION\nCAPACITY",
    body:"15,000 sq.ft. facility with\nmulti-shift capability. Scalable\noutput from prototype.",
    num:"3",
  },
  {
    title:"PRECISION\nENGINEERING",
    body:"Master craftsmanship combined\nwith next-generation German\nHOMAG CNC machinery.",
    num:"4",
  },
  {
    title:"UAE CIVIL\nDEFENSE",
    body:"Fully compliant fire-rated door\nand joinery solutions. Certified to\nmeet all UAE regulations.",
    num:"5",
  },
];

/* ── Ticket Card with Notches (Top & Bottom Cutouts) ── */
const TicketCard = ({ card, delay }: { card: typeof cards[0]; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.2 }}
    transition={{ duration: 1.2, delay, ease: E }}
    className="relative flex flex-col justify-center items-center text-center w-full max-w-[260px] h-[320px] mx-auto"
    style={{
      /* Very subtle white tint */
      background:"rgba(255,255,255,0.06)",
      backdropFilter:"blur(12px)",
      WebkitBackdropFilter:"blur(12px)",
      /* The ticket notch effect using clip-path */
      clipPath:"polygon(0 0, 42% 0, 50% 8%, 58% 0, 100% 0, 100% 100%, 58% 100%, 50% 92%, 42% 100%, 0 100%)",
      padding:"1.5rem 1.25rem",
    }}
  >
    {/* Inner border to simulate the stroked edge inside the clip-path */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        border:"1px solid rgba(255,255,255,0.15)",
        clipPath:"polygon(0 0, 42% 0, 50% 8%, 58% 0, 100% 0, 100% 100%, 58% 100%, 50% 92%, 42% 100%, 0 100%)",
      }}
    />

    {/* Title */}
    <h3
      className="font-display font-bold italic uppercase whitespace-pre-line leading-tight mb-5 max-w-full text-center"
      style={{
        color:"rgba(255,255,255,0.95)",
        fontSize:"1rem",
        letterSpacing:"0.05em",
      }}
    >
      {card.title}
    </h3>

    {/* Body */}
    <p
      className="font-body leading-[1.6] max-w-full text-center"
      style={{
        color:"rgba(255,255,255,0.6)",
        fontSize:"0.75rem",
        whiteSpace:"pre-line",
      }}
    >
      {card.body}
    </p>

    {/* Number floating outside the card at bottom-left */}
    <span
      className="absolute -bottom-10 -left-4 font-body"
      style={{
        color:"rgba(255,255,255,0.4)",
        fontSize:"0.75rem",
        letterSpacing:"0.15em",
      }}
    >
      ( {card.num} )
    </span>
  </motion.div>
);

const B2BPortal = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end","end start"],
  });

  const smooth = useSpring(scrollYProgress, { stiffness: 50, damping: 20, restDelta: 0.001 });
  const bgY = useTransform(smooth, [0, 1], ["-8%","8%"]);
  const textY = useTransform(smooth, [0, 1], [80, -80]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ minHeight:"120vh" }}
      id="b2b-portal"
    >
      {/* ── Parallax background ── */}
      <motion.img
        src={b2bBg}
            alt="Manufacturing facility interior"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ y: bgY, scale: 1.15 }}
      />

      {/* Dark overlay — keeping it dark enough to read text clearly */}
      <div
        className="absolute inset-0"
        style={{ background:"rgba(10, 20, 30, 0.65)" }}
      />

      {/* ── Content wrapper ── */}
      <div className="relative z-10 max-w-[1600px] mx-auto w-full px-6 md:px-12 py-24 min-h-screen flex flex-col justify-center">

        {/* ── TOP SECTION: Text on Left, Cards 1 & 2 on Right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-32 items-center">
          
          {/* Top Left: Header and Intro Text */}
          <motion.div
            className="lg:col-span-5 flex flex-col justify-center"
            style={{ y: textY }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.0, ease: E }}
          >
            <p
              className="font-display text-2xl md:text-3xl font-bold tracking-widest uppercase mb-6"
              style={{ color:"#999999" }}
            >
              Why Choose Us?
            </p>
            <div className="mb-10">
              <div className="w-16 h-px bg-white/20 mb-6"></div>
              <h2
                className="font-display font-bold leading-[1.1] max-w-md text-left"
                style={{
                  color:"rgba(255,255,255,0.95)",
                  fontSize:"clamp(26px, 3.2vw, 44px)",
                  hyphens:"none",
                  wordBreak:"keep-all",
                  overflowWrap:"normal",
                }}
              >
                Advanced manufacturing.<br />
                Systematic execution.
              </h2>
            </div>
            
            <div className="space-y-5 max-w-sm">
              <p
                className="font-body text-sm leading-[1.7] text-justify max-w-full"
                style={{
                  color:"rgba(255,255,255,0.65)",
                  hyphens:"none",
                  wordBreak:"normal",
                  overflowWrap:"normal",
                }}
              >
                We blend advanced manufacturing with disciplined project execution so complex commercial joinery moves from drawing board to finished space without surprises.
              </p>
              <p
                className="font-body text-sm leading-[1.7] text-justify max-w-full"
                style={{
                  color:"rgba(255,255,255,0.65)",
                  hyphens:"none",
                  wordBreak:"normal",
                  overflowWrap:"normal",
                }}
              >
                Our teams stay close to contractors and consultants, aligning design intent, shop drawings, and onsite sequencing with the overall construction programme.
              </p>
            </div>

            <div className="mt-12 flex gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3.5 font-body text-xs tracking-[0.2em] uppercase transition-all duration-500 rounded-full hover:bg-white/10"
                style={{ border:"1px solid #999999", color:"#999999" }}
              >
                Technical Consultation
              </a>
            </div>
          </motion.div>

          {/* Top Right: Cards 1 & 2 */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative pt-10 lg:pt-0">
            <TicketCard card={cards[0]} delay={0.2} />
            <div className="md:mt-24">
              {/* Card 2 is offset lower to match the staggered floating look */}
              <TicketCard card={cards[1]} delay={0.4} />
            </div>
          </div>
        </div>

        {/* ── BOTTOM SECTION: Cards 3, 4, 5 floating across the bottom ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative pb-16">
          <div className="flex justify-start">
            <TicketCard card={cards[2]} delay={0.2} />
          </div>
          
          <div className="flex justify-center md:mt-20">
            <TicketCard card={cards[3]} delay={0.4} />
          </div>
          
          <div className="flex justify-end">
            <TicketCard card={cards[4]} delay={0.6} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default B2BPortal;
