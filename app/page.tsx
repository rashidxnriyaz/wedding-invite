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
        /* Subtle, Softened Color & Motion Settings */
        backgroundColor: 0xf5f2eb, // Cozy ivory backdrop
        color1: 0xd0bf9d,          // Very soft, muted champagne gold
        color2: 0xe2d9c5,          // Delicate accent gold that melts into the ivory
        birdSize: 0.60,            // Small, delicate birds
        quantity: 4.00,            
        wingSpan: 18.00,           
        speedLimit: 0.75,          // Cut by half for an ultra-slow, peaceful flight
        separation: 30.00,         // Slightly more space between them
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
