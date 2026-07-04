'use client'

import { useEffect, useState } from 'react'

const TARGET = new Date('2026-08-06T11:30:00+05:30').getTime()

function getRemaining() {
  const diff = Math.max(0, TARGET - Date.now())
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export function Countdown() {
  const [time, setTime] = useState<ReturnType<typeof getRemaining> | null>(null)

  useEffect(() => {
    setTime(getRemaining())
    const id = setInterval(() => setTime(getRemaining()), 1000)
    return () => clearInterval(id)
  }, [])

  const units = [
    { label: 'Days', value: time?.days },
    { label: 'Hours', value: time?.hours },
    { label: 'Minutes', value: time?.minutes },
    { label: 'Seconds', value: time?.seconds },
  ]

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
      {units.map((unit) => (
        <div
          key={unit.label}
          className="flex h-20 w-20 flex-col items-center justify-center rounded-md border border-border/60 bg-card/40 backdrop-blur-sm sm:h-24 sm:w-24"
        >
          <span className="font-serif text-3xl font-medium text-gold tabular-nums sm:text-4xl">
            {(unit.value ?? 0).toString().padStart(2, '0')}
          </span>
          <span className="mt-1 font-sans text-[0.6rem] uppercase tracking-[0.25em] text-muted-foreground">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  )
}
