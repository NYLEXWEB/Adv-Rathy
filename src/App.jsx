import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProfessionalCredentials from './components/ProfessionalCredentials';
import QuickInfoStrip from './components/QuickInfoStrip';
import PracticeAreas from './components/PracticeAreas';
import AboutContactSplit from './components/AboutContactSplit';
import JurisdictionNotary from './components/JurisdictionNotary';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8F6F0] text-[#1F2421] selection:bg-[#BE9A5A] selection:text-white font-sans">
      <Header />
      <main>
        <Hero />
        <ProfessionalCredentials />
        <QuickInfoStrip />
        <PracticeAreas />
        <AboutContactSplit />
        <JurisdictionNotary />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
