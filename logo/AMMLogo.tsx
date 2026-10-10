import React from "react";

type AMMLogoProps = {
  className?: string;
  /** Rendered image height in pixels; header uses 38px. */
  height?: number;
  /** Legacy sizing option retained for compatibility. */
  size?: number;
};

export default function AMMLogo({
  className = "",
  height = 38,
  size,
}: AMMLogoProps) {
  const imageHeight = size ? (38 * size) / 132 : height;
  const scale = imageHeight / 38;

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
        flexShrink: 0,
      }}
    >
      <img
        src="/amm-logo.png"
        alt="AMM Data Solutions"
        style={{
          height: imageHeight,
          width: "auto",
          objectFit: "contain",
          display: "block",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: 2 * scale,
          top: 16 * scale,
          width: 32 * scale,
          height: 7.5 * scale,
          background: "#FFC107",
          borderRadius: 1,
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
