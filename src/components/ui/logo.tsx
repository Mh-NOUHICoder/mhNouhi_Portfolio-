import React from "react";

/**
 * Renders the Mh.Portfolio logo, based on the provided image.
 * Includes interconnected diamonds, inner chevrons, and a glow effect.
 */
export function Logo({
  className,
  glow = true,
}: {
  className?: string;
  glow?: boolean;
}): JSX.Element {
  
  const iconPath =
    "M 25 18 L 35 8 L 45 18 L 35 28 Z M 55 18 L 65 8 L 75 18 L 65 28 Z M 45 18 H 55 M 37.5 13 L 32.5 18 L 37.5 23 M 62.5 13 L 67.5 18 L 62.5 23";

  return (
    <svg
      viewBox="0 0 100 44"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <defs>
        {/* Modern gradient - Clean teal to cyan */}
        <linearGradient id="mhLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" /> {/* Modern cyan */}
          <stop offset="50%" stopColor="#10b981" /> {/* Fresh emerald */}
          <stop offset="100%" stopColor="#3b82f6" /> {/* Trustworthy blue */}
        </linearGradient>

        {/* Subtle shadow for depth */}
        <filter id="textShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="1" dy="1" stdDeviation="1" floodColor="#1e293b" floodOpacity="0.3"/>
        </filter>

        {/* Glow effect definition */}
        <filter id="glowEffect" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* --- Glow Effect Layer (ICON ONLY) --- */}
      {glow && (
        <path
          d={iconPath}
          stroke="url(#mhLogoGradient)"
          filter="url(#glowEffect)"
          opacity="0.8"
        />
      )}

      {/* --- Main Crisp Layer --- */}
      {/* Main Icon */}
      <path 
        d={iconPath} 
        stroke="url(#mhLogoGradient)" 
        className="drop-shadow-sm"
      />

      {/* Modern Text with gradient and subtle shadow */}
      <text
        x="50"
        y="38"
        fontSize="10"
        fontFamily="'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif"
        fontWeight="700"
        fill="url(#mhLogoGradient)"
        textAnchor="middle"
        filter="url(#textShadow)"
        className="tracking-tight"
      >
        MH.NOUHI
      </text>

      {/* Optional: Subtle decorative elements */}
      <circle cx="20" cy="36" r="1" fill="#06b6d4" opacity="0.6" />
      <circle cx="80" cy="36" r="1" fill="#3b82f6" opacity="0.6" />
    </svg>
  );
}