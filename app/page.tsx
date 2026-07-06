"use client";

import { useState } from 'react';
import { WeddingHero } from '@/components/wedding-hero';
import { QuranicVerse } from '@/components/quranic-verse';
import { EventDetails } from '@/components/event-details';
import { CountdownSection } from '@/components/countdown-section';
import { ClosingSection } from '@/components/closing-section';

export default function Page() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { id: 0, title: "Welcome", component: <WeddingHero /> },
    { id: 1, title: "Blessings", component: <QuranicVerse /> },
    { id: 2, title: "Event Details", component: <EventDetails /> },
    { id: 3, title: "Countdown", component: <CountdownSection /> },
    { id: 4, title: "Wishes", component: <ClosingSection /> }
  ];

  const goToStep = (index: number) => {
    if (index >= 0 && index < steps.length) {
      setCurrentStep(index);
    }
  };

  return (
    <div className="min-h-screen relative w-full overflow-hidden bg-[#f5f2eb] flex flex-col justify-between">
      
      {/* 1. Main Interactive Canvas Stage */}
      <div className="relative w-full flex-1 flex items-center justify-center px-4 md:px-8 z-10">
        
        {/* Cinematic Slider Mechanism */}
        <div 
          className="w-full max-w-2xl flex transition-transform duration-700"
          style={{ 
            transform: `translateX(-${currentStep * 100}%)`,
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          {steps.map((step, idx) => (
            <div 
              key={step.id} 
              className={`w-full shrink-0 transform transition-all duration-700 px-2 ${
                currentStep === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
              }`}
            >
              {step.component}

              {/* Dynamic Quick-Navigation Menu: ONLY shows up on the first page layout */}
              {idx === 0 && (
                <div className="mt-12 p-6 border-t border-[#ad8b3a]/20 max-w-md mx-auto text-center">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#ad8b3a]/50 mb-4 font-sans font-medium">
                    Explore Invitation
                  </p>
                  <div className="flex flex-wrap justify-center gap-x-5 gap-y-3">
                    {steps.slice(1).map((menuItem, menuIdx) => (
                      <button
                        key={menuItem.id}
                        type="button"
                        onClick={() => goToStep(menuIdx + 1)}
                        className="text-xs tracking-widest font-sans uppercase text-[#ad8b3a] hover:text-[#ad8b3a]/60 active:scale-95 transition-all cursor-pointer underline underline-offset-4 decoration-[#ad8b3a]/20 hover:decoration-[#ad8b3a]"
                      >
                        {menuItem.title}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 2. Sleek Floating Dashboard Navigation */}
      <div className="w-full flex justify-between items-center px-6 md:px-12 pb-8 pt-4 z-20 max-w-3xl mx-auto">
        
        {/* Custom Arrow Back Control */}
        <button
          type="button"
          onClick={() => goToStep(currentStep - 1)}
          disabled={currentStep === 0}
          className={`flex items-center gap-2 text-xs uppercase tracking-widest font-sans transition-all py-2 px-3 ${
            currentStep === 0 
              ? 'opacity-0 pointer-events-none' 
              : 'text-[#ad8b3a] hover:opacity-70 cursor-pointer font-medium'
          }`}
        >
          ← Back
        </button>

        {/* Global Return-to-Home Hub Anchor */}
        {currentStep > 0 && (
          <button 
            type="button"
            onClick={() => goToStep(0)}
            className="text-[10px] uppercase tracking-[0.3em] font-sans text-[#ad8b3a]/50 hover:text-[#ad8b3a] transition-colors cursor-pointer"
          >
            • Main Menu •
          </button>
        )}

        {/* Custom Arrow Next Control */}
        <button
          type="button"
          onClick={() => goToStep(currentStep + 1)}
          disabled={currentStep === steps.length - 1}
          className={`flex items-center gap-2 text-xs uppercase tracking-widest font-medium font-sans py-2.5 px-5 rounded-full border border-[#ad8b3a]/30 transition-all ${
            currentStep === steps.length - 1
              ? 'opacity-0 pointer-events-none'
              : 'bg-[#ad8b3a]/5 text-[#ad8b3a] hover:bg-[#ad8b3a]/10 active:scale-95 cursor-pointer'
          }`}
        >
          {currentStep === steps.length - 2 ? 'View Details →' : 'Next →'}
        </button>
      </div>
    </div>
  );
}
