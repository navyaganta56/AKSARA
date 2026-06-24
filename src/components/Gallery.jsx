import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2, Trophy, Images } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const allImages = [
    // School Life
    { url: "/assets/yoga_class.jpg", title: "Yoga and Wellness Session", category: "school" },
    { url: "/assets/it_literacy_class.jpg", title: "IT Literacy Session", category: "school" },
    { url: "/assets/digital_learning.jpg", title: "Audio Visual Classes", category: "school" },
    { url: "/assets/students_jumping.jpg", title: "Joyful Activities", category: "school" },
    { url: "/assets/handshake.jpg", title: "Community Partnerships", category: "school" },
    { url: "/assets/speaking_event.jpg", title: "Principal's Address", category: "school" },
    // SSC Results 2025-26
    { url: "/assets/ssc_results_2025_26.jpg", title: "SSC Results 2025-26 — 100% Pass", category: "ssc" },
    { url: "/assets/pancha_sutra.png", title: "Pancha Sutra of Excellence", category: "ssc" },
    { url: "/assets/ssc_students_banner.jpg", title: "SSC 2026 — అక్షర విద్యార్థుల ప్రభంజనం", category: "ssc" },
    { url: "/assets/ssc_all_students.jpg", title: "All 33 Students — SSC Results & Salient Features", category: "ssc" },
    { url: "/assets/ssc_topper_2026.jpg", title: "School Topper — T. Likhitha Varshini (591/600)", category: "ssc" },
  ];

  const categories = [
    { id: 'all', label: 'All Photos', icon: <Images size={16} /> },
    { id: 'school', label: 'School Life', icon: <Images size={16} /> },
    { id: 'ssc', label: 'SSC Results 2025-26', icon: <Trophy size={16} /> },
  ];

  const filtered = activeCategory === 'all' ? allImages : allImages.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="py-24 px-4 md:px-12 bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h4 className="text-red-600 font-bold tracking-widest uppercase mb-2 text-sm">Captured Memories</h4>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E3A5F] mb-4">School Gallery</h2>
          <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full"></div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 border-2 ${
                activeCategory === cat.id
                  ? 'bg-[#1E3A5F] text-white border-[#1E3A5F] shadow-lg scale-105'
                  : 'bg-white text-[#1E3A5F] border-[#1E3A5F]/30 hover:border-[#1E3A5F] hover:shadow-md'
              }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        {/* SSC Achievement Banner (shown when SSC tab is active) */}
        <AnimatePresence>
          {activeCategory === 'ssc' && (
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="mb-10 p-5 rounded-2xl bg-gradient-to-r from-yellow-50 via-white to-green-50 border-2 border-yellow-400 shadow-md flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left"
            >
              <span className="text-5xl">🏆</span>
              <div>
                <p className="text-[#1E3A5F] font-extrabold text-xl md:text-2xl">SSC Results 2025-26 — 100% Results!</p>
                <p className="text-gray-600 text-sm mt-1">33 students appeared · 33 passed · 12 scored above 550 · 22 scored above 500</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((image, index) => (
              <motion.div
                key={image.url}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07, duration: 0.45 }}
                className="relative group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                {/* SSC badge */}
                {image.category === 'ssc' && (
                  <div className="absolute top-3 left-3 bg-yellow-400 text-[#1E3A5F] text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow">
                    <Trophy size={11} /> SSC 2025-26
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end text-white p-6">
                  <Maximize2 size={28} className="mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-red-400" />
                  <p className="font-bold text-base text-center leading-tight">{image.title}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox / Fullscreen Image Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 text-white hover:text-red-500 transition-colors z-10">
              <X size={40} strokeWidth={2} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-h-[85vh] w-auto object-contain rounded-lg shadow-2xl border-2 border-white/20"
              />
              <div className="mt-6 text-center">
                <p className="text-white text-xl md:text-3xl font-bold">{selectedImage.title}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
