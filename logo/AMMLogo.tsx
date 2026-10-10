import React from "react";

type AMMLogoProps = {
  className?: string;
  height?: number;
  size?: number;
};

export default function AMMLogo({
  className = "",
  height = 38,
  size,
}: AMMLogoProps) {
  const fontSize = size ? (38 * size) / 132 : height;

  return (
    <div
      className={className}
      role="img"
      aria-label="AMM Data Solutions"
      style={{
        display: "inline-flex",
        alignItems: "baseline",
        gap: fontSize * 0.22,
        whiteSpace: "nowrap",
        lineHeight: 1,
        flexShrink: 0,
        color: "#000000",
        fontFamily: "Manrope, DM Sans, Arial, sans-serif",
      }}
    >
      <span
        style={{
          fontSize,
          fontWeight: 800,
          letterSpacing: "-0.055em",
        }}
      >
        AMM
      </span>
      <span
        style={{
          fontSize: fontSize * 0.43,
          fontWeight: 700,
          letterSpacing: "-0.025em",
        }}
      >
        Data Solutions
      </span>
    </div>
  );
}
