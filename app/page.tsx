import Image from "next/image";

export default function Home() {
  return (
    <main className="logo-stage" aria-label="AMM Data Solutions">
      <Image
        src="/amm-logo.png"
        alt="AMM Data Solutions"
        width={500}
        height={250}
        priority
        className="brand-logo"
      />
    </main>
  );
}
