import React from "react";

type AMMLogoProps = {
  className?: string;
  height?: number;
  size?: number;
};

// Logo image lives in /public/amm-logo.png (transparent PNG, 900x470)
const RATIO = 900 / 470;

export default function AMMLogo({
  className = "",
  height = 38,
  size,
}: AMMLogoProps) {
  const h = size ? Math.round((38 * size) / 132) : height;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={className}
      src="/amm-logo.png"
      alt="AMM Data Solutions"
      width={Math.round(h * RATIO)}
      height={h}
      decoding="async"
    />
  );
}
