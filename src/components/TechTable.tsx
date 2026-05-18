"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Car } from "../data/cars";

interface TechTableProps {
  techTable: Car["techTable"];
}

const listVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const rowVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
};

export default function TechTable({ techTable }: TechTableProps) {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#0d1318]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32">
        
        {/* Left Column */}
        <div className="w-full lg:w-1/3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="sticky top-32"
          >
            <h2 className="font-cormorant text-5xl md:text-6xl text-eef2f5 mb-6">
              Technical Data
            </h2>
            <div className="w-12 h-px bg-ice mb-6" />
            <p className="font-barlow font-light text-silver leading-relaxed">
              Every component designed without compromise. The pinnacle of automotive engineering, quantified.
            </p>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-2/3">
          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col"
          >
            {techTable.map((item, idx) => (
              <motion.div 
                key={idx}
                variants={rowVariants}
                className="flex justify-between items-end py-5 border-b border-silver/10 group hover:border-ice/30 transition-colors duration-300"
              >
                <span className="font-barlow tracking-widest uppercase text-muted text-sm group-hover:text-silver transition-colors">
                  {item.key}
                </span>
                <span className="font-cormorant text-2xl md:text-3xl text-eef2f5 text-right font-light group-hover:text-ice transition-colors">
                  {item.val}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
