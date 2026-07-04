import { Moon, Clock, MapPin, UtensilsCrossed } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { Ornament } from '@/components/ornament'

const events = [
  {
    icon: Moon,
    tag: 'The Nikah',
    title: 'Marriage Ceremony',
    time: '11:30 AM',
    venue: 'New Masjid',
    note: 'Kindly join us for the solemnisation of the marriage.',
    map: 'https://www.google.com/maps/search/?api=1&query=New+Masjid',
  },
  {
    icon: UtensilsCrossed,
    tag: 'The Walima',
    title: 'Wedding Lunch',
    time: 'Followed by the Nikah',
    venue: 'Noor Mahal, Lalpet',
    note: 'Please stay and celebrate with us over lunch.',
    map: 'https://www.google.com/maps/search/?api=1&query=Noor+Mahal+Lalpet',
  },
]

export function EventDetails() {
  return (
    <section className="relative px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <p className="font-sans text-xs uppercase tracking-[0.4em] text-muted-foreground">
            Join us in celebration
          </p>
          <h2 className="mt-4 font-serif text-4xl font-light text-foreground sm:text-5xl">
            The <span className="text-gold">Celebrations</span>
          </h2>
          <Ornament className="mt-8" />
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {events.map((event, i) => {
            const Icon = event.icon
            return (
              <Reveal key={event.title} delay={i * 150}>
                <article className="flex h-full flex-col items-center rounded-lg border border-border/60 bg-card/40 p-8 text-center backdrop-blur-sm transition-colors hover:border-gold/50 sm:p-10">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 text-gold">
                    <Icon className="h-7 w-7" strokeWidth={1.25} />
                  </span>
                  <p className="mt-6 font-sans text-[0.65rem] uppercase tracking-[0.35em] text-gold">
                    {event.tag}
                  </p>
                  <h3 className="mt-3 font-serif text-3xl font-light text-foreground">
                    {event.title}
                  </h3>

                  <div className="mt-6 flex flex-col items-center gap-3 text-muted-foreground">
                    <span className="flex items-center gap-2 font-serif text-lg text-foreground/90">
                      <Clock className="h-4 w-4 text-gold" strokeWidth={1.5} />
                      {event.time}
                    </span>
                    <span className="flex items-center gap-2 font-serif text-lg text-foreground/90">
                      <MapPin className="h-4 w-4 text-gold" strokeWidth={1.5} />
                      {event.venue}
                    </span>
                  </div>

                  <p className="mt-6 max-w-xs font-sans text-sm leading-relaxed text-muted-foreground">
                    {event.note}
                  </p>

                  <a
                    href={event.map}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 border-b border-gold/50 pb-1 font-sans text-xs uppercase tracking-[0.25em] text-gold transition-colors hover:border-gold hover:text-gold-soft"
                  >
                    View Location
                  </a>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
