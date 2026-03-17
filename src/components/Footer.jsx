import React from 'react';
import { Mail, Phone, MapPin, Facebook, Youtube, Instagram } from 'lucide-react';
import DancingText from './DancingText';

const Footer = () => {
  return (
    <footer className="bg-[#0A1121] text-white pt-16 pb-8 px-4 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img src="/assets/logo_official.png" alt="Logo" className="w-12 h-12 object-contain" />
              <div className="flex flex-col">
                <span className="text-xl font-black text-white uppercase tracking-tight">AKSHARA HIGH SCHOOL</span>
                <span className="text-[10px] text-red-500 font-black leading-none tracking-wider">NAWABPET, TIRUPATI</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              <span className="font-bold text-white">Akshara High School</span> is a premier educational institution dedicated to nurturing young minds with academic excellence and holistic development.
            </p>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-widest text-sm">Important Links</h3>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Features', 'Facilities', 'Contact Us'].map((link, i) => (
                <li key={i}>
                  <a href={`#${link === 'Home' ? '' : link.toLowerCase().split(' ')[0]}`} className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Programs */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-widest text-sm">Our Programs</h3>
            <ul className="space-y-4">
              {['IIT & NEET Foundation', 'Bedrock Program', 'Hindi Prachara Sabha', 'Spoken English', 'Smart Programmes', 'Digital Classes'].map((program, i) => (
                <li key={i}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-widest text-sm">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x- group">
                <MapPin size={18} className="text-red-500 mt-1 shrink-0 mr-2" />
                <span className="text-slate-400 text-sm leading-snug">
                  Tilak Road, Nawabpet, Tirupati, Andhra Pradesh - 517501
                </span>
              </div>
              <div className="flex items-center space-x-3 group text-slate-400 hover:text-white transition-colors cursor-pointer">
                <Phone size={18} className="text-red-500 shrink-0" />
                <span className="text-sm font-medium">+91 85002 97704</span>
              </div>
              <div className="flex items-center space-x-3 group text-slate-400 hover:text-white transition-colors cursor-pointer">
                <Mail size={18} className="text-red-500 shrink-0" />
                <span className="text-sm font-medium">aksharahighschool1996@gmail.com</span>
              </div>
            </div>

            {/* Social Icons - Boxed Style */}
            <div className="flex space-x-3 pt-2">
              {[
                { label: 'FB', icon: Facebook },
                { label: 'YT', icon: Youtube },
                { label: 'IG', icon: Instagram }
              ].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-[#1E293B] flex items-center justify-center text-slate-300 hover:bg-[#334155] hover:text-white transition-all text-xs font-bold"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-800/50 text-center">
          <p className="text-slate-500 text-xs font-medium tracking-wide">
            © {new Date().getFullYear()} <span className="text-white font-bold">AKSHARA HIGH SCHOOL</span> - All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
