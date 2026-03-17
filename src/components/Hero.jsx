import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const Hero = () => {
  const slides = [
    {
      image: "/assets/admission_banner.jpg",
      showOverlay: true,
      buttonText: "ADMISSIONS OPEN 2026-27"
    },
    {
      image: "/assets/graduation_1.jpg",
      showOverlay: false
    },
    {
      image: "/assets/handshake.jpg",
      showOverlay: false
    },
    {
      image: "/assets/speaking_event.jpg",
      showOverlay: false
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  return (
    <div className="relative w-full h-[500px] md:h-[700px] overflow-hidden bg-slate-900 group">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          {/* Background Layer: Blurred and Stretched to fill edges (Mirror Effect) */}
          <div 
            className="absolute inset-0 bg-cover bg-center blur-2xl scale-110 opacity-50"
            style={{ backgroundImage: `url("${slides[current].image}")` }}
          />
          
          {/* Foreground Layer: Sharp and Contained to see the full photo without cropping */}
          <div 
            className="absolute inset-0 bg-contain bg-center bg-no-repeat z-10"
            style={{ backgroundImage: `url("${slides[current].image}")` }}
          />

          {/* Subtle Contrast Overlays */}
          <div className="absolute inset-0 bg-black/10 z-20" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/40 to-transparent z-20" />
        </motion.div>
      </AnimatePresence>

      {/* Hero Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 z-30">
        <AnimatePresence mode="wait">
          {slides[current].showOverlay && (
            <motion.div 
              key={`overlay-${current}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="px-4 text-center"
            >
              <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full font-black text-xl md:text-2xl transition-all duration-300 shadow-[0_0_30px_rgba(220,38,38,0.4)] transform hover:scale-105 border-4 border-white mb-4 uppercase tracking-tighter">
                {slides[current].buttonText}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Professional Navigation Controls */}
      <button 
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-black/20 hover:bg-white text-white hover:text-red-600 transition-all flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 z-40 border border-white/20 shadow-xl"
      >
        <ChevronLeft size={40} strokeWidth={3} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-black/20 hover:bg-white text-white hover:text-red-600 transition-all flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 z-40 border border-white/20 shadow-xl"
      >
        <ChevronRight size={40} strokeWidth={3} />
      </button>

      {/* Modern Pagination Indicators (Dots like the reference) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-4 z-40">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-500 rounded-full border-2 border-white shadow-md ${
              current === i ? "w-10 h-3 bg-white border-white" : "w-3 h-3 bg-white/40 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
