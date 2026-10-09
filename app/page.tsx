"use client";

import { useState } from "react";

const services = [
  { n: "01", slug: "ai-automation-business-systems", title: "AI Automation & Business Systems", plain: "Make repetitive work easier.", body: "Connect everyday tasks so your team spends less time copying information and chasing updates.", examples: ["Automated admin tasks", "Customer inquiry workflows", "CRM and follow-up setup"] },
  { n: "02", slug: "website-ecommerce-solutions", title: "Website & E-commerce Solutions", plain: "Give your business a better website.", body: "Show customers what you offer and make it easy for them to contact you or browse your products.", examples: ["Business websites", "Online stores", "Landing pages and product catalogs"] },
  { n: "03", slug: "data-analytics-business-intelligence", title: "Data Analytics & Business Intelligence", plain: "Make your information useful.", body: "Organize spreadsheets and reports so important business information is easier to understand.", examples: ["Excel and Sheets automation", "Simple dashboards", "Business and market reports"] },
  { n: "04", slug: "seo-ai-search-visibility", title: "SEO & AI Search Visibility", plain: "Help people find your business online.", body: "Improve your website structure and content so search engines can better understand your business.", examples: ["Website SEO checks", "Page titles and content", "Search indexing support"] },
  { n: "05", slug: "lead-generation-growth-systems", title: "Lead Generation & Growth Systems", plain: "Find and organize potential customers.", body: "Research relevant businesses and set up a clearer way to track prospects and next steps.", examples: ["B2B prospect research", "Organized lead lists", "Sales follow-up systems"] },
  { n: "06", slug: "digital-marketing-creative-solutions", title: "Digital Marketing & Creative Solutions", plain: "Keep your brand active and consistent.", body: "Plan useful social content and create marketing materials that communicate your offer clearly.", examples: ["Social media content", "Ad and campaign designs", "Marketing activity reports"] },
];

const process = [
  ["01", "Tell us your goal", "Explain what you want to improve and how you work today."],
  ["02", "Agree on the plan", "We confirm the scope, deliverables, timeline and practical requirements."],
  ["03", "Build and review", "We create the agreed solution, check the work and explain the handover."],
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqs = [
    ["What does AMM Data Solutions do?", "We help businesses improve their websites, everyday workflows, business data, online visibility, lead handling and digital marketing."],
    ["Do you work with businesses outside Pakistan?", "Yes. We welcome inquiries from Pakistan and international markets. The scope, timeline and working arrangements are confirmed for each project."],
    ["How much does a project cost?", "Cost depends on the work and its requirements. Contact us with a short description and we can discuss a suitable scope before quoting."],
  ];

  return <main>
    <nav className="nav" aria-label="Main navigation">
      <a className="brand" href="/" aria-label="AMM Data Solutions home"><strong>AMM</strong><span>DATA SOLUTIONS</span></a>
      <div className="navlinks"><a href="#services">Services</a><a href="#how">How it works</a><a href="#about">About</a></div>
      <a className="navcta" href="#contact">Contact us <span>↗</span></a>
    </nav>

    <section className="hero">
      <div className="heroInner">
        <div className="eyebrow"><span/> DIGITAL SOLUTIONS FOR GROWING BUSINESSES</div>
        <h1>Make business<br/><em>work better.</em></h1>
        <p className="heroText">From better websites to simpler workflows, we help businesses get everyday work organized and build a stronger online presence.</p>
        <div className="heroActions"><a className="primary" href="#services">Explore our services <span>→</span></a><a className="textLink" href="#contact">Tell us what you need</a></div>
        <div className="heroMeta"><span><i/> Clear, practical solutions</span><span><i/> Pakistan & worldwide</span></div>
      </div>
      <div className="heroArt" aria-hidden="true">
        <div className="artHalo"></div><div className="artCard artMain"><div className="artTop"><span>BUSINESS WORKSPACE</span><span className="artStatus">● READY</span></div><div className="artLogo">AMM<span>DATA SOLUTIONS</span></div><div className="artRule"></div><div className="artRows"><span>Website</span><b>Clear & useful</b><span>Workflows</span><b>Better organized</b><span>Business data</span><b>Easier to follow</b></div></div>
        <div className="artChip chipOne"><span>↗</span> Digital presence</div><div className="artChip chipTwo"><span>✓</span> Organized systems</div><div className="artDot dotOne"></div><div className="artDot dotTwo"></div>
      </div>
    </section>

    <section className="intro section">
      <div className="eyebrow">A PRACTICAL APPROACH</div>
      <h2>Good technology should make things <span>simpler.</span></h2>
      <p>We start with the business problem, then recommend the right work — without unnecessary complexity or confusing jargon.</p>
    </section>

    <section id="services" className="services section">
      <div className="sectionHead"><div><div className="eyebrow">WHAT WE CAN HELP WITH</div><h2>Our services</h2></div><p>Six clear areas. Choose the one closest to what your business needs.</p></div>
      <div className="serviceGrid">{services.map(s=><a className="serviceCard" href={`/services/${s.slug}`} key={s.n}>
        <div className="serviceCardTop"><span>{s.n}</span><span className="arrow">↗</span></div>
        <h3>{s.title}</h3><h4>{s.plain}</h4><p>{s.body}</p>
        <ul>{s.examples.map(x=><li key={x}>{x}</li>)}</ul>
        <div className="cardLink">See service details <span>→</span></div>
      </a>)}</div>
    </section>

    <section id="how" className="how section">
      <div className="howIntro"><div className="eyebrow">A CLEAR PROCESS</div><h2>From first conversation<br/>to finished work.</h2><p>You know what we are doing, what is included and what happens next.</p></div>
      <div className="processList">{process.map(p=><div className="processItem" key={p[0]}><span className="processNumber">{p[0]}</span><div><h3>{p[1]}</h3><p>{p[2]}</p></div><span className="processArrow">↗</span></div>)}</div>
    </section>

    <section id="about" className="about section"><div className="aboutMark"><strong>AMM</strong><span>DATA SOLUTIONS</span></div><div className="aboutCopy"><div className="eyebrow">ABOUT AMM DATA SOLUTIONS</div><h2>Let’s make solutions.</h2><p>We help small businesses, startups, agencies and growing companies improve the way they work and show up online. Every project starts with understanding your needs and agreeing on a practical scope.</p><div className="aboutTags"><span>Pakistan</span><span>International clients</span><span>Quality-focused delivery</span></div></div></section>

    <section id="contact" className="contact section"><div className="contactInner"><div className="eyebrow">HAVE A PROJECT IN MIND?</div><h2>Tell us what you<br/><em>want to improve.</em></h2><p>Send us a short description of your business and what you need help with. We’ll discuss the next practical step.</p><a className="primary" href="mailto:bammdatasolutins229@gmail.com?subject=Project%20inquiry%20-%20AMM%20Data%20Solutions">Discuss your project <span>↗</span></a><a className="contactEmail" href="mailto:bammdatasolutins229@gmail.com">bammdatasolutins229@gmail.com</a></div></section>

    <section className="faq section"><div><div className="eyebrow">GOOD TO KNOW</div><h2>Quick answers</h2></div><div className="faqList">{faqs.map((f,i)=><div className="faqItem" key={f[0]}><button className="faqQuestion" aria-expanded={openFaq===i} onClick={()=>setOpenFaq(openFaq===i?null:i)}>{f[0]}<span>{openFaq===i?"−":"+"}</span></button>{openFaq===i&&<p>{f[1]}</p>}</div>)}</div></section>

    <footer><a className="brand footerBrand" href="/"><strong>AMM</strong><span>DATA SOLUTIONS</span></a><p>AI automation · Websites · Data · SEO · Lead generation · Digital marketing</p><div className="footerBottom"><span>© 2026 AMM Data Solutions</span><span>Let’s Make Solutions</span><span>Pakistan & worldwide</span></div></footer>
  </main>;
}
