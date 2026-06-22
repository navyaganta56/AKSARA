import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2 } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { url: "/assets/yoga_class.jpg", title: "Yoga and Wellness Session" },
    { url: "/assets/it_literacy_class.jpg", title: "IT Literacy Session" },
    { url: "/assets/digital_learning.jpg", title: "Audio Visual Classes" },
    { url: "/assets/students_jumping.jpg", title: "Joyful Activities" },
    { url: "/assets/handshake.jpg", title: "Community Partnerships" },
    { url: "/assets/speaking_event.jpg", title: "Principal's Address" }
  ];

  return (
    <section id="gallery" className="py-24 px-4 md:px-12 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h4 className="text-red-600 font-bold tracking-widest uppercase mb-2 text-sm">Captured Memories</h4>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E3A5F] mb-4">School Gallery</h2>
          <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full"></div>
        </div>

        {/* Improved Symmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end text-white p-6">
                <Maximize2 size={28} className="mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-red-500" />
                <p className="font-bold text-lg text-center leading-tight">{image.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
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
            <button className="absolute top-6 right-6 text-white hover:text-red-500 transition-colors">
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
