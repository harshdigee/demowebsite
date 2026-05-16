import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MachineryCard from "@/components/MachineryCard";
import EquipmentTable from "@/components/EquipmentTable";
import { useLenis } from "@/hooks/useLenis";
import { PLACEHOLDER_IMAGE } from "@/constants/placeholderImage";
import {
  machinerySections,
  panelSectionEquipment,
  millingVeneerEquipment,
  sandingSectionEquipment,
} from "@/data/machineryData";

const elyseCurve = [0.16, 1, 0.3, 1] as [number, number, number, number];

// Flatten all machine images for lightbox
const allMachineImages = machinerySections.flatMap((s) =>
  s.machines.map((m) => ({ src: m.image, alt: m.name }))
);

const MachineryPage = () => {
  useLenis();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Get flat index for a machine
  let flatIndex = 0;
  const getFlatIndex = () => flatIndex++;

  return (
    <div className="grain-overlay min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={PLACEHOLDER_IMAGE}
            alt="Manufacturing Machinery"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(18, 34, 59, 0.5) 0%, rgba(18, 34, 59, 0.85) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-end pb-16 px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto w-full">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: elyseCurve }}
              className="font-display text-sm md:text-base tracking-[0.3em] uppercase mb-4"
              style={{ color: "#999999" }}
            >
              Demo Precision Lane
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.15, ease: elyseCurve }}
              className="font-display text-4xl md:text-6xl lg:text-7xl leading-tight"
              style={{ color: "hsl(33, 30%, 90%)" }}
            >
              Our <span className="text-gold-gradient">Machinery Deck</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: elyseCurve }}
              className="font-body text-sm md:text-base mt-6 max-w-2xl leading-relaxed"
              style={{ color: "rgba(255, 255, 255, 0.65)" }}
            >
              Imaginary machines populate this scroll journey — specs intentionally vague until content arrives.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section
        className="py-8 px-6 md:px-12"
        style={{
          background: "rgba(18, 34, 59, 0.6)",
          backdropFilter: "blur(30px)",
          borderTop: "0.5px solid rgba(255, 255, 255, 0.1)",
          borderBottom: "0.5px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
            { value: "42", label: "Demo statistic A" },
            { value: "100%", label: "Placeholder KPI" },
            { value: "24/7", label: "Narrative flourish" },
            { value: "stub", label: "Compliance badge copy" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: elyseCurve }}
            >
              <p className="font-display text-2xl md:text-3xl text-gold-gradient">
                {stat.value}
              </p>
              <p
                className="font-body text-[10px] tracking-[0.25em] uppercase mt-1"
                style={{ color: "rgba(255, 255, 255, 0.5)" }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Machinery Sections */}
      {machinerySections.map((section) => (
        <section key={section.title} className="py-16 md:py-24 px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: elyseCurve }}
              className="mb-12"
            >
              <h2
                className="font-display text-2xl md:text-4xl mb-3"
                style={{ color: "hsl(33, 30%, 90%)" }}
              >
                {section.title}
              </h2>
              <p
                className="font-body text-sm md:text-base max-w-xl"
                style={{ color: "rgba(255, 255, 255, 0.5)" }}
              >
                {section.subtitle}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.machines.map((machine) => {
                const idx = getFlatIndex();
                return (
                  <MachineryCard
                    key={machine.name}
                    machine={machine}
                    index={idx}
                    onImageClick={() => setLightboxIndex(idx)}
                  />
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* Full Equipment List */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: elyseCurve }}
            className="font-display text-2xl md:text-4xl mb-3 text-center"
            style={{ color: "hsl(33, 30%, 90%)" }}
          >
            Demo <span className="text-gold-gradient">Equipment Grid</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1, ease: elyseCurve }}
            className="font-body text-sm mb-12 max-w-xl mx-auto text-center"
            style={{ color: "rgba(255, 255, 255, 0.5)" }}
          >
            Invented lineup covering pretend departments — swap CSV later.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <EquipmentTable title="Demo grouping · Panels" items={panelSectionEquipment} />
            <EquipmentTable title="Demo grouping · Milling" items={millingVeneerEquipment} />
            <EquipmentTable title="Demo grouping · Sanding" items={sandingSectionEquipment} />
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="absolute inset-0"
            style={{
              backdropFilter: "blur(30px)",
              WebkitBackdropFilter: "blur(30px)",
              background: "rgba(18, 34, 59, 0.9)",
            }}
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: elyseCurve }}
            className="relative max-w-5xl max-h-[85vh] rounded-lg overflow-hidden"
            style={{
              background: "rgba(18, 34, 59, 0.5)",
              border: "0.5px solid rgba(255, 255, 255, 0.15)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={allMachineImages[lightboxIndex].src}
              alt={allMachineImages[lightboxIndex].alt}
              className="w-full h-full object-contain max-h-[85vh]"
            />
            <button
              onClick={() =>
                setLightboxIndex((prev) =>
                  prev! > 0 ? prev! - 1 : allMachineImages.length - 1
                )
              }
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full w-10 h-10 flex items-center justify-center text-lg"
              style={{
                background: "rgba(18, 34, 59, 0.7)",
                backdropFilter: "blur(20px)",
                border: "0.5px solid rgba(255, 255, 255, 0.2)",
                color: "hsl(33, 30%, 90%)",
              }}
            >
              ‹
            </button>
            <button
              onClick={() =>
                setLightboxIndex((prev) =>
                  prev! < allMachineImages.length - 1 ? prev! + 1 : 0
                )
              }
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full w-10 h-10 flex items-center justify-center text-lg"
              style={{
                background: "rgba(18, 34, 59, 0.7)",
                backdropFilter: "blur(20px)",
                border: "0.5px solid rgba(255, 255, 255, 0.2)",
                color: "hsl(33, 30%, 90%)",
              }}
            >
              ›
            </button>
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-3 right-3 rounded-full w-8 h-8 flex items-center justify-center text-sm"
              style={{
                background: "rgba(18, 34, 59, 0.7)",
                backdropFilter: "blur(20px)",
                border: "0.5px solid rgba(255, 255, 255, 0.2)",
                color: "hsl(33, 30%, 90%)",
              }}
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </div>
  );
};

export default MachineryPage;
