"use client";

import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";

interface CarTextOverlaysProps {
  scrollYProgress: MotionValue<number>;
}

export default function CarTextOverlays({ scrollYProgress }: CarTextOverlaysProps) {
  // 4 text overlays absolutely positioned over the scroll canvas
  // Fade each in/out at scroll thresholds: 0.05→0.2, 0.25→0.4, 0.45→0.6, 0.65→0.8

  const opacity1 = useTransform(scrollYProgress, [0.0, 0.05, 0.15, 0.2], [0, 1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.25, 0.35, 0.4], [0, 1, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.4, 0.45, 0.55, 0.6], [0, 1, 1, 0]);
  const opacity4 = useTransform(scrollYProgress, [0.6, 0.65, 0.75, 0.8], [0, 1, 1, 0]);

  const y1 = useTransform(scrollYProgress, [0.0, 0.05, 0.15, 0.2], [50, 0, 0, -50]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.25, 0.35, 0.4], [50, 0, 0, -50]);
  const y3 = useTransform(scrollYProgress, [0.4, 0.45, 0.55, 0.6], [50, 0, 0, -50]);
  const y4 = useTransform(scrollYProgress, [0.6, 0.65, 0.75, 0.8], [50, 0, 0, -50]);

  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center text-center">
      {/* Overlay 1 */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute flex flex-col items-center"
      >
        <span className="font-barlow text-ice tracking-[0.4em] uppercase text-sm md:text-base mb-4">
          Molsheim · 2026 · Beyond Hypercar
        </span>
        <h1 className="font-cormorant italic text-6xl md:text-8xl lg:text-[10rem] leading-none text-eef2f5">
          Tourbillon
        </h1>
      </motion.div>

      {/* Overlay 2 */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute flex flex-col items-center mt-[50vh]"
      >
        <h2 className="font-cormorant italic text-5xl md:text-7xl lg:text-8xl text-eef2f5">
          1,800hp.
        </h2>
        <span className="font-barlow text-silver tracking-[0.3em] uppercase text-xl md:text-3xl mt-4">
          The W16 reborn.
        </span>
      </motion.div>

      {/* Overlay 3 */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute flex flex-col items-center mt-[50vh]"
      >
        <h2 className="font-cormorant italic text-5xl md:text-7xl lg:text-8xl text-eef2f5">
          9,000rpm.
        </h2>
        <span className="font-barlow text-silver tracking-[0.3em] uppercase text-xl md:text-3xl mt-4">
          Naturally aspirated.
        </span>
      </motion.div>

      {/* Overlay 4 */}
      <motion.div
        style={{ opacity: opacity4, y: y4 }}
        className="absolute flex flex-col items-center mt-[50vh]"
      >
        <h2 className="font-cormorant italic text-5xl md:text-7xl lg:text-8xl text-eef2f5">
          250 units.
        </h2>
        <span className="font-barlow text-ice tracking-[0.3em] uppercase text-xl md:text-3xl mt-4">
          Your name on one.
        </span>
      </motion.div>
    </div>
  );
}
