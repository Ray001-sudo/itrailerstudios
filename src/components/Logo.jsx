import React from 'react'

/**
 * iTrailerStudios inline SVG logo.
 * Renders as a transparent vector — no background, no borders.
 * Uses the site's teal accent (#1db8b1) for the aperture icon dot
 * and inherits currentColor for the text so it works on both
 * light and dark navbar backgrounds.
 */
export default function Logo({ className = '' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 260 48"
      height="40"
      width="auto"
      className={className}
      aria-label="iTrailerStudios"
      role="img"
    >
      {/* ── Camera aperture icon ─────────────────────────────── */}
      <g transform="translate(0, 4)">
        {/* Outer ring */}
        <circle cx="20" cy="20" r="18" fill="none" stroke="#1db8b1" strokeWidth="2.5" />
        {/* Aperture blades */}
        <line x1="20" y1="2"  x2="20" y2="10" stroke="#1db8b1" strokeWidth="2" strokeLinecap="round" />
        <line x1="20" y1="30" x2="20" y2="38" stroke="#1db8b1" strokeWidth="2" strokeLinecap="round" />
        <line x1="2"  y1="20" x2="10" y2="20" stroke="#1db8b1" strokeWidth="2" strokeLinecap="round" />
        <line x1="30" y1="20" x2="38" y2="20" stroke="#1db8b1" strokeWidth="2" strokeLinecap="round" />
        <line x1="7.5"  y1="7.5"  x2="13.5" y2="13.5" stroke="#1db8b1" strokeWidth="2" strokeLinecap="round" />
        <line x1="26.5" y1="26.5" x2="32.5" y2="32.5" stroke="#1db8b1" strokeWidth="2" strokeLinecap="round" />
        <line x1="32.5" y1="7.5"  x2="26.5" y2="13.5" stroke="#1db8b1" strokeWidth="2" strokeLinecap="round" />
        <line x1="13.5" y1="26.5" x2="7.5"  y2="32.5" stroke="#1db8b1" strokeWidth="2" strokeLinecap="round" />
        {/* Centre lens dot */}
        <circle cx="20" cy="20" r="5" fill="#1db8b1" />
      </g>

      {/* ── Wordmark ─────────────────────────────────────────── */}
      {/* Italic "i" in teal */}
      <text
        x="48"
        y="36"
        fontFamily="'Montserrat', 'Archivo', sans-serif"
        fontWeight="800"
        fontStyle="italic"
        fontSize="28"
        fill="#1db8b1"
        letterSpacing="-0.5"
      >
        i
      </text>
      {/* "TrailerStudios" in white / currentColor */}
      <text
        x="61"
        y="36"
        fontFamily="'Montserrat', 'Archivo', sans-serif"
        fontWeight="700"
        fontSize="22"
        fill="currentColor"
        letterSpacing="-0.3"
      >
        TrailerStudios
      </text>
    </svg>
  )
}
