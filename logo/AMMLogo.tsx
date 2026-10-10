import React from "react";

type AMMLogoProps = {
  className?: string;
  /** Legacy prop retained for existing page usages. */
  height?: number;
  /** Overall logo width in pixels. */
  size?: number;
};

export default function AMMLogo({
  className = "",
  height,
  size,
}: AMMLogoProps) {
  const width = size ?? (height ? (height / 72) * 240 : 156);

  return (
    <svg
      className={`ammLogoVector ${className}`.trim()}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 240 72"
      width={width}
      role="img"
      aria-label="AMM Data Solutions"
      focusable="false"
    >
      <title>AMM Data Solutions</title>
      {/* A is custom drawn so the yellow crossbar stays within its legs. */}
      <path d="M8 57 L29 5 L50 57 H38 L29 33 L20 57 Z" fill="#000000" />
      <path d="M20.5 43.5 L37.5 43.5 L40.5 50.5 H17.5 Z" fill="#FFC107" />
      <path d="M57 57 V5 H70 L85 27 L100 5 H113 V57 H101 V25 L85 48 L69 25 V57 Z" fill="#000000" />
      <path d="M120 57 V5 H133 L148 27 L163 5 H176 V57 H164 V25 L148 48 L132 25 V57 Z" fill="#000000" />
      <text
        x="91"
        y="69"
        fill="#000000"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="13"
        fontWeight="600"
        letterSpacing="2.2"
        textAnchor="middle"
      >
        DATA SOLUTIONS
      </text>
    </svg>
  );
}
