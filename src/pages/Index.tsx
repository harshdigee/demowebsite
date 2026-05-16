import { useState, useCallback } from"react";
import Navbar from"@/components/Navbar";
import HeroSection from"@/components/HeroSection";
import AboutUs from"@/components/AboutUs";
import ServicesPage from"@/components/ServicesPage";
import PrecisionMetrics from"@/components/PrecisionMetrics";
import B2BPortal from"@/components/B2BPortal";
import ContactUs from"@/components/ContactUs";
import Footer from"@/components/Footer";
import Testimonials from"@/components/Testimonials";
import ProcessTimeline from"@/components/ProcessTimeline";
import Certifications from"@/components/Certifications";
import GlassDock from"@/components/GlassDock";
import GalleryShowcase from"@/components/GalleryShowcase";
import WhatsAppButton from"@/components/WhatsAppButton";
import PrecisionLoader from"@/components/PrecisionLoader";
import { useLenis } from"@/hooks/useLenis";

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const handleLoaded = useCallback(() => setLoaded(true), []);
  useLenis();

  return (
    <div className="grain-overlay">
      {!loaded && <PrecisionLoader onComplete={handleLoaded} />}
      <Navbar />
      <div id="top" />
      <HeroSection />
      <AboutUs />
      <div id="services">
        <ServicesPage />
      </div>
      <div id="metrics">
        <PrecisionMetrics />
      </div>
      <div id="b2b">
        <B2BPortal />
      </div>
      <ProcessTimeline />
      <GalleryShowcase />
      <Certifications />
      {/* <LeadershipTeam /> */}
      {/* <Testimonials /> */}
      <ContactUs />
      <Footer />
      <GlassDock />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
