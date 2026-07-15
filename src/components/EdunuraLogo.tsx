import React, { useState, useId } from "react";

interface EdunuraLogoProps {
  size?: "sm" | "md" | "lg";
  hideTagline?: boolean;
  inverse?: boolean;
}

export default function EdunuraLogo({ size = "md", hideTagline = false, inverse = false }: EdunuraLogoProps) {
  const [hasFailed, setHasFailed] = useState(false);
  const maskId = useId();

  const navyColor = inverse ? "#FFFFFF" : "#0A1F33";
  const orangeColor = "#EE5A24";
  const taglineColor = inverse ? "rgba(255, 255, 255, 0.85)" : "#4A4A4A";

  const viewBox = hideTagline ? "5 0 440 148" : "5 0 440 195";
  
  // Custom height/width scaling to maintain clean aspect ratios
  const dimensions = {
    sm: hideTagline ? { width: 110, height: 37 } : { width: 125, height: 54 },
    md: hideTagline ? { width: 165, height: 55 } : { width: 190, height: 82 },
    lg: hideTagline ? { width: 250, height: 84 } : { width: 280, height: 121 },
  };

  const { width, height } = dimensions[size];

  if (!hasFailed) {
    return (
      <img
        src="https://edunura.com/images/edunura-font-02.png"
        alt="Edunura"
        width={width}
        height={height}
        referrerPolicy="no-referrer"
        onError={() => setHasFailed(true)}
        className="object-contain select-none transition-all duration-300"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          filter: inverse ? "brightness(0) invert(1)" : "none",
        }}
      />
    );
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="select-none pointer-events-none transition-all duration-300"
    >
      <defs>
        {/* Transparent Mask to create clean horizontal splits in orange letters */}
        <mask id={maskId}>
          <rect x="0" y="0" width="450" height="200" fill="white" />
          {/* Horizontal slicing cuts across the vertical orange letter stems */}
          <line x1="152" y1="115" x2="176" y2="115" stroke="black" strokeWidth="6" />
          <line x1="200" y1="115" x2="224" y2="115" stroke="black" strokeWidth="6" />
          <line x1="248" y1="115" x2="272" y2="115" stroke="black" strokeWidth="6" />
          <line x1="296" y1="115" x2="320" y2="115" stroke="black" strokeWidth="6" />
        </mask>
      </defs>

      {/* 1. Navy Letters Group: 'e', 'd', 'r', 'a' */}
      <g>
        {/* Letter 'e' */}
        <path
          d="M 74 112 A 24 24 0 1 0 69 127"
          stroke={navyColor}
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <line
          x1="26"
          y1="115"
          x2="74"
          y2="115"
          stroke={navyColor}
          strokeWidth="11"
          strokeLinecap="round"
        />

        {/* Letter 'd' */}
        <circle
          cx="110"
          cy="115"
          r="24"
          stroke={navyColor}
          strokeWidth="11"
          fill="none"
        />
        <line
          x1="134"
          y1="55"
          x2="134"
          y2="140"
          stroke={navyColor}
          strokeWidth="11"
          strokeLinecap="round"
        />

        {/* Letter 'r' */}
        <path
          d="M 344 140 L 344 90 M 344 105 A 24 24 0 0 1 368 90"
          stroke={navyColor}
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Letter 'a' */}
        <circle
          cx="405"
          cy="115"
          r="24"
          stroke={navyColor}
          strokeWidth="11"
          fill="none"
        />
        <line
          x1="429"
          y1="90"
          x2="429"
          y2="140"
          stroke={navyColor}
          strokeWidth="11"
          strokeLinecap="round"
        />
      </g>

      {/* 2. Orange Letters Group (with the horizontal stems sliced via mask): 'u', 'n', 'u' */}
      <g mask={`url(#${maskId})`}>
        {/* First 'u' */}
        <path
          d="M 164 90 L 164 116 A 24 24 0 0 0 212 116 L 212 90"
          stroke={orangeColor}
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Middle 'n' */}
        <path
          d="M 212 140 L 212 114 A 24 24 0 0 1 260 114 L 260 140"
          stroke={orangeColor}
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Second 'u' leading straight up to the bulb */}
        <path
          d="M 260 90 L 260 116 A 24 24 0 0 0 308 116 L 308 65"
          stroke={orangeColor}
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>

      {/* 3. Lightbulb Component centered at x=308 */}
      <g>
        {/* Bulb Glass Outline */}
        <path
          d="M 297 63 C 289 58, 286 50, 286 40 A 22 22 0 1 1 330 40 C 330 50, 327 58, 319 63"
          stroke={orangeColor}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Miniature 'e' inside the bulb */}
        <path
          d="M 315 40 A 7 7 0 1 0 311 45"
          stroke={orangeColor}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <line
          x1="301"
          y1="40"
          x2="315"
          y2="40"
          stroke={orangeColor}
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Screw thread/socket base */}
        <line
          x1="297"
          y1="67"
          x2="319"
          y2="67"
          stroke={orangeColor}
          strokeWidth="5"
          strokeLinecap="round"
        />
        <line
          x1="301"
          y1="73"
          x2="315"
          y2="73"
          stroke={orangeColor}
          strokeWidth="5"
          strokeLinecap="round"
        />
        <line
          x1="304"
          y1="79"
          x2="312"
          y2="79"
          stroke={orangeColor}
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* Filament Rays */}
        <line
          x1="308"
          y1="12"
          x2="308"
          y2="0"
          stroke={orangeColor}
          strokeWidth="5"
          strokeLinecap="round"
        />
        <line
          x1="288"
          y1="20"
          x2="280"
          y2="12"
          stroke={orangeColor}
          strokeWidth="5"
          strokeLinecap="round"
        />
        <line
          x1="282"
          y1="30"
          x2="270"
          y2="26"
          stroke={orangeColor}
          strokeWidth="5"
          strokeLinecap="round"
        />
        <line
          x1="288"
          y1="48"
          x2="276"
          y2="54"
          stroke={orangeColor}
          strokeWidth="5"
          strokeLinecap="round"
        />
        <line
          x1="328"
          y1="20"
          x2="336"
          y2="12"
          stroke={orangeColor}
          strokeWidth="5"
          strokeLinecap="round"
        />
        <line
          x1="334"
          y1="30"
          x2="346"
          y2="26"
          stroke={orangeColor}
          strokeWidth="5"
          strokeLinecap="round"
        />
        <line
          x1="328"
          y1="48"
          x2="340"
          y2="54"
          stroke={orangeColor}
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* Upper-Right Glow Dot */}
        <circle
          cx="331"
          cy="17"
          r="4.5"
          fill={orangeColor}
        />
      </g>

      {/* 4. Tagline & Surrounding Frame Brackets (Only rendered if hideTagline is false) */}
      {!hideTagline && (
        <g>
          {/* Left Frame Bracket */}
          <path
            d="M 80 178 L 10 178 L 10 115 L 22 115"
            stroke={orangeColor}
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Right Frame Bracket */}
          <path
            d="M 370 178 L 440 178 L 440 115 L 428 115"
            stroke={orangeColor}
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Centered 'Roots to Radiance' Text */}
          <text
            x="225"
            y="184"
            textAnchor="middle"
            fill={taglineColor}
            className="font-sans text-[16px] font-bold tracking-[0.43em]"
          >
            Roots to Radiance
          </text>
        </g>
      )}
    </svg>
  );
}
