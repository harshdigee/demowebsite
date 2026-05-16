import { Toaster } from"@/components/ui/toaster";
import { Toaster as Sonner } from"@/components/ui/sonner";
import { TooltipProvider } from"@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from"@tanstack/react-query";
import { BrowserRouter, Routes, Route } from"react-router-dom";
import Index from"./pages/Index";
import Gallery from"./pages/Gallery";
import AboutUsPage from"./pages/AboutUsPage";
import FAQPage from"./pages/FAQPage";
import ServicesInternalPage from"./pages/ServicesInternalPage";
import CareerPage from"./pages/CareerPage";
import BlogPage from"./pages/BlogPage";
import BlogPostPage from"./pages/BlogPostPage";
import PrivacyPolicy from"./pages/PrivacyPolicy";
import TermsConditions from"./pages/TermsConditions";
import ContactPage from"./pages/ContactPage";
import MachineryPage from"./pages/MachineryPage";
import NotFound from"./pages/NotFound";
import AnimatedBackground from"./components/AnimatedBackground";
import ScrollToTop from"./components/ScrollToTop";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AnimatedBackground />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/services" element={<ServicesInternalPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/machinery" element={<MachineryPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
