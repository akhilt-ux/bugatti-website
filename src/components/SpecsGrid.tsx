"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Car } from "../data/cars";

interface SpecsGridProps {
  specs: Car["specs"];
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  },
};

export default function SpecsGrid({ specs }: SpecsGridProps) {
  return (
    <section id="performance" className="py-32 px-6 md:px-12 bg-[#0d1318]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {specs.map((spec, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="relative pl-6 group"
            >
              {/* Animated left border on hover */}
              <div className="absolute left-0 bottom-0 w-[2px] h-0 bg-ice transition-all duration-500 ease-out group-hover:h-full" />
              <div className="absolute left-0 bottom-0 w-[2px] h-full bg-silver/10" />
              
              <div className="flex items-baseline mb-2">
                <span className="font-cormorant italic text-5xl md:text-6xl lg:text-7xl text-eef2f5 font-light">
                  {spec.value}
                </span>
                <span className="font-barlow text-ice ml-2 text-xl align-super">
                  {spec.unit}
                </span>
              </div>
              <h3 className="font-barlow tracking-widest uppercase text-silver mb-2 text-sm">
                {spec.label}
              </h3>
              <p className="font-barlow font-light text-muted text-sm leading-relaxed max-w-[200px]">
                {spec.detail}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
