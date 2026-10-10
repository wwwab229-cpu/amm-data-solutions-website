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
  const imageHeight = size ? (38 * size) / 132 : height;
  const scale = imageHeight / 163;

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
          left: 27 * scale,
          top: 77 * scale,
          width: 114 * scale,
          height: 27 * scale,
          clipPath: "polygon(10.5% 0, 90.4% 0, 100% 100%, 0 100%)",
          background: "#FFE082",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
