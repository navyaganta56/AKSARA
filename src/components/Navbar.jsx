import React, { useState, useEffect } from 'react';
import { Phone, Mail, Facebook, Youtube, Instagram, Menu, X } from 'lucide-react';

import DancingText from './DancingText';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="w-full flex flex-col">
      {/* Top Header */}
      <div className="bg-[#1E3A5F] text-white py-2 px-4 md:px-12 flex justify-between items-center text-xs md:text-sm">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Phone size={14} />
            <span>+91 85002 97704</span>
          </div>
          <div className="flex items-center space-x-1">
            <Mail size={14} />
            <span>aksharahighschool1996@gmail.com</span>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="hover:text-blue-300 transition-colors">Facebook</a>
          <span>|</span>
          <a href="#" className="hover:text-blue-300 transition-colors">Youtube</a>
          <span>|</span>
          <a href="#" className="hover:text-blue-300 transition-colors">Instagram</a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50 px-4 md:px-12 py-3">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <img src="/src/assets/logo_official.png" alt="Logo" className="w-14 h-14 object-contain" />
            <div className="flex flex-col">
              <DancingText
                text="AKSHARA HIGH SCHOOL"
                className="text-xl md:text-2xl font-black rainbow-school-text no-animation leading-none text-left"
              />
              <span className="text-[12px] md:text-[14px] text-red-600 font-black mt-1 uppercase tracking-wider text-left">NAWABPET, TIRUPATI</span>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-[#1E293B] font-bold hover:text-[#1E3A5F] transition-colors border-b-2 border-transparent hover:border-[#F97316]">Home</a>
            <a href="#about" className="text-[#1E293B] font-bold hover:text-[#1E3A5F] transition-colors border-b-2 border-transparent hover:border-[#F97316]">About Us</a>
            <a href="#features" className="text-[#1E293B] font-bold hover:text-[#1E3A5F] transition-colors border-b-2 border-transparent hover:border-[#F97316]">Features</a>
            <a href="#facilities" className="text-[#1E293B] font-bold hover:text-[#1E3A5F] transition-colors border-b-2 border-transparent hover:border-[#F97316]">Facilities</a>
            <a href="#gallery" className="text-[#1E293B] font-bold hover:text-[#1E3A5F] transition-colors border-b-2 border-transparent hover:border-[#F97316]">Gallery</a>
            <a href="#contact" className="bg-[#1E3A5F] text-white px-6 py-2 rounded-lg font-bold hover:bg-[#162d4a] transition-all transform hover:scale-105 shadow-md">
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#1E3A5F]">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col space-y-4 border-t border-gray-100 animate-in fade-in slide-in-from-top-1 z-50">
            <a href="#" className="text-[#1E293B] font-bold" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#about" className="text-[#1E293B] font-bold" onClick={() => setIsOpen(false)}>About Us</a>
            <a href="#features" className="text-[#1E293B] font-bold" onClick={() => setIsOpen(false)}>Features</a>
            <a href="#facilities" className="text-[#1E293B] font-bold" onClick={() => setIsOpen(false)}>Facilities</a>
            <a href="#gallery" className="text-[#1E293B] font-bold" onClick={() => setIsOpen(false)}>Gallery</a>
            <a href="#contact" className="bg-[#1E3A5F] text-white px-6 py-3 rounded-lg font-bold w-full text-center" onClick={() => setIsOpen(false)}>
              Contact Us
            </a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
