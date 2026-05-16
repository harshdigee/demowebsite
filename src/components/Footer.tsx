import { useNavigate } from"react-router-dom";
import { DEMO_SITE_LABEL, DEMO_PARA_SHORT, DEMO_COPYRIGHT_ENTITY } from"@/constants/demoCopy";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer
      className="py-16 px-4 md:px-8 lg:px-20  relative"
      style={{ borderTop:"0.5px solid rgba(255,255,255,0.1)" }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand + description */}
          <div className="md:col-span-1 max-w-full">
            <span className="font-display text-base tracking-[0.25em] uppercase font-semibold block mb-5" style={{ color: "rgba(255,255,255,0.9)" }}>{DEMO_SITE_LABEL}</span>
            <p className="font-body text-sm leading-[1.6] max-w-full text-left" style={{ color:"rgba(255,255,255,0.5)" }}>
              {DEMO_PARA_SHORT}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-body text-xs tracking-[0.2em] uppercase mb-5" style={{ color:"#999999" }}>
              Quick Links
            </p>
            <nav className="flex flex-col gap-3">
              {[
                { label:"Home", action: () => { navigate("/"); setTimeout(() => window.scrollTo(0,0), 100); } },
                { label:"About Us", action: () => navigate("/about-us") },
                { label:"Services", action: () => navigate("/services") },
                { label:"Contact Us", action: () => { navigate("/"); setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior:"smooth" }), 100); } },
              ].map((link) => (
                <a
                  key={link.label}
                  onClick={(e) => { e.preventDefault(); link.action(); }}
                  className="font-body text-sm transition-opacity hover:opacity-80 cursor-pointer"
                  style={{ color:"rgba(255,255,255,0.5)" }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Resources */}
          <div>
            <p className="font-body text-xs tracking-[0.2em] uppercase mb-5" style={{ color:"#999999" }}>
              Resources
            </p>
            <nav className="flex flex-col gap-3">
              {[
                { label:"Our Gallery", action: () => navigate("/gallery") },
                { label:"FAQs", action: () => navigate("/faq") },
                { label:"Career", action: () => navigate("/career") },
                { label:"Blog", action: () => navigate("/blog") },
              ].map((link) => (
                <a
                  key={link.label}
                  href="#"
                  onClick={(e) => { e.preventDefault(); link.action(); }}
                  className="font-body text-sm transition-opacity hover:opacity-80 cursor-pointer"
                  style={{ color:"rgba(255,255,255,0.5)" }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="flex flex-col md:flex-row justify-between items-center pt-8 gap-6"
          style={{ borderTop:"0.5px solid rgba(255,255,255,0.1)" }}
        >
          <p className="font-body text-xs" style={{ color:"rgba(255,255,255,0.4)" }}>
            &copy; {new Date().getFullYear()} {DEMO_COPYRIGHT_ENTITY}. Demo layout only.
          </p>

          <div className="flex gap-4">
            <a href="/privacy-policy" onClick={(e) => { e.preventDefault(); navigate("/privacy-policy"); }} className="font-body text-xs transition-opacity hover:opacity-80" style={{ color:"rgba(255,255,255,0.4)" }}>
              Privacy Policy
            </a>
            <span style={{ color:"rgba(255,255,255,0.2)" }}>|</span>
            <a href="/terms" onClick={(e) => { e.preventDefault(); navigate("/terms"); }} className="font-body text-xs transition-opacity hover:opacity-80" style={{ color:"rgba(255,255,255,0.4)" }}>
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
