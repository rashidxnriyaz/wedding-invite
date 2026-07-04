export function Ornament({ className = '' }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center gap-3 text-gold/70 ${className}`}
      aria-hidden="true"
    >
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold/60 sm:w-24" />
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        className="shrink-0"
      >
        <path
          d="M12 2l2.4 6.9L21 12l-6.6 3.1L12 22l-2.4-6.9L3 12l6.6-3.1z"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinejoin="round"
        />
      </svg>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold/60 sm:w-24" />
    </div>
  )
}
