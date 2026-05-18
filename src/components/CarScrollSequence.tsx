"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

import CarTextOverlays from "./CarTextOverlays";

interface CarScrollSequenceProps {
  folderPath: string;
}

export default function CarScrollSequence({ folderPath }: CarScrollSequenceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const rafRef = useRef<number | null>(null);
  const targetTimeRef = useRef<number>(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const handleLoadedMetadata = () => {
    setIsLoaded(true);
  };

  useEffect(() => {
    if (videoRef.current && videoRef.current.readyState >= 1) {
      setIsLoaded(true);
    }
  }, []);

  // RAF loop: apply the latest targetTime once per frame to avoid stacking seeks
  const scheduleSeek = useCallback(() => {
    if (rafRef.current !== null) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      const video = videoRef.current;
      if (!video || !isLoaded) return;
      const duration = video.duration;
      if (duration > 0) {
        video.currentTime = targetTimeRef.current * duration;
      }
    });
  }, [isLoaded]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    targetTimeRef.current = latest;
    scheduleSeek();
  });

  useEffect(() => {
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

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
          src="/images/sequence_seek.mp4"
          className={`w-full h-full object-cover relative z-10 transition-opacity duration-1000 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ filter: "brightness(0.92) contrast(1.05) saturate(0.9)" }}
          muted
          playsInline
          preload="auto"
          onLoadedMetadata={handleLoadedMetadata}
          onCanPlayThrough={() => setIsLoaded(true)}
        />

        <div className="absolute inset-0 z-30 pointer-events-none">
          <CarTextOverlays scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </div>
  );
}