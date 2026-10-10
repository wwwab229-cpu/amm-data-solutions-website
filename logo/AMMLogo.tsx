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

  const underline = {
    position: "absolute" as const,
    left: 27 * scale,
    top: 77 * scale,
    width: 114 * scale,
    height: 27 * scale,
    clipPath: "polygon(10.5% 0, 90.4% 0, 100% 100%, 0 100%)",
    pointerEvents: "none" as const,
  };

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
      {/* First mask removes the original baked-in bar/shadow; second shape draws one clean underline. */}
      <div
        aria-hidden="true"
        style={{
          ...underline,
          left: 24 * scale,
          top: 74 * scale,
          width: 120 * scale,
          height: 33 * scale,
          clipPath: "polygon(12.5% 0, 88.3% 0, 100% 100%, 0 100%)",
          background: "#FFFFFF",
          zIndex: 2,
        }}
      />
      <div
        aria-hidden="true"
        style={{
          ...underline,
          background: "#FFD329",
          zIndex: 3,
        }}
      />
    </div>
  );
}
