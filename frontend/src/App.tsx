import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Solutions from './sections/Solutions';
import About from './sections/About';
import Mission from './sections/Mission';
import Challenges from './sections/Challenges';
import CTA from './sections/CTA';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Solutions />
        <About />
        <Mission />
        <Challenges />
        <CTA />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;