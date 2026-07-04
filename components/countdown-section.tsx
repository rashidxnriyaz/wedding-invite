import Image from 'next/image'
import { Countdown } from '@/components/countdown'
import { Reveal } from '@/components/reveal'

export function CountdownSection() {
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:py-28">
      <Image
        src="/hero-pattern.png"
        alt=""
        fill
        className="object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-background/80" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="font-sans text-xs uppercase tracking-[0.4em] text-muted-foreground">
            Counting down to our
          </p>
          <h2 className="mt-4 font-serif text-4xl font-light text-foreground sm:text-5xl">
            Blessed <span className="text-gold">Day</span>
          </h2>
        </Reveal>
        <Reveal delay={150} className="mt-12">
          <Countdown />
        </Reveal>
      </div>
    </section>
  )
}
