"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 py-4 md:py-6 flex justify-between items-center ${
        scrolled 
          ? "backdrop-blur-xl bg-noir/50 border-b border-ice/10" 
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="flex items-center space-x-4">
        {/* Simple Bugatti Double Chevron approximation in SVG */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 12L12 22L22 12L12 2Z" stroke="#eef2f5" strokeWidth="1" />
          <path d="M12 6L6 12L12 18L18 12L12 6Z" stroke="#eef2f5" strokeWidth="1" />
        </svg>
        <Link 
          href="/" 
          className="font-barlow font-thin text-eef2f5 tracking-[0.4em] text-lg uppercase"
        >
          Bugatti
        </Link>
      </div>

      <div className="hidden md:flex items-center space-x-8 font-barlow font-light tracking-widest uppercase text-sm text-silver">
        <Link href="#performance" className="hover:text-eef2f5 transition-colors">Performance</Link>
        <Link href="#engine" className="hover:text-eef2f5 transition-colors">Engine</Link>
        <Link href="#technology" className="hover:text-eef2f5 transition-colors">Technology</Link>
        
        <Link 
          href="#configure" 
          className="ml-4 px-6 py-2 border border-silver/30 text-eef2f5 hover:border-ice hover:shadow-[0_0_15px_rgba(122,174,200,0.3)] transition-all duration-300 rounded-[2px]"
        >
          Configure
        </Link>
      </div>
    </motion.nav>
  );
}
