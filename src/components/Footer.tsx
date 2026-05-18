"use client";

import React from "react";
import Link from "next/link";
import { Car } from "../data/cars";

interface FooterProps {
  cta: Car["ctaSection"];
}

export default function Footer({ cta }: FooterProps) {
  return (
    <footer className="bg-noir pt-32 pb-12 px-6 md:px-12 border-t border-silver/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-24">
          
          {/* Left: Brand */}
          <div className="md:col-span-4 flex flex-col">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-6">
              <path d="M12 2L2 12L12 22L22 12L12 2Z" stroke="#eef2f5" strokeWidth="1" />
              <path d="M12 6L6 12L12 18L18 12L12 6Z" stroke="#eef2f5" strokeWidth="1" />
            </svg>
            <span className="font-barlow tracking-[0.4em] uppercase text-eef2f5 text-xl mb-4 block">
              Bugatti
            </span>
            <span className="font-barlow text-silver text-sm mb-2">
              Est. 1909 · Molsheim, France
            </span>
            <p className="font-cormorant italic text-silver text-lg">
              If comparable, it is no longer Bugatti.
            </p>
          </div>

          {/* Centre: Nav Links */}
          <div className="md:col-span-3 md:col-start-6 flex flex-col space-y-4 font-barlow tracking-widest uppercase text-sm text-silver">
            <Link href="#performance" className="hover:text-ice transition-colors w-max">Performance</Link>
            <Link href="#engine" className="hover:text-ice transition-colors w-max">The Engine</Link>
            <Link href="#technology" className="hover:text-ice transition-colors w-max">Technology</Link>
            <Link href="#configure" className="hover:text-ice transition-colors w-max">Configuration</Link>
            <Link href="#" className="hover:text-ice transition-colors w-max mt-4 pt-4 border-t border-silver/10 block">Ownership</Link>
            <Link href="#" className="hover:text-ice transition-colors w-max">Heritage</Link>
          </div>

          {/* Right: CTA Form */}
          <div className="md:col-span-4 flex flex-col">
            <span className="font-barlow tracking-widest uppercase text-ice text-xs mb-3 block">
              {cta.eyebrow}
            </span>
            <h3 className="font-cormorant text-3xl md:text-4xl text-eef2f5 mb-2">
              {cta.title}
            </h3>
            <p className="font-barlow text-muted text-sm mb-8">
              {cta.subtitle}
            </p>
            
            <form className="flex flex-col space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="text" 
                placeholder="Full Name" 
                className="bg-transparent border-b border-silver/20 py-3 px-0 text-eef2f5 font-barlow focus:outline-none focus:border-ice transition-colors placeholder:text-silver/40"
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent border-b border-silver/20 py-3 px-0 text-eef2f5 font-barlow focus:outline-none focus:border-ice transition-colors placeholder:text-silver/40"
              />
              <button className="mt-4 py-4 w-full border border-ice text-ice font-barlow tracking-widest uppercase text-sm hover:bg-ice hover:text-noir transition-colors duration-300">
                {cta.buttonText}
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-silver/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-barlow text-muted text-xs tracking-widest uppercase">
            © {new Date().getFullYear()} Bugatti Automobiles S.A.S.
          </span>
          <div className="flex space-x-6 font-barlow text-muted text-xs tracking-wider uppercase">
            <Link href="#" className="hover:text-silver transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-silver transition-colors">Legal Notice</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
