"use client";

import { useEffect, useRef } from 'react';
import Script from 'next/script';
import { WeddingHero } from '@/components/wedding-hero';
import { QuranicVerse } from '@/components/quranic-verse';
import { EventDetails } from '@/components/event-details';
import { CountdownSection } from '@/components/countdown-section';
import { ClosingSection } from '@/components/closing-section';

declare global {
  interface Window {
    VANTA: any;
  }
}

export default function Page() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  const initVanta = () => {
    if (typeof window !== "undefined" && window.VANTA && vantaRef.current && !vantaEffect.current) {
      vantaEffect.current = window.VANTA.BIRDS({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        /* Custom Website Color Tuning */
        backgroundColor: 0xf5f2eb, // Exact cozy ivory template backdrop
        color1: 0x8a6d26,          // Deep, rich gold birds for sharp contrast
        color2: 0xb89842,          // Soft accent gold birds
        birdSize: 1.20,
        quantity: 4.00,
        wingSpan: 24.00,
        speedLimit: 3.50,
        separation: 25.00,
        alignment: 20.00,
        cohesion: 20.00
      });
    }
  };

  useEffect(() => {
    initVanta();
    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);

  return (
    <>
      {/* Dynamic script injections for Vanta.js animation */}
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" 
        strategy="afterInteractive"
        onLoad={initVanta}
      />
      <Script 
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js" 
        strategy="afterInteractive"
        onLoad={initVanta}
      />

      {/* The main page target wrapper container */}
      <div ref={vantaRef} className="min-h-screen relative w-full">
        <main className="relative z-10 bg-transparent">
          <WeddingHero />
          <QuranicVerse />
          <EventDetails />
          <CountdownSection />
          <ClosingSection />
        </main>
      </div>
    </>
  );
}
