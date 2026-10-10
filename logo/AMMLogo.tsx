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
  // The source PNG is 462 × 163. Scale the overlay from that source's
  // coordinate system so the yellow A-bar stays aligned at every size.
  const imageHeight = size ? (38 * size) / 132 : height;
  const scale = imageHeight / 163;

  return (
    <div
      className={className}
      role="img"
      aria-label="AMM Data Solutions"
      style={{
        display: "inline-block",
        position: "relative",
        width: "fit-content",
        flexShrink: 0,
        lineHeight: 0,
      }}
    >
      <img
        src="/amm-logo.png"
        alt=""
        aria-hidden="true"
        style={{
          height: imageHeight,
          width: "auto",
          objectFit: "contain",
          display: "block",
        }}
      />
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          left: 18 * scale,
          top: 44 * scale,
          width: 54 * scale,
          height: 13 * scale,
          background: "#FFC107",
          borderRadius: 1,
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
