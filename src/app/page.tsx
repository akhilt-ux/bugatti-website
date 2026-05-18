"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { cars } from "../data/cars";

import Navbar from "../components/Navbar";
import CarScrollSequence from "../components/CarScrollSequence";
import SpecsGrid from "../components/SpecsGrid";
import EngineSection from "../components/EngineSection";
import DimensionsGrid from "../components/DimensionsGrid";
import FeaturesGrid from "../components/FeaturesGrid";
import ColourSelector from "../components/ColourSelector";
import TechTable from "../components/TechTable";
import Footer from "../components/Footer";

export default function Home() {
  const [currentModelId, setCurrentModelId] = useState("tourbillon");
  const car = cars.find(c => c.id === currentModelId) || cars[0];

  // Global scroll progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Custom Cursor state
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'button' || target.tagName.toLowerCase() === 'a') {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <main className="bg-noir min-h-screen font-barlow text-eef2f5 selection:bg-ice selection:text-white">
      
      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-ice pointer-events-none z-[100] mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 2 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-ice pointer-events-none z-[100] mix-blend-difference"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 250, damping: 20, mass: 0.8 }}
      />

      {/* Global Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-ice z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentModelId}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Hero Scroll Sequence */}
          <CarScrollSequence folderPath={car.folderPath} />

          {/* Statement Section */}
          <section className="py-40 px-6 bg-noir flex justify-center items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            >
              <h2 className="font-cormorant italic text-4xl md:text-5xl lg:text-7xl text-eef2f5 leading-tight font-light">
                {car.statementSection.line1}<br />
                {car.statementSection.line2}<br />
                <span className="text-silver mt-4 block text-3xl md:text-5xl">{car.statementSection.line3}</span>
              </h2>
            </motion.div>
          </section>

          {/* Full-width Image Break */}
          <section className="w-full h-screen relative bg-noir overflow-hidden flex items-center justify-center">
            <motion.img 
              src="/images/hero-profile.jpg" 
              alt="Bugatti Profile" 
              className="w-full h-full object-cover relative z-0"
              initial={{ scale: 1 }}
              whileInView={{ scale: 1.05 }}
              transition={{ duration: 10, ease: "linear" }}
              viewport={{ once: false }}
            />
          </section>

          {/* Components mapped to grid and blocks */}
          <SpecsGrid specs={car.specs} />
          
          <EngineSection engine={car.engine} />
          
          <DimensionsGrid dimensions={car.dimensions} />
          
          <FeaturesGrid features={car.features} />
          
          <ColourSelector car={car} />
          
          <TechTable techTable={car.techTable} />

          {/* Inline CTA Section before footer */}
          <section className="py-40 px-6 bg-noir flex flex-col justify-center items-center text-center relative overflow-hidden">
            <div className="absolute top-0 w-px h-24 bg-gradient-to-b from-ice/50 to-transparent" />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="font-cormorant italic text-6xl md:text-8xl text-eef2f5 mb-12">
                Configure Yours
              </h2>
              <a 
                href="#configure" 
                className="inline-block px-12 py-4 border border-ice text-ice font-barlow tracking-[0.3em] uppercase text-sm hover:bg-ice hover:text-noir hover:shadow-[0_0_30px_rgba(122,174,200,0.4)] transition-all duration-500 rounded-[2px]"
              >
                Open Configurator
              </a>
            </motion.div>
          </section>

          <Footer cta={car.ctaSection} />

        </motion.div>
      </AnimatePresence>

    </main>
  );
}
