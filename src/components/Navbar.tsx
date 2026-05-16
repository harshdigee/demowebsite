import { motion, AnimatePresence, useScroll, useTransform } from"framer-motion";
import { Menu, X } from"lucide-react";
import { useState, useCallback } from"react";
import { useNavigate, useLocation } from"react-router-dom";

const navItems = ["About Us","Services","Gallery","Machinery","Contact"];

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { scrollY } = useScroll();
  const navBg = useTransform(scrollY, [0, 150], [0.5, 0.6]);
  const navBlur = useTransform(scrollY, [0, 150], [20, 40]);

  const isHome = location.pathname ==="/";

  const handleNav = useCallback((item: string) => {
    if (item ==="Gallery") {
      navigate("/gallery");
      return;
    }
    if (item ==="About Us") {
      navigate("/about-us");
      window.scrollTo(0, 0);
      return;
    }
    if (item ==="Services") {
      navigate("/services");
      return;
    }
    if (item ==="Machinery") {
      navigate("/machinery");
      return;
    }
    if (item ==="Contact") {
      navigate("/contact");
      return;
    }
  }, [navigate]);

  const handleLogoClick = useCallback(() => {
    if (isHome) {
      window.scrollTo({ top: 0, behavior:"smooth" });
    } else {
      navigate("/");
    }
  }, [isHome, navigate]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <motion.div
          className="mx-3 md:mx-6 mt-4 rounded-full px-4 md:px-8 py-3 flex items-center justify-between"
          style={{
            backdropFilter: useTransform(navBlur, (v) => `blur(${v}px)`),
            WebkitBackdropFilter: useTransform(navBlur, (v) => `blur(${v}px)`),
            backgroundColor: useTransform(navBg, (v) => `rgba(18, 34, 59, ${v})`),
            border:"0.5px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          {/* Desktop nav links - left */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.slice(0, 2).map((item) => (
              <a
                key={item}
                onClick={(e) => { e.preventDefault(); handleNav(item); }}
                className="text-[11px] tracking-[0.25em] uppercase transition-opacity duration-300 hover:opacity-100 opacity-70 cursor-pointer"
                style={{ color:"rgba(255, 255, 255, 0.85)" }}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Centered wordmark */}
          <a onClick={(e) => { e.preventDefault(); handleLogoClick(); }} className="flex-shrink-0 cursor-pointer">
            <span className="font-display text-sm md:text-base tracking-[0.25em] uppercase font-semibold" style={{ color: "rgba(255,255,255,0.9)" }}>Interiors</span>
          </a>

          {/* Desktop nav links - right */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.slice(2).map((item) => (
              <a
                key={item}
                onClick={(e) => { e.preventDefault(); handleNav(item); }}
                className="text-[11px] tracking-[0.25em] uppercase transition-opacity duration-300 hover:opacity-100 opacity-70 cursor-pointer"
                style={{ color:"rgba(255, 255, 255, 0.85)" }}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden p-1"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" style={{ color:"rgba(255, 255, 255, 0.85)" }} />
          </button>
        </motion.div>
      </motion.header>

      {/* Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-0 z-[60]"
              style={{
                backdropFilter:"blur(12px)",
                WebkitBackdropFilter:"blur(12px)",
                background:"rgba(18, 34, 59, 0.4)",
              }}
            />

            <motion.div
              initial={{ x:"-100%" }}
              animate={{ x: 0 }}
              exit={{ x:"-100%" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 left-0 bottom-0 w-80 z-[70] flex flex-col p-8"
              style={{
                backdropFilter:"blur(40px)",
                WebkitBackdropFilter:"blur(40px)",
                background:"rgba(18, 34, 59, 0.9)",
                borderRight:"0.5px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <div className="flex justify-between items-center mb-16">
                <span className="font-display text-sm tracking-[0.25em] uppercase font-semibold" style={{ color: "rgba(255,255,255,0.9)" }}>Interiors</span>
                <button onClick={() => setSidebarOpen(false)} aria-label="Close menu">
                  <X className="w-5 h-5" style={{ color:"rgba(255, 255, 255, 0.7)" }} />
                </button>
              </div>

              <nav className="flex flex-col gap-8">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.08 }}
                    onClick={() => {
                      handleNav(item);
                      setSidebarOpen(false);
                    }}
                    className="text-lg tracking-[0.2em] uppercase transition-opacity hover:opacity-100 opacity-70 cursor-pointer"
                    style={{ color:"rgba(255, 255, 255, 0.85)" }}
                  >
                    {item}
                  </motion.a>
                ))}
              </nav>

              <div className="mt-auto">
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
