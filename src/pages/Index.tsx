import { useState } from 'react';
import "@/styles/home.css";
import AboutSection from "@/components/Index/AboutSection";
import ContactSection from "@/components/Index/ContactSection";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/Index/HeroSection";
import MetricsSection from "@/components/Index/MetricsSection";
import Navigation from "@/components/layout/Navigation";
import SectorsSection from "@/components/Index/SectorsSection";
import ServicesGrid from "@/components/Index/ServicesGrid";
import TestimonialsSection from "@/components/Index/TestimonialsSection";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeSectorTab, setActiveSectorTab] = useState<string>("finance");
  const [lang, setLang] = useState<'es' | 'en'>('es');

  const onActiveSectorTabChange = (newValue: string) => {
    setActiveSectorTab(newValue);
  };

  const onMobileMenuOpenChange = (newValue: boolean) => {
    setMobileMenuOpen(newValue);
  };

  return (
    <div className="bg-steel-deep font-body text-white overflow-x-hidden">
      <Navigation 
        mobileMenuOpen={mobileMenuOpen} 
        onMobileMenuOpenChange={onMobileMenuOpenChange} 
        lang={lang} 
        setLang={setLang} 
      />
      <HeroSection lang={lang} />
      <ServicesGrid lang={lang} />
      <MetricsSection lang={lang} />
      <SectorsSection 
        activeSectorTab={activeSectorTab} 
        onActiveSectorTabChange={onActiveSectorTabChange} 
        lang={lang} 
      />
      <AboutSection lang={lang} />
      <TestimonialsSection lang={lang} />
      <ContactSection lang={lang} />
      <Footer lang={lang} />
    </div>
  );
};

export default Index;
