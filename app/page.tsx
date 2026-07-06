"use client";

import { WeddingHero } from '@/components/wedding-hero';
import { QuranicVerse } from '@/components/quranic-verse';
import { EventDetails } from '@/components/event-details';
import { CountdownSection } from '@/components/countdown-section';
import { ClosingSection } from '@/components/closing-section';

export default function Page() {
  return (
    <div className="min-h-screen relative w-full bg-[#f5f2eb]">
      <main className="relative z-10 min-h-screen">
        <WeddingHero />
        <QuranicVerse />
        <EventDetails />
        <CountdownSection />
        <ClosingSection />
      </main>
    </div>
  );
}
