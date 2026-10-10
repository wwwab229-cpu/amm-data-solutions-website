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
          left: 2 * (imageHeight / 38),
          top: 16 * (imageHeight / 38),
          width: 32 * (imageHeight / 38),
          height: 7.5 * (imageHeight / 38),
          background: "#FFC107",
          borderRadius: 1,
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
