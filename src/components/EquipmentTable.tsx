import { motion } from "framer-motion";

const elyseCurve = [0.16, 1, 0.3, 1] as [number, number, number, number];

interface EquipmentItem {
  brand: string;
  equipment: string;
}

interface EquipmentTableProps {
  title: string;
  items: EquipmentItem[];
}

const EquipmentTable = ({ title, items }: EquipmentTableProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: elyseCurve }}
      className="rounded-xl overflow-hidden"
      style={{
        background: "rgba(18, 34, 59, 0.4)",
        backdropFilter: "blur(40px)",
        border: "0.5px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <div className="p-5 md:p-6">
        <h4
          className="font-display text-base md:text-lg mb-4"
          style={{ color: "hsl(33, 30%, 90%)" }}
        >
          {title}
        </h4>
        <div className="space-y-0">
          {items.map((item, i) => (
            <div
              key={`${item.brand}-${item.equipment}`}
              className="flex items-center gap-4 py-2.5"
              style={{
                borderBottom:
                  i < items.length - 1
                    ? "0.5px solid rgba(255, 255, 255, 0.06)"
                    : "none",
              }}
            >
              <span
                className="font-body text-[10px] tracking-[0.2em] uppercase w-24 shrink-0"
                style={{ color: "rgba(255, 255, 255, 0.4)" }}
              >
                {item.brand}
              </span>
              <span
                className="font-body text-xs"
                style={{ color: "rgba(255, 255, 255, 0.6)" }}
              >
                {item.equipment}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default EquipmentTable;
