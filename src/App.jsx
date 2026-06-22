import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Programs from './components/Programs';
import Facilities from './components/Facilities';
import Gallery from './components/Gallery';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

import FloatingDecoration from './components/FloatingDecoration';

function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <Programs />
        <Facilities />
        <Gallery />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
