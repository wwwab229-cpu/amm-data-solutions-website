import Link from "next/link";

type LogoProps = { className?: string };

export function Logo({ className = "" }: LogoProps) {
  return <Link href="/" className={`brand-mark ${className}`.trim()} aria-label="AMM Data Solutions home"><span className="brand-mark__name">AMM</span><span className="brand-mark__descriptor">Data Solutions</span></Link>;
}
