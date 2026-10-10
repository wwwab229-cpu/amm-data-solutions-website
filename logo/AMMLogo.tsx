import React from 'react';

type AMMLogoProps = {
  className?: string;
  size?: number;
};

export default function AMMLogo({ className = "", size = 132 }: AMMLogoProps) {
  return (
    <div
      className={className}
      style={{ width: size, height: size * 0.36 }}
      role="img"
      aria-label="AMM Data Solutions"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 280 100"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block' }}
        aria-hidden="true"
        focusable="false"
      >
        {/* AMM - Pure Black #000000 - Extra Bold */}
        <text
          x="50%"
          y="62"
          fontFamily="Arial Black, Inter, sans-serif"
          fontWeight="900"
          fontSize="80"
          fill="#000000"
          textAnchor="middle"
          letterSpacing="-3"
          dominantBaseline="middle"
        >
          AMM
        </text>

        {/* SINGLE Bright Yellow Bar #FFC107 - ONLY ONE, No Duplicate */}
        <rect
          x="18"
          y="48"
          width="60"
          height="14"
          fill="#FFC107"
          rx="1"
        />
      </svg>
    </div>
  );
}
