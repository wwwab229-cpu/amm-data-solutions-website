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
  const logoHeight = size ? (38 * size) / 132 : height;
  const wordSize = logoHeight * 0.62;
  const taglineSize = logoHeight * 0.19;

  return (
    <div
      className={className}
      role="img"
      aria-label="AMM Data Solutions"
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        flexShrink: 0,
        lineHeight: 1,
        color: "#000000",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          display: "flex",
          alignItems: "flex-end",
          fontSize: wordSize,
          fontWeight: 900,
          letterSpacing: "-0.055em",
          lineHeight: 0.88,
          whiteSpace: "nowrap",
        }}
      >
        <span
          style={{
            display: "inline-block",
            position: "relative",
            paddingBottom: logoHeight * 0.075,
            marginRight: logoHeight * 0.025,
          }}
        >
          A
          <span
            style={{
              position: "absolute",
              left: "8%",
              right: "8%",
              bottom: 0,
              height: Math.max(1.5, logoHeight * 0.075),
              background: "#FFD54F",
              borderRadius: 1,
            }}
          />
        </span>
        <span>MM</span>
      </div>
      <div
        style={{
          marginTop: logoHeight * 0.08,
          fontSize: taglineSize,
          fontWeight: 700,
          letterSpacing: "0.12em",
          lineHeight: 1,
          whiteSpace: "nowrap",
        }}
      >
        Data Solutions
      </div>
    </div>
  );
}
