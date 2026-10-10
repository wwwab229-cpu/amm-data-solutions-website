"use client";

import { useState } from "react";
import AMMLogo from "../logo/AMMLogo";

const services = [
  { n:"01", slug:"ai-automation-business-systems", title:"AI Automation & Business Systems", plain:"Make repetitive work easier.", body:"Connect everyday tasks so your team spends less time copying information and chasing updates.", examples:["Automated admin tasks","Customer inquiry workflows","CRM and follow-up setup"], icon:"↗" },
  { n:"02", slug:"website-ecommerce-solutions", title:"Website & E-commerce Solutions", plain:"Give your business a better website.", body:"Show customers what you offer and make it easy for them to contact you or browse your products.", examples:["Business websites","Online stores","Landing pages and product catalogs"], icon:"▱" },
  { n:"03", slug:"data-analytics-business-intelligence", title:"Data Analytics & Business Intelligence", plain:"Make your information useful.", body:"Organize spreadsheets and reports so important business information is easier to understand.", examples:["Excel and Sheets automation","Simple dashboards","Business and market reports"], icon:"▥" },
  { n:"04", slug:"seo-ai-search-visibility", title:"SEO & AI Search Visibility", plain:"Help people find your business online.", body:"Improve your website structure and content so search engines can better understand your business.", examples:["Website SEO checks","Page titles and content","Search indexing support"], icon:"⌕" },
  { n:"05", slug:"lead-generation-growth-systems", title:"Lead Generation & Growth Systems", plain:"Find and organize potential customers.", body:"Research relevant businesses and set up a clearer way to track prospects and next steps.", examples:["B2B prospect research","Organized lead lists","Sales follow-up systems"], icon:"◎" },
  { n:"06", slug:"digital-marketing-creative-solutions", title:"Digital Marketing & Creative Solutions", plain:"Keep your brand active and consistent.", body:"Plan useful social content and create marketing materials that communicate your offer clearly.", examples:["Social media content","Ad and campaign designs","Marketing activity reports"], icon:"✳" },
];
const process = [
  ["01","Discover","We learn about your goals, current workflow and the problem to solve."],
  ["02","Plan & build","We agree on the scope, then create a practical solution for your needs."],
  ["03","Review & deliver","We check the work together and explain the handover and next steps."],
];
const faqs = [
  ["What does AMM Data Solutions do?","We help businesses improve websites, everyday workflows, business data, online visibility, lead handling and digital marketing."],
  ["Do you work with businesses outside Pakistan?","Yes. We welcome inquiries from Pakistan and international markets. Scope, timeline and working arrangements are confirmed for each project."],
  ["How much does a project cost?","Cost depends on the work and its requirements. Contact us with a short description so we can discuss a suitable scope before quoting."],
];
function Brand({ footer=false }: { footer?: boolean }) {
  return <a className={footer ? "brand footerBrand" : "brand"} href="/" aria-label="AMM Data Solutions home"><div style={{display:"flex",flexDirection:"column",lineHeight:1}}><AMMLogo height={38} /></div></a>;
}
export default function Home() {
  const [openFaq,setOpenFaq]=useState<number|null>(null);
  const [contactOpen,setContactOpen]=useState(false);
  return <main>
    <nav className="nav" aria-label="Main navigation">
      <Brand />
      <div className="navlinks"><a href="#services">Services</a><a href="#how">How it works</a><a href="#about">About</a></div>
      <button className="navcta" type="button" onClick={()=>setContactOpen(true)}>Let’s talk <span>↗</span></button>
    </nav>
    <section className="hero">
      <div className="heroInner">
        <div className="eyebrow"><span className="eyebrowLine"/> SMARTER SYSTEMS. CLEARER GROWTH.</div>
        <h1>Make your business<br/><span>work smarter.</span></h1>
        <p className="heroText">From better websites to simpler workflows, we help businesses organize everyday work and build a stronger online presence.</p>
        <div className="heroActions"><a className="primary" href="#services">Explore services <span>↗</span></a><a className="textLink" href="#contact">Discuss your project <span>→</span></a></div>
        <div className="heroMeta"><span><i/> Practical digital solutions</span><span><i/> Pakistan & worldwide</span></div>
      </div>
      <div className="heroArt" aria-label="Illustration of a connected business workspace">
        <div className="artHalo"></div><div className="orbit orbitA"></div><div className="orbit orbitB"></div>
        <div className="artCard artMain"><div className="artTop"><span>BUSINESS OVERVIEW</span><span className="artStatus"><i/> WORKSPACE READY</span></div>
          <div className="dashboardTitle">Everything in<br/><b>better order.</b></div>
          <div className="dashboardGrid"><div className="dashTile"><span className="dashIcon">↗</span><small>ONLINE PRESENCE</small><strong>Website</strong><div className="miniBars"><i/><i/><i/><i/><i/><i/></div></div><div className="dashTile"><span className="dashIcon">↻</span><small>WORKFLOW</small><strong>Automation</strong><div className="miniFlow"><i/><b/><i/><b/><i/></div></div><div className="dashTile wide"><small>BUSINESS DATA</small><strong>Clear information. Better decisions.</strong><div className="chartLine"><i/><i/><i/><i/><i/><i/><i/></div></div></div>
        </div>
        <div className="artChip chipOne"><span className="statusDot"></span> Workflows connected</div><div className="artChip chipTwo"><span className="statusDot blue"></span> Digital presence</div>
      </div>
      <div className="heroBottomLine"><span>01 / DIGITAL SOLUTIONS</span><span>BUILT AROUND YOUR BUSINESS</span><span>SCROLL TO EXPLORE ↓</span></div>
    </section>
    <section className="intro section"><div className="eyebrow">A PRACTICAL APPROACH</div><div><h2>Technology should make work <span>simpler.</span></h2><p>We start with the business problem, then recommend the right work — without unnecessary complexity or confusing jargon.</p></div></section>
    <section id="services" className="services section">
      <div className="sectionHead"><div><div className="eyebrow">WHAT WE CAN HELP WITH</div><h2>Solutions for your next step<span className="yellowDot">.</span></h2></div><p>Explore six service areas designed to help your business run better and grow online.</p></div>
      <div className="serviceGrid">{services.map(s=><a className="serviceCard" href={`/services/${s.slug}`} key={s.n}><div className="serviceCardTop"><span className="serviceIcon">{s.icon}</span><span className="serviceNumber">{s.n}</span></div><h3>{s.title}</h3><h4>{s.plain}</h4><p>{s.body}</p><ul>{s.examples.map(x=><li key={x}>{x}</li>)}</ul><div className="cardLink">Explore service <span>↗</span></div></a>)}</div>
    </section>
    <section id="how" className="how section"><div className="howIntro"><div className="eyebrow">SIMPLE BY DESIGN</div><h2>Clear steps.<br/><span>Real collaboration.</span></h2><p>Know what we’re doing, what’s included and what happens next.</p><a className="textLink" href="#contact">Start a conversation <span>→</span></a></div><div className="processList">{process.map(p=><div className="processItem" key={p[0]}><span className="processNumber">{p[0]}</span><div><h3>{p[1]}</h3><p>{p[2]}</p></div><span className="processArrow">↗</span></div>)}</div></section>
    <section id="about" className="about section"><div className="aboutVisual"><div className="aboutLogoFrame"><AMMLogo className="ammAboutLogo" height={72} /></div><div className="aboutAccent">LET’S MAKE SOLUTIONS<span>●</span></div></div><div className="aboutCopy"><div className="eyebrow">ABOUT AMM DATA SOLUTIONS</div><h2>Good work starts with <span>understanding.</span></h2><p>We help small businesses, startups, agencies and growing companies improve the way they work and show up online. Every project starts with understanding your needs and agreeing on a practical scope.</p><div className="aboutTags"><span>Pakistan</span><span>International clients</span><span>Quality-focused delivery</span></div></div></section>
    <section id="contact" className="contact section"><div className="contactGlow"></div><div className="contactInner"><div className="eyebrow"><span className="eyebrowLine"/> YOUR NEXT STEP STARTS HERE</div><h2>Let’s solve something<br/><span>that matters.</span></h2><p>Tell us a little about your business and what you want to improve. We’ll discuss a practical next step.</p><a className="primary" href="mailto:ammdatasolutions229@gmail.com?subject=Project%20inquiry%20-%20AMM%20Data%20Solutions">Discuss your project <span>↗</span></a><a className="contactEmail" href="mailto:ammdatasolutions229@gmail.com">ammdatasolutions229@gmail.com</a></div></section>
    <section className="faq section"><div><div className="eyebrow">GOOD TO KNOW</div><h2>Quick answers<span className="yellowDot">.</span></h2></div><div className="faqList">{faqs.map((f,i)=><div className="faqItem" key={f[0]}><button className="faqQuestion" aria-expanded={openFaq===i} onClick={()=>setOpenFaq(openFaq===i?null:i)}>{f[0]}<span>{openFaq===i?"−":"+"}</span></button>{openFaq===i&&<p>{f[1]}</p>}</div>)}</div></section>
    <footer><div className="footerTop"><Brand footer/><p>Practical digital solutions for growing businesses.</p><a className="footerContact" href="#contact">Let’s talk ↗</a></div><div className="footerBottom"><span>© 2026 AMM Data Solutions</span><span>AI automation · Websites · Data · SEO · Lead generation · Digital marketing</span><span>Pakistan & worldwide</span></div></footer>
    {contactOpen && <div className="contactModalBackdrop" onClick={()=>setContactOpen(false)}><section className="contactModal" role="dialog" aria-modal="true" aria-labelledby="contactModalTitle" onClick={e=>e.stopPropagation()}><button className="modalClose" type="button" aria-label="Close contact options" onClick={()=>setContactOpen(false)}>×</button><div className="eyebrow"><span className="eyebrowLine"/> GET IN TOUCH</div><h2 id="contactModalTitle">How would you like to connect?</h2><p>Choose the contact channel that works best for you.</p><a className="contactOption" href="https://wa.me/923032724908" target="_blank" rel="noreferrer"><span className="contactOptionIcon">↗</span><span><b>WhatsApp</b><small>Chat with AMM Data Solutions</small></span><strong>→</strong></a><a className="contactOption" href="mailto:ammdatasolutions229@gmail.com?subject=Project%20inquiry%20-%20AMM%20Data%20Solutions"><span className="contactOptionIcon">@</span><span><b>Email</b><small>ammdatasolutions229@gmail.com</small></span><strong>→</strong></a><a className="contactOption" href="https://www.linkedin.com/in/abdullah-mumtaz-malik-975a93240/" target="_blank" rel="noreferrer"><span className="contactOptionIcon">in</span><span><b>LinkedIn</b><small>Connect professionally</small></span><strong>→</strong></a></section></div>}
  </main>;
}
