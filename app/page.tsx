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
        /* Layout & Color Fixes */
        forceAnimate: true,        // Force initial render immediately on load
        colorMode: "lerpGradient", // Fixes the white color bug by stripping out random white highlights
        backgroundColor: 0xf5f2eb, // Elegant ivory template backdrop
        color1: 0xdec08a,          // Warm, muted darker gold/ivory shadow tint
        color2: 0xc8af7e,          // Deep accent shade so birds are perfectly visible
        birdSize: 0.36,            // Your customized sweet-spot size
        quantity: 4.00,            
        wingSpan: 16.00,           
        speedLimit: 1.75,          // Slower glide speed
        separation: 40.00,         
        alignment: 20.00,
        cohesion: 20.00
      });
    }
  };

  useEffect(() => {
    initVanta();
    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy(); // Proper page hook cleanup
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

      {/* Fixed positioning ensures the viewport initializes instantly without layout shifting */}
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
