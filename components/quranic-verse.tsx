import { Ornament } from '@/components/ornament'
import { Reveal } from '@/components/reveal'

export function QuranicVerse() {
  return (
    <section className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <Ornament className="mb-12" />
        </Reveal>

        <Reveal delay={100}>
          <p className="font-arabic text-2xl leading-loose text-gold sm:text-4xl sm:leading-loose">
            وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا
            لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
          </p>
        </Reveal>

        <Reveal delay={200}>
          <p className="mx-auto mt-10 max-w-2xl font-serif text-xl italic leading-relaxed text-foreground/90 text-pretty sm:text-2xl">
            &ldquo;And among His signs is this, that He created for you mates from
            among yourselves, that you may dwell in tranquillity with them, and
            He has put love and mercy between your hearts.&rdquo;
          </p>
        </Reveal>

        <Reveal delay={300}>
          <p className="mt-6 font-sans text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Surah Ar-Rum &middot; 30:21
          </p>
        </Reveal>
      </div>
    </section>
  )
}
