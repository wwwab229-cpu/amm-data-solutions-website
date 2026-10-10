"use client";

type AMMLogoProps = {
  className?: string;
  height?: number;
  label?: string;
};

export default function AMMLogo({
  className,
  height = 38,
  label = "AMM Data Solutions",
}: AMMLogoProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 180 70"
      height={height}
      role="img"
      aria-label={label}
      focusable="false"
    >
      <text
        x="4"
        y="59"
        fill="#000"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="58"
        fontWeight="900"
        letterSpacing="-4"
      >
        AMM
      </text>
      <rect x="18" y="44" width="54" height="13" fill="#FFC107" />
    </svg>
  );
}
