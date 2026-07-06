import { WeddingHero } from '@/components/wedding-hero'
import { QuranicVerse } from '@/components/quranic-verse'
import { EventDetails } from '@/components/event-details'
import { CountdownSection } from '@/components/countdown-section'
import { ClosingSection } from '@/components/closing-section'

export default function Page() {
  return (
    <main className="w-full min-h-screen">
      <WeddingHero />
      <QuranicVerse />
      <EventDetails />
      <CountdownSection />
      <ClosingSection />
    </main>
  )
}
