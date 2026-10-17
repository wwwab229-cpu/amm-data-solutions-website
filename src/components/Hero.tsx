export function Hero() {
  return (
    <section className="hero hero--cinematic section-shell" aria-labelledby="hero-title">
      <div className="hero-frame">
        <span className="hero-frame__corner hero-frame__corner--tl" aria-hidden="true" />
        <span className="hero-frame__corner hero-frame__corner--tr" aria-hidden="true" />
        <span className="hero-frame__corner hero-frame__corner--bl" aria-hidden="true" />
        <span className="hero-frame__corner hero-frame__corner--br" aria-hidden="true" />
        <div className="hero-frame__grid" aria-hidden="true" />
        <div className="hero__copy">
          <p className="eyebrow hero__eyebrow">LET’S MAKE SOLUTIONS</p>
          <div className="hero-brand-intro" aria-label="AMM Data Solutions">
            <img className="hero-brand-intro__logo" src="/amm-logo.svg" alt="AMM Data Solutions" />
          </div>
          <p className="hero__kicker">SMARTER SYSTEMS. LESS MANUAL WORK.</p>
          <h1 id="hero-title">Make your business <span>work smarter.</span></h1>
          <p className="hero__description">AI automation, connected business systems and creative digital solutions — built to reduce repetitive work and help your business move forward.</p>
          <div className="hero__capabilities" aria-label="Our capabilities">
            <span><i aria-hidden="true">✳</i> AI &amp; Automation</span>
            <span><i aria-hidden="true">⌘</i> Connected Systems</span>
            <span><i aria-hidden="true">↗</i> Digital Growth</span>
          </div>
          <div className="hero__meta"><span>AMM DATA SOLUTIONS</span><span>BUILT FOR WHAT’S NEXT</span></div>
        </div>
        <div className="hero__visual" aria-label="Abstract connected systems visual" role="img">
          <div className="hero-visual__halo hero-visual__halo--outer" />
          <div className="hero-visual__halo hero-visual__halo--inner" />
          <div className="hero-visual__track hero-visual__track--one" />
          <div className="hero-visual__track hero-visual__track--two" />
          <div className="hero-visual__core"><img src="/amm-logo.svg" alt="" /><span>CONNECTED SYSTEMS</span></div>
          <span className="hero-visual__node hero-visual__node--ai">✳ <b>AI</b></span>
          <span className="hero-visual__node hero-visual__node--data">⌘ <b>DATA</b></span>
          <span className="hero-visual__node hero-visual__node--growth">↗ <b>GROWTH</b></span>
          <span className="hero-visual__spark hero-visual__spark--one" />
          <span className="hero-visual__spark hero-visual__spark--two" />
          <span className="hero-visual__spark hero-visual__spark--three" />
        </div>
      </div>
      <div className="hero__below">
        <a className="button button--header-pill hero__explore" href="#services">Explore our services <span aria-hidden="true">↘</span></a>
        <span className="hero__below-note">ONE CONNECTED APPROACH TO DIGITAL WORK</span>
      </div>
    </section>
  );
}
