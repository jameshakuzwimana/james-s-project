function PlaceholderSvg({ label }: { label: string }) {
  const bg1 = "#0D5E2C";
  const bg2 = "#073D1C";
  const gold = "#D4A843";
  const gold2 = "#fbbf24";
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: bg1 }} />
          <stop offset="100%" style={{ stopColor: bg2 }} />
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#bg)" />
      <circle cx="400" cy="270" r="130" fill="none" stroke={gold} strokeWidth="2" opacity="0.5" />
      <circle cx="400" cy="270" r="85" fill="none" stroke={gold} strokeWidth="2" opacity="0.4" />
      <rect x="350" y="245" width="100" height="60" rx="8" fill={gold} opacity="0.9" />
      <text x="400" y="460" textAnchor="middle" fill="#ffffff" fontFamily="Georgia, serif" fontSize="36" fontWeight="bold">
        Wisdom Instruction School
      </text>
      <text x="400" y="500" textAnchor="middle" fill={gold} fontFamily="Georgia, serif" fontSize="18" letterSpacing="3">
        NURSERY &amp; PRIMARY SCHOOL
      </text>
      <text x="400" y="545" textAnchor="middle" fill="#ffffff" opacity="0.8" fontFamily="sans-serif" fontSize="18">
        {label}
      </text>
      <text x="400" y="575" textAnchor="middle" fill="#ffffff" opacity="0.5" fontFamily="sans-serif" fontSize="13">
        Placeholder image - replace with real school photo
      </text>
    </svg>
  );
}
