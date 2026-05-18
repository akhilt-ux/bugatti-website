"use client";

import React from "react";
import { motion } from "framer-motion";
import { Car } from "../data/cars";

interface DimensionsGridProps {
  dimensions: Car["dimensions"];
}

export default function DimensionsGrid({ dimensions }: DimensionsGridProps) {
  return (
    <section className="py-20 px-6 md:px-12 bg-[#141c23]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-silver/10 border border-silver/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {dimensions.map((dim, idx) => (
            <div 
              key={idx}
              className="bg-[#141c23] hover:bg-[#1a242d] transition-colors duration-500 p-8 flex flex-col justify-center items-center text-center group"
            >
              <div className="flex items-baseline mb-3">
                <span className="font-cormorant text-4xl md:text-5xl text-eef2f5 group-hover:text-ice transition-colors duration-500">
                  {dim.value}
                </span>
                <span className="font-barlow text-silver ml-1 text-sm align-super">
                  {dim.unit}
                </span>
              </div>
              <span className="font-barlow tracking-[0.2em] uppercase text-muted text-xs">
                {dim.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
