/* The HADE wordmark: an outlined varsity "1" built into the H.
   Rendered as code so it stays sharp at any size and inherits
   the text color around it (black on white, white on black). */

export default function Logo({ className = "h-8" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center ${className}`}
      aria-label="HADE"
      role="img"
    >
      <svg viewBox="0 0 340 100" className="h-full w-auto" aria-hidden="true">
        {/* Outlined varsity "1" — forms the left stem of the H */}
        <g transform="rotate(-7 40 50)">
          <path
            d="M34 12 L62 12 L62 70 L74 70 L74 90 L22 90 L22 70 L40 70 L40 38 L27 47 L16 32 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="7"
            strokeLinejoin="miter"
          />
        </g>
        {/* HADE in the display face */}
        <text
          x="80"
          y="88"
          fontFamily="var(--font-display)"
          fontSize="96"
          fill="currentColor"
          letterSpacing="1"
        >
          HADE
        </text>
      </svg>
    </span>
  );
}
