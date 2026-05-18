"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

import CarTextOverlays from "./CarTextOverlays";

interface CarScrollSequenceProps {
  folderPath: string;
}

export default function CarScrollSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Ensure video is ready to be scrubbed
  const handleLoadedMetadata = () => {
    setIsLoaded(true);
  };

  useEffect(() => {
    if (videoRef.current && videoRef.current.readyState >= 1) {
      setIsLoaded(true);
    }
  }, []);

  // Update video currentTime based on scroll progress
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!videoRef.current || !isLoaded) return;
    
    const duration = videoRef.current.duration;
    if (duration > 0) {
      // Use requestAnimationFrame for smoother updates if needed, 
      // but direct assignment to currentTime works well for modern browsers
      videoRef.current.currentTime = latest * duration;
    }
  });

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-noir">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-noir">
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center text-eef2f5 font-barlow tracking-widest text-sm uppercase z-20">
            Loading Video Sequence...
          </div>
        )}
        
        <video
          ref={videoRef}
          src="/images/sequence.mp4"
          className={`w-full h-full object-cover relative z-10 transition-opacity duration-1000 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ filter: "brightness(0.92) contrast(1.05) saturate(0.9)" }}
          muted
          playsInline
          preload="auto"
          onLoadedMetadata={handleLoadedMetadata}
        />
        
        <div className="absolute inset-0 z-30 pointer-events-none">
          <CarTextOverlays scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </div>
  );
}
