"use client";

type AMMLogoProps = {
  className?: string;
  height?: number;
  label?: string;
};

export default function AMMLogo({
  className,
  height = 48,
  label = "AMM Data Solutions",
}: AMMLogoProps) {
  return (
    <svg
      className={className}
      width="132"
      height={height}
      viewBox="0 0 280 100"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={label}
      focusable="false"
    >
      {/* AMM - Pure Black */}
      <text
        x="50%"
        y="60"
        fontFamily="Arial Black, Inter, sans-serif"
        fontWeight="900"
        fontSize="78"
        fill="#000000"
        textAnchor="middle"
        letterSpacing="-2"
      >
        AMM
      </text>

      {/* SINGLE Yellow Bar - Bright #FFC107 - Only ONE, no duplicate */}
      <rect x="20" y="48" width="58" height="14" fill="#FFC107" />
    </svg>
  );
}
