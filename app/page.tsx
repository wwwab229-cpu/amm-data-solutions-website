"use client";

import { useState } from "react";

const services = [
  { number: "01", slug: "ai-automation-business-systems", title: "AI Automation & Business Systems", short: "Connect repetitive tasks, customer inquiries and team workflows into practical systems.", detail: "AI workflow integration, CRM setup, lead management, follow-up automation and WhatsApp business workflows.", tags: ["Workflow automation", "CRM & leads", "WhatsApp workflows"] },
  { number: "02", slug: "website-ecommerce-solutions", title: "Website & E-commerce Solutions", short: "Build a clear, trustworthy digital home for your business and customers.", detail: "Business websites, landing pages, online stores, product catalogs and e-commerce integrations.", tags: ["Business websites", "Online stores", "Landing pages"] },
  { number: "03", slug: "data-analytics-business-intelligence", title: "Data Analytics & Business Intelligence", short: "Turn scattered information into useful reports and clearer decisions.", detail: "Excel and Google Sheets automation, dashboards, business reports, market research and competitor analysis.", tags: ["Data automation", "Dashboards", "Business reports"] },
  { number: "04", slug: "seo-ai-search-visibility", title: "SEO & AI Search Visibility", short: "Improve how search engines understand your website and business information.", detail: "Technical SEO, website audits, content optimization, search indexing checks and AI search visibility improvements.", tags: ["Technical SEO", "Content structure", "Indexing checks"] },
  { number: "05", slug: "lead-generation-growth-systems", title: "Lead Generation & Growth Systems", short: "Help your team identify relevant prospects and manage sales opportunities.", detail: "B2B lead research, prospect lists, lead qualification, customer support assistants and sales follow-up systems.", tags: ["B2B research", "Lead qualification", "Sales follow-up"] },
  { number: "06", slug: "digital-marketing-creative-solutions", title: "Digital Marketing & Creative Solutions", short: "Create a consistent digital presence with purposeful content and campaign support.", detail: "Social media management, advertising creatives, digital content and marketing performance reporting.", tags: ["Social media", "Ad creatives", "Campaign reporting"] },
];

const steps = [
  ["01", "Understand", "We learn about your goal, current tools and the work slowing you down."],
  ["02", "Design", "We map a practical solution and agree on scope before implementation."],
  ["03", "Build", "We create the agreed workflow, website or digital deliverable."],
  ["04", "Verify", "We test key paths, review quality and address issues before handover."],
  ["05", "Deliver", "You receive the agreed work, clear instructions and next steps."],
];

const faqs = [
  ["What does AMM Data Solutions do?", "We help businesses improve operations and digital growth through six service areas: automation, websites, data intelligence, SEO, lead generation and digital marketing."],
  ["Who do you work with?", "Our services are designed for small businesses, startups, agencies, e-commerce businesses and growing teams in Pakistan and international markets."],
  ["Can you work with our existing tools?", "Often, yes. We review the tools and access available first, then confirm the practical scope and any platform limitations before work begins."],
  ["Can you guarantee search rankings or AI citations?", "No. We can improve technical foundations, content clarity and indexing readiness, but search rankings and inclusion in AI-generated answers depend on systems outside our control."],
  ["How do we start?", "Email us with your business type, the challenge you want to solve and any tools you already use. We will review the request and discuss a suitable next step."],
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return <main>
    <nav className="nav" aria-label="Main navigation">
      <a className="brand" href="/" aria-label="AMM Data Solutions home"><span>AMM</span><small>DATA SOLUTIONS</small></a>
      <div className="navlinks"><a href="#solutions">Solutions</a><a href="#process">Our process</a><a href="#about">About</a><a href="#faq">FAQs</a></div>
      <a className="navcta" href="#contact">Start a project <i>↗</i></a>
    </nav>

    <section className="hero">
      <div className="orb orb1"/><div className="orb orb2"/><div className="heroGrid"/>
      <div className="heroCopy">
        <div className="eyebrow"><span/> AI AUTOMATION · DIGITAL GROWTH</div>
        <h1>We make business<br/><em>work smarter.</em></h1>
        <p>We build practical AI automation, connected business systems and digital solutions that help teams simplify work and move forward.</p>
        <div className="heroActions"><a className="primary" href="#solutions">Explore our solutions <b>→</b></a><a className="secondary" href="#contact">Discuss your needs</a></div>
        <div className="heroTrust"><span><i/> Practical by design</span><span><i/> Quality checked</span><span><i/> Pakistan + worldwide</span></div>
      </div>
      <div className="systemVisual" aria-label="Illustration of connected business systems">
        <div className="visualOrbit orbitOuter"/><div className="visualOrbit orbitInner"/>
        <div className="visualCore"><strong>AMM</strong><span>CONNECTED SYSTEMS</span><div className="corePulse"/></div>
        <div className="node nodeA"><b>INQUIRY</b><small>Captured clearly</small><span className="nodeDot"/></div>
        <div className="node nodeB"><b>BUSINESS DATA</b><small>Organized</small><span className="nodeDot"/></div>
        <div className="node nodeC"><b>FOLLOW-UP</b><small>Workflow ready</small><span className="nodeDot"/></div>
        <div className="node nodeD"><b>DIGITAL GROWTH</b><small>Measured</small><span className="nodeDot"/></div>
        <div className="line l1"/><div className="line l2"/><div className="line l3"/><div className="line l4"/>
        <div className="visualCaption"><span className="liveDot"/> DESIGNED AROUND YOUR WORKFLOW</div>
      </div>
      <div className="heroBottom"><span>AMM DATA SOLUTIONS</span><span>LET’S MAKE SOLUTIONS</span><span>PAKISTAN · INTERNATIONAL</span></div>
    </section>

    <section className="intro section">
      <div className="sectionTag">01 / THE IDEA</div>
      <div><h2>Less repetition.<br/><span>More momentum.</span></h2><p className="lead">Your team should spend less time repeating the same work and more time moving the business forward. We shape useful digital systems around your real goals, existing tools and day-to-day processes.</p></div>
    </section>

    <section id="solutions" className="section solutions">
      <div className="sectionHead"><div><div className="sectionTag">02 / OUR SERVICES</div><h2>Six ways to make<br/><span>work better.</span></h2></div><p>Clear services. Practical scope. Solutions built around what your business actually needs.</p></div>
      <div className="serviceGrid">{services.map(s => <a className="service" href={`/services/${s.slug}`} key={s.number}>
        <div className="serviceTop"><span>{s.number} / SERVICE</span><span className="servicePlus">↗</span></div>
        <div className="serviceSymbol" aria-hidden="true">{["↗","⌘","▥","⌕","◎","✳"][Number(s.number)-1]}</div>
        <h3>{s.title}</h3><p>{s.short}</p>
        <div className="serviceTags">{s.tags.map(t => <span key={t}>{t}</span>)}</div>
        <div className="serviceLearn">Explore service <span>→</span></div>
      </a>)}</div>
    </section>

    <section className="demo section"><div className="sectionTag">03 / THE DIFFERENCE</div><div className="demoIntro"><h2>From scattered tasks<br/>to <span>connected workflows.</span></h2><p>We focus on making everyday work easier to follow, manage and improve.</p></div>
      <div className="demoWrap">
        <div className="demoPanel before"><label>BEFORE</label><h3>Disconnected process</h3>{["Requests arrive in different places","Information gets copied by hand","Follow-ups rely on memory","Progress is hard to track"].map((x,i)=><div className="task" key={x}><span>0{i+1}</span>{x}</div>)}</div>
        <div className="transform">→<small>DESIGN · BUILD · VERIFY</small></div>
        <div className="demoPanel after"><label>AFTER</label><h3>Clearer system</h3>{["Requests follow a clear path","Information stays organized","Next steps are visible","Teams can review progress"].map((x,i)=><div className="task activeTask" key={x}><span>0{i+1}</span>{x}<b>✓</b></div>)}</div>
      </div><p className="disclaimer">Illustrative workflow example. Exact outcomes depend on the project scope, tools and implementation.</p>
    </section>

    <section id="process" className="section process"><div className="sectionTag">04 / HOW WE WORK</div><h2>Thoughtful planning.<br/><span>Careful delivery.</span></h2><p className="processLead">We agree on the goal first, test the work and keep the handover clear.</p><div className="steps">{steps.map(s=><div className="step" key={s[0]}><span>{s[0]}</span><div><h3>{s[1]}</h3><p>{s[2]}</p></div><b>↗</b></div>)}</div></section>

    <section id="about" className="about section"><div className="aboutCard"><div className="sectionTag">05 / ABOUT AMM</div><div className="aboutMark">AMM<span>DATA SOLUTIONS</span></div><h2>Let’s make solutions.</h2><p>We combine modern technology, practical planning and quality checks to help growing businesses improve their systems and digital presence.</p><div className="pillRow"><span>Practical</span><span>Modern</span><span>Reliable</span><span>Quality-focused</span></div></div><div className="aboutSide"><div className="miniLabel">WHAT WE AIM TO IMPROVE</div>{[["TIME","Less repetitive work"],["CLARITY","More organized processes"],["VISIBILITY","Clearer business information"],["CONTROL","Useful handovers and reporting"]].map(x=><div className="metric" key={x[0]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</div></section>

    <section id="faq" className="section faq"><div className="sectionTag">06 / COMMON QUESTIONS</div><div className="faqHead"><h2>Clear answers.<br/><span>Before we begin.</span></h2><p>We believe in practical expectations, clear scope and honest communication.</p></div><div className="faqList">{faqs.map((faq,i)=><div className="faqItem" key={faq[0]}><button className="faqQuestion" aria-expanded={openFaq===i} onClick={()=>setOpenFaq(openFaq===i?null:i)}>{faq[0]}<span>{openFaq===i?"−":"+"}</span></button>{openFaq===i&&<p>{faq[1]}</p>}</div>)}</div></section>

    <section id="contact" className="contact section"><div className="contactGlow"/><div className="sectionTag">07 / START A CONVERSATION</div><div className="contactEyebrow">YOUR NEXT STEP STARTS HERE</div><h2>What could your business<br/><span>do with a better system?</span></h2><p>Tell us what you want to improve. We’ll review your needs and discuss a practical next step — without promising what we can’t verify.</p><a className="primary large" href="mailto:bammdatasolutins229@gmail.com?subject=Project%20inquiry%20-%20AMM%20Data%20Solutions">Discuss your project <b>↗</b></a><div className="contactEmail">bammdatasolutins229@gmail.com</div></section>

    <footer><div className="footerTop"><a className="footerBrand" href="#"><strong>AMM</strong><span>DATA SOLUTIONS</span></a><a href="#solutions">Explore services ↑</a></div><p>AI Automation · Websites · Data Intelligence · SEO · Lead Generation · Digital Marketing</p><div className="footerBottom"><span>© 2026 AMM Data Solutions</span><span>Let’s Make Solutions</span><span>Pakistan · Worldwide</span></div></footer>
  </main>;
}
