"use client";

import React from "react";
import { motion } from "framer-motion";
import { Car } from "../data/cars";

interface EngineSectionProps {
  engine: Car["engine"];
}

export default function EngineSection({ engine }: EngineSectionProps) {
  return (
    <section id="engine" className="py-32 px-6 md:px-12 bg-noir overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left: Animated Rings */}
        <div className="w-full lg:w-1/2 flex justify-center relative h-[400px] md:h-[500px]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative w-full h-full flex items-center justify-center"
          >
            {/* Outer Ring */}
            <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] border-[1px] border-ice/20 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] border-[1px] border-transparent border-t-ice/40 rounded-full animate-[spin_20s_linear_infinite]" />
            
            {/* Middle Ring */}
            <div className="absolute w-[220px] h-[220px] md:w-[320px] md:h-[320px] border-[1px] border-silver/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute w-[220px] h-[220px] md:w-[320px] md:h-[320px] border-[1px] border-transparent border-b-silver/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

            {/* Inner Ring */}
            <div className="absolute w-[140px] h-[140px] md:w-[200px] md:h-[200px] border-[1px] border-ice/30 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute w-[140px] h-[140px] md:w-[200px] md:h-[200px] border-[1px] border-transparent border-r-ice/60 rounded-full animate-[spin_10s_linear_infinite]" />
            
            {/* Center Text */}
            <h2 className="font-cormorant italic text-6xl md:text-[5rem] text-eef2f5 absolute z-10">
              W16
            </h2>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(122,174,200,0.1)_0%,transparent_50%)]" />
          </motion.div>
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <span className="font-barlow tracking-[0.3em] uppercase text-ice text-sm mb-4 block">
              {engine.subtitle}
            </span>
            <h2 className="font-cormorant text-5xl md:text-7xl mb-8 text-eef2f5">
              {engine.title}
            </h2>
            <p className="font-barlow font-light text-silver leading-relaxed text-lg mb-12 max-w-lg">
              {engine.body}
            </p>

            {/* 4-cell stat grid */}
            <div className="grid grid-cols-2 gap-8">
              {engine.stats.map((stat, idx) => (
                <div key={idx} className="border-t border-silver/10 pt-4">
                  <span className="font-barlow tracking-widest uppercase text-muted text-xs block mb-2">
                    {stat.label}
                  </span>
                  <span className="font-cormorant text-3xl text-eef2f5">
                    {stat.val}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
