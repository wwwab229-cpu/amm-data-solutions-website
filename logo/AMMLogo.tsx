import React from 'react';

type AMMLogoProps = {
  className?: string;
  size?: number;
};

export default function AMMLogo({ className = "", size = 132 }: AMMLogoProps) {
  return (
    <div
      className={className}
      role="img"
      aria-label="AMM Data Solutions"
      style={{
        display: "flex",
        flexDirection: "column",
        lineHeight: 1,
        position: "relative",
        width: "fit-content",
      }}
    >
      <img
        src="/amm-logo.png"
        alt="AMM Data Solutions"
        style={{
          height: 38 * (size / 132),
          width: "auto",
          objectFit: "contain",
          display: "block",
        }}
      />

      {/* Single bright yellow overlay bar to cover the dark double bar */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: 2 * (size / 132),
          top: 16 * (size / 132),
          width: 32 * (size / 132),
          height: 7.5 * (size / 132),
          background: "#FFC107",
          borderRadius: 1,
          zIndex: 2,
        }}
      />
    </div>
  );
}
