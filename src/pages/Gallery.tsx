import { motion } from"framer-motion";
import { useState } from"react";
import Navbar from"@/components/Navbar";
import Footer from"@/components/Footer";
import { useLenis } from"@/hooks/useLenis";

import { extraGalleryImages } from "./ExtraGalleryImages";

const galleryImages = [
  ...extraGalleryImages
];

const categories = ["All", ...Array.from(new Set(galleryImages.map((img) => img.category)))];

const Gallery = () => {
  useLenis();
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory ==="All" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div className="grain-overlay min-h-screen">
      <Navbar />

      {/* Hero header */}
      <section className="pt-32 pb-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-2xl md:text-3xl font-bold tracking-widest uppercase mb-6"
            style={{ color:"#999999" }}
          >
            Our Gallery
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30, filter:"blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter:"blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl md:text-6xl lg:text-7xl leading-tight"
            style={{ color:"hsl(33, 30%, 90%)" }}
          >
            Craftsmanship
            <br />
            <span className="text-gold-gradient">In Every Frame.</span>
          </motion.h1>
        </div>
      </section>

      {/* Category filter */}
      <div className="px-6 md:px-12 lg:px-20 pb-10">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-5 py-2 rounded-full text-xs font-body tracking-[0.2em] uppercase transition-all duration-500"
              style={{
                background: activeCategory === cat ?"#999999" :"rgba(18, 34, 59, 0.6)",
                color: activeCategory === cat ?"hsl(33, 100%, 98%)" :"rgba(255, 255, 255, 0.6)",
                border: activeCategory === cat ?"0.5px solid #999999" :"0.5px solid rgba(255, 255, 255, 0.15)",
                backdropFilter:"blur(20px)",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry grid */}
      <div className="px-6 md:px-12 lg:px-20 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[180px] md:auto-rows-[240px]">
          {filtered.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 40, filter:"blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter:"blur(0px)" }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className={`rounded-lg overflow-hidden relative group cursor-pointer ${img.span}`}
              style={{
                background:"rgba(18, 34, 59, 0.4)",
                backdropFilter:"blur(40px)",
                WebkitBackdropFilter:"blur(40px)",
                border:"0.5px solid rgba(255, 255, 255, 0.1)",
              }}
              onClick={() => setLightboxIndex(galleryImages.indexOf(img))}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
                loading="lazy"
              />
              {/* Bottom gradient */}
              <div
                className="absolute inset-0 opacity-60 group-hover:opacity-40 transition-opacity duration-700"
                style={{ background:"linear-gradient(to top, #0f172a 0%, transparent 60%)" }}
              />
              {/* Gold glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ background:"radial-gradient(circle at center, rgba(153, 153, 153, 0.15) 0%, transparent 70%)" }}
              />
              {/* Hover border glow */}
              <div
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow:"inset 0 0 0 0.5px rgba(153, 153, 153, 0.5), 0 0 30px rgba(153, 153, 153, 0.08)" }}
              />
              {/* Category label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <span
                  className="font-body text-[10px] tracking-[0.25em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ color:"#999999" }}
                >
                  {img.category}
                </span>
              </div>
              {/* Top glass shine */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>

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
              backdropFilter:"blur(30px)",
              WebkitBackdropFilter:"blur(30px)",
              background:"rgba(18, 34, 59, 0.9)",
            }}
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-w-5xl max-h-[85vh] rounded-lg overflow-hidden"
            style={{
              background:"rgba(18, 34, 59, 0.5)",
              border:"0.5px solid rgba(255, 255, 255, 0.15)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              className="w-full h-full object-contain max-h-[85vh]"
            />
            <button
              onClick={() => setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : galleryImages.length - 1))}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full w-10 h-10 flex items-center justify-center transition-colors text-lg"
              style={{
                background:"rgba(18, 34, 59, 0.7)",
                backdropFilter:"blur(20px)",
                border:"0.5px solid rgba(255, 255, 255, 0.2)",
                color:"hsl(33, 30%, 90%)",
              }}
            >
              ‹
            </button>
            <button
              onClick={() => setLightboxIndex((prev) => (prev! < galleryImages.length - 1 ? prev! + 1 : 0))}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full w-10 h-10 flex items-center justify-center transition-colors text-lg"
              style={{
                background:"rgba(18, 34, 59, 0.7)",
                backdropFilter:"blur(20px)",
                border:"0.5px solid rgba(255, 255, 255, 0.2)",
                color:"hsl(33, 30%, 90%)",
              }}
            >
              ›
            </button>
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-3 right-3 rounded-full w-8 h-8 flex items-center justify-center text-sm transition-colors"
              style={{
                background:"rgba(18, 34, 59, 0.7)",
                backdropFilter:"blur(20px)",
                border:"0.5px solid rgba(255, 255, 255, 0.2)",
                color:"hsl(33, 30%, 90%)",
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

export default Gallery;
