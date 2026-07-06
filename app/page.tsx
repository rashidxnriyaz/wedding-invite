"use client";

import { useState } from 'react';
import { WeddingHero } from '@/components/wedding-hero';
import { QuranicVerse } from '@/components/quranic-verse';
import { EventDetails } from '@/components/event-details';
import { CountdownSection } from '@/components/countdown-section';
import { ClosingSection } from '@/components/closing-section';

export default function Page() {
  const [currentStep, setCurrentStep] = useState(0);

  // Array of your existing presentation components
  const steps = [
    { id: 0, component: <WeddingHero /> },
    { id: 1, component: <QuranicVerse /> },
    { id: 2, component: <EventDetails /> },
    { id: 3, component: <CountdownSection /> },
    { id: 4, component: <ClosingSection /> }
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen relative w-full overflow-hidden bg-[#f5f2eb] flex flex-col justify-between">
      {/* Decorative Slide Indicator Counter at the top */}
      <div className="w-full text-center pt-6 z-20 text-xs tracking-[0.2em] uppercase text-[#ad8b3a]/60 font-sans">
        {currentStep + 1} / {steps.length}
      </div>

      {/* Main Interactive Stage Container */}
      <div className="relative w-full flex-1 flex items-center justify-center px-4 md:px-8 z-10 transition-all duration-500 ease-in-out">
        <div key={currentStep} className="w-full max-w-2xl animate-fade-up">
          {steps[currentStep].component}
        </div>
      </div>

      {/* Elegant Fixed Bottom Navigation Controls */}
      <div className="w-full flex justify-between items-center px-6 md:px-12 pb-8 pt-4 z-20 max-w-3xl mx-auto">
        {/* Back Arrow Button */}
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          className={`flex items-center gap-2 text-xs uppercase tracking-widest transition-all font-sans py-2 px-3 ${
            currentStep === 0 
              ? 'opacity-0 pointer-events-none' 
              : 'text-[#ad8b3a]/70 hover:text-[#ad8b3a] cursor-pointer'
          }`}
        >
          ← Back
        </button>

        {/* Next / Finish Button */}
        <button
          onClick={nextStep}
          disabled={currentStep === steps.length - 1}
          className={`flex items-center gap-2 text-xs uppercase tracking-widest font-medium transition-all font-sans py-2.5 px-5 rounded-full border border-[#ad8b3a]/30 ${
            currentStep === steps.length - 1
              ? 'bg-[#ad8b3a]/10 text-[#ad8b3a]/40 cursor-not-allowed opacity-50'
              : 'bg-[#ad8b3a]/5 text-[#ad8b3a] hover:bg-[#ad8b3a]/10 active:scale-95 cursor-pointer'
          }`}
        >
          {currentStep === steps.length - 2 ? 'View Final Details' : currentStep === steps.length - 1 ? 'End' : 'Next →'}
        </button>
      </div>
    </div>
  );
}
