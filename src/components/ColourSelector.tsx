"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Car } from "../data/cars";

interface ColourSelectorProps {
  car: Car;
}

export default function ColourSelector({ car }: ColourSelectorProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  
  // We expect 7 images named gallery-1.jpg through gallery-7.jpg
  const galleryImages = Array.from({ length: 7 }, (_, i) => `/images/gallery-${i + 1}.jpg`);

  return (
    <section id="configure" className="py-32 px-6 md:px-12 bg-noir">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-barlow tracking-widest uppercase text-ice text-sm block mb-4">
            Visual Exploration
          </span>
          <h2 className="font-cormorant text-5xl md:text-6xl text-eef2f5">
            The Masterpiece in Detail
          </h2>
        </motion.div>

        {/* Main Image Container */}
        <motion.div 
          className="relative w-full max-w-5xl aspect-[16/9] mb-12 overflow-hidden border border-silver/10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.img 
            key={activeIdx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            src={galleryImages[activeIdx]} 
            alt={`Bugatti Tourbillon Gallery ${activeIdx + 1}`} 
            className="w-full h-full object-cover object-center"
            style={{ filter: "brightness(0.95) contrast(1.05)" }}
            onError={(e) => {
              // Fallback if image not uploaded yet
              (e.target as HTMLImageElement).src = `${car.folderPath}/ezgif-frame-001.jpg`;
            }}
          />
        </motion.div>

        {/* Thumbnails */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {galleryImages.map((src, idx) => {
            const isActive = idx === activeIdx;
            return (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`relative w-20 h-14 md:w-32 md:h-20 overflow-hidden border transition-all duration-300 ${
                  isActive ? "border-ice scale-105" : "border-transparent opacity-50 hover:opacity-100"
                }`}
                aria-label={`View gallery image ${idx + 1}`}
              >
                <img 
                  src={src} 
                  alt={`Thumbnail ${idx + 1}`} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback
                    (e.target as HTMLImageElement).src = `${car.folderPath}/ezgif-frame-001.jpg`;
                  }}
                />
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
