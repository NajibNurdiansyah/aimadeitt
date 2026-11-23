import { useState } from 'react';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import PortfolioSection from './components/PortfolioSection';
import PricingSection from './components/PricingSection';
import ProcessSection from './components/ProcessSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';

export default function App() {
  const [preselectedService, setPreselectedService] = useState('');
  const [preselectedBudget, setPreselectedBudget] = useState('');
  const [preselectedNote, setPreselectedNote] = useState('');

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceName: string) => {
    setPreselectedService(serviceName);
    scrollToContact();
  };

  const handleSelectPlan = (serviceName: string, budget: string) => {
    setPreselectedService(serviceName);
    setPreselectedBudget(budget);
    scrollToContact();
  };

  const handleRequestSimilar = (projectTitle: string) => {
    setPreselectedService('Custom AI Creative Campaign');
    setPreselectedNote(
      `Interested in a creative direction similar to: ${projectTitle}.`
    );
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#090909] text-[#F5F1E8]">
      <Navbar onStartProject={scrollToContact} />
      <main>
        <HeroSection onStartProject={scrollToContact} />
        <AboutSection />
        <ServicesSection onSelectService={handleSelectService} />
        <PortfolioSection onRequestSimilar={handleRequestSimilar} />
        <ProcessSection />
        <PricingSection onSelectPlan={handleSelectPlan} />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection
          preselectedService={preselectedService}
          preselectedBudget={preselectedBudget}
          preselectedNote={preselectedNote}
        />
      </main>
      <Footer onSelectService={handleSelectService} />
    </div>
  );
}
