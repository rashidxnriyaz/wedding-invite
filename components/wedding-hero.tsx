import Image from 'next/image'
import { Ornament } from '@/components/ornament'

export function WeddingHero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20">
      <Image
        src="/hero-pattern.png"
        alt=""
        fill
        priority
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background" />

      <div className="relative z-10 flex w-full max-w-2xl flex-col items-center text-center">
        <p className="animate-fade-up font-arabic text-xl text-gold/90 sm:text-2xl">
          بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </p>
        <p
          className="mt-3 animate-fade-up font-sans text-[0.65rem] uppercase tracking-[0.35em] text-muted-foreground"
          style={{ animationDelay: '150ms' }}
        >
          In the name of Allah, the Most Gracious, the Most Merciful
        </p>

        <div
          className="mt-10 flex animate-fade-up items-center justify-center gap-2 text-gold"
          style={{ animationDelay: '300ms' }}
        >
          <span className="h-px w-10 bg-gold/40" />
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            className="animate-float"
            aria-hidden="true"
          >
            <path
              d="M12 3c2.2 1.8 3.3 4 3.3 6.5V20H8.7V9.5C8.7 7 9.8 4.8 12 3z"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinejoin="round"
            />
            <circle cx="12" cy="7.5" r="0.9" fill="currentColor" />
          </svg>
          <span className="h-px w-10 bg-gold/40" />
        </div>

        <p
          className="mt-8 animate-fade-up font-sans text-xs uppercase tracking-[0.4em] text-muted-foreground"
          style={{ animationDelay: '400ms' }}
        >
          Together with their families
        </p>

        <h1
          className="mt-6 animate-fade-up font-script leading-[0.9] text-gold"
          style={{ animationDelay: '500ms' }}
        >
          <span className="block text-8xl sm:text-9xl">Rashid</span>
          <span className="my-1 block font-serif text-3xl italic text-gold/70 sm:text-4xl">
            &amp;
          </span>
          <span className="block text-8xl sm:text-9xl">Alia</span>
        </h1>

        <div
          className="mt-10 w-full animate-fade-up"
          style={{ animationDelay: '650ms' }}
        >
          <Ornament />
        </div>

        <p
          className="mt-8 animate-fade-up font-serif text-2xl tracking-wide text-foreground sm:text-3xl"
          style={{ animationDelay: '750ms' }}
        >
          Thursday, 6th August 2026
        </p>
        <p
          className="mt-2 animate-fade-up font-sans text-sm tracking-[0.2em] text-muted-foreground"
          style={{ animationDelay: '800ms' }}
        >
          11:30 AM &middot; New Masjid
        </p>
      </div>
    </section>
  )
}
