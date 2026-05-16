import { motion } from "framer-motion";
import type { MachineryItem } from "@/data/machineryData";

const elyseCurve = [0.16, 1, 0.3, 1] as [number, number, number, number];

interface MachineryCardProps {
  machine: MachineryItem;
  index: number;
  onImageClick: () => void;
}

const MachineryCard = ({ machine, index, onImageClick }: MachineryCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.8, delay: (index % 2) * 0.15, ease: elyseCurve }}
      className="rounded-xl overflow-hidden"
      style={{
        background: "rgba(18, 34, 59, 0.4)",
        backdropFilter: "blur(40px)",
        border: "0.5px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      {/* Image */}
      <div
        className="relative group cursor-pointer aspect-[16/10] overflow-hidden"
        onClick={onImageClick}
      >
        <img
          src={machine.image}
          alt={machine.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
          loading="lazy"
        />
        <div
          className="absolute inset-0 opacity-40 group-hover:opacity-20 transition-opacity duration-700"
          style={{
            background: "linear-gradient(to top, rgba(18, 34, 59, 0.8) 0%, transparent 50%)",
          }}
        />
        <div
          className="absolute inset-0 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            boxShadow: "inset 0 0 0 0.5px rgba(153, 153, 153, 0.5), 0 0 30px rgba(153, 153, 153, 0.08)",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>

      {/* Details below image */}
      <div className="p-4 md:p-5 max-w-full">
        <p
          className="font-body text-[10px] tracking-[0.3em] uppercase mb-2 max-w-full text-justify"
          style={{ color: "rgba(255, 255, 255, 0.45)" }}
        >
          {machine.brand}
        </p>
        <h3
          className="font-display text-base md:text-lg mb-3 max-w-full text-justify leading-snug"
          style={{ color: "hsl(33, 30%, 90%)" }}
        >
          {machine.name}
        </h3>
        <p
          className="font-body text-sm leading-[1.6] mb-4 max-w-full text-justify"
          style={{ color: "rgba(255, 255, 255, 0.6)" }}
        >
          {machine.description}
        </p>
        <ul className="space-y-1.5 max-w-full">
          {machine.highlights.map((point) => (
            <li
              key={point}
              className="font-body text-xs leading-[1.5] flex items-start gap-2 max-w-full text-justify"
              style={{ color: "rgba(255, 255, 255, 0.5)" }}
            >
              <span className="text-gold-gradient mt-0.5 shrink-0">•</span>
              <span className="max-w-full">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default MachineryCard;
