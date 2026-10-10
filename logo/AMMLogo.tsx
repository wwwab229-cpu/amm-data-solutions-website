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
          top: 77 * scale,
          width: 54 * scale,
          height: 13 * scale,
          background: "#FFE082",
          borderRadius: 1,
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
