"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Car } from "../data/cars";

interface FeaturesGridProps {
  features: Car["features"];
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  },
};

export default function FeaturesGrid({ features }: FeaturesGridProps) {
  return (
    <section id="technology" className="py-32 px-6 md:px-12 bg-[#0d1318]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-cormorant italic text-5xl md:text-7xl text-eef2f5 mb-6 text-center">
            Form Follows Performance
          </h2>
          <div className="w-px h-16 bg-gradient-to-b from-ice/50 to-transparent mx-auto" />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              variants={cardVariants}
              className="relative p-8 border border-silver/5 bg-transparent group overflow-hidden transition-colors duration-500 hover:bg-[#5b8caf]/[0.04]"
            >
              {/* Bottom border sweep */}
              <div className="absolute bottom-0 left-0 h-[2px] w-full bg-ice origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
              
              <span className="font-barlow tracking-widest text-ice text-xl block mb-6">
                {feature.num}
              </span>
              <h3 className="font-cormorant text-3xl text-eef2f5 mb-4">
                {feature.title}
              </h3>
              <p className="font-barlow font-light text-silver leading-relaxed text-sm">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
