import { motion } from"framer-motion";
import { Home, Grid3X3, BarChart3, Briefcase } from"lucide-react";

const navItems = [
  { icon: Home, label:"HOME", shortLabel:"HOME", href:"#top" },
  { icon: Grid3X3, label:"SERVICES", shortLabel:"WORK", href:"#services" },
  { icon: BarChart3, label:"METRICS", shortLabel:"DATA", href:"#metrics" },
  { icon: Briefcase, label:"B2B", shortLabel:"B2B", href:"#b2b" },
];

const GlassDock = () => {
  const handleClick = (href: string) => {
    if (href ==="#top") {
      window.scrollTo({ top: 0, behavior:"smooth" });
      return;
    }
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior:"smooth" });
  };

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-6 left-0 right-0 z-40 md:hidden flex justify-center px-6"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 8px)' }}
    >
      <div className="glass rounded-full px-5 py-2 flex items-center gap-4">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => handleClick(item.href)}
            className="flex flex-col items-center gap-0.5 text-foreground/70 hover:text-primary transition-colors duration-300 flex-shrink-0 w-12 sm:w-14"
            aria-label={item.label}
          >
            <item.icon className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.5} />
            <span className="font-body text-[8px] sm:text-[9px] tracking-tight uppercase whitespace-nowrap">{item.shortLabel}</span>
          </button>
        ))}
      </div>
    </motion.nav>
  );
};

export default GlassDock;
