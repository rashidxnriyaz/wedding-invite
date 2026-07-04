import Image from 'next/image'
import { Ornament } from '@/components/ornament'
import { Reveal } from '@/components/reveal'

export function ClosingSection() {
  return (
    <footer className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <Image
            src="/gold-divider.png"
            alt=""
            width={220}
            height={40}
            className="mx-auto opacity-80"
          />
        </Reveal>

        <Reveal delay={100}>
          <p className="mt-10 font-arabic text-xl text-gold/90 sm:text-2xl">
            بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا
          </p>
          <p className="mt-3 font-sans text-xs uppercase tracking-[0.25em] text-muted-foreground">
            May Allah bless you both and unite you in goodness
          </p>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-14 font-serif text-2xl italic leading-relaxed text-foreground/90 text-pretty sm:text-3xl">
            Your presence and prayers would be the greatest blessing on this
            joyous occasion.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <Ornament className="mt-14" />
          <p className="mt-10 font-sans text-xs uppercase tracking-[0.4em] text-muted-foreground">
            With love &amp; heartfelt duas
          </p>
          <p className="mt-4 font-serif text-3xl font-light text-gold">
            From Both Families
          </p>
        </Reveal>

        <Reveal delay={400}>
          <p className="mt-16 font-serif text-lg text-foreground/70">
            Rashid <span className="text-gold">&amp;</span> Alia
          </p>
          <p className="mt-1 font-sans text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">
            6 &middot; 08 &middot; 2026
          </p>
        </Reveal>
      </div>
    </footer>
  )
}
