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
        /* Color Coordinates */
        forceAnimate: true,
        colorMode: "lerpGradient",
        backgroundColor: 0xf5f2eb,
        color1: 0xdec08a,
        color2: 0xc8af7e,
        birdSize: 0.36,
        wingSpan: 16.00,
        quantity: 5.00,            
        /* Fixed Refresh-Rate Engine Override */
        frameLimit: 60,            // Locks high-refresh 120Hz screens down to a standard speed pace
        speedLimit: 1.00,          // Reset to 1.00 so the calculation stays stable under the lock
        separation: 50.00,         
        cohesion: 15.00,           
        alignment: 10.00           
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

      <div ref={vantaRef} className="fixed inset-0 w-full h-full min-h-screen">
        <div className="absolute inset-0 overflow-y-auto w-full h-full z-10">
          <main className="relative bg-transparent min-h-screen">
            <WeddingHero />
            <QuranicVerse />
            <EventDetails />
            <CountdownSection />
            <ClosingSection />
          </main>
        </div>
      </div>
    </>
  );
}
