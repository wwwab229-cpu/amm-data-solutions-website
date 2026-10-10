"use client";

import { useState } from "react";
import AMMLogo from "../logo/AMMLogo";

const services = [
  { n:"01", slug:"ai-automation-business-systems", title:"AI Automation & Business Systems", plain:"Less busywork. More control.", body:"Connect repetitive tasks and customer workflows so work moves forward with fewer manual steps.", examples:["Workflow automation","Inquiry and follow-up systems","Business process setup"], visual:"workflow" },
  { n:"02", slug:"website-ecommerce-solutions", title:"Websites & E-commerce", plain:"A stronger digital front door.", body:"Build a clear, credible online presence that helps customers understand your offer and take action.", examples:["Business websites","Online stores","Landing pages"], visual:"web" },
  { n:"03", slug:"data-analytics-business-intelligence", title:"Data & Business Intelligence", plain:"Turn scattered data into clarity.", body:"Bring spreadsheets, reporting and business information into a format that supports better decisions.", examples:["Spreadsheet automation","Dashboards and reports","Market research"], visual:"data" },
  { n:"04", slug:"seo-ai-search-visibility", title:"SEO & AI Search Visibility", plain:"Make your business easier to discover.", body:"Improve the structure and content that helps search platforms understand your business.", examples:["Technical SEO checks","Content structure","Indexing support"], visual:"search" },
  { n:"05", slug:"lead-generation-growth-systems", title:"Lead Generation & Growth Systems", plain:"A clearer path from prospect to follow-up.", body:"Research relevant companies and organize outreach so opportunities are easier to track and manage.", examples:["B2B prospect research","Qualified lead lists","Follow-up workflows"], visual:"leads" },
  { n:"06", slug:"digital-marketing-creative-solutions", title:"Digital Marketing & Creative", plain:"Creative that supports business goals.", body:"Create consistent content and marketing assets around your offer, audience and campaign objective.", examples:["Social content","Ad creatives","Campaign reporting"], visual:"creative" },
];
const process = [
  ["01","Understand the objective","We clarify the business goal, current process and what a useful result should look like."],
  ["02","Scope the right solution","We agree on deliverables, tools, timeline and responsibilities before work begins."],
  ["03","Build, review and hand over","We review the output with you and explain how to use the delivered solution."],
];
const faqs = [
  ["What does AMM Data Solutions do?","We deliver digital systems and creative services across automation, websites, business data, search visibility, lead generation and marketing."],
  ["Do you work with businesses outside Pakistan?","Yes. We welcome inquiries from Pakistan and international markets. Scope, timeline and working arrangements are agreed for each project."],
  ["How much does a project cost?","Pricing depends on the scope and requirements. Share what you need and we can discuss a practical scope before quoting."],
];
function Brand({ footer=false }: { footer?: boolean }) {
  return <a className={footer ? "brand footerBrand" : "brand"} href="/" aria-label="AMM Data Solutions home"><AMMLogo height={38} /></a>;
}
function ServiceVisual({ type }: { type: string }) {
  if (type === "workflow") return <div className="serviceVisual visualWorkflow"><span>REQUEST</span><i>→</i><span>PROCESS</span><i>→</i><b>RESULT</b></div>;
  if (type === "web") return <div className="serviceVisual visualWeb"><div className="webBar"><i/><i/><i/></div><div className="webHeroLine"/><div className="webHeroLine short"/><div className="webButton"/><div className="webBlocks"><i/><i/><i/></div></div>;
  if (type === "data") return <div className="serviceVisual visualData"><div className="dataMetric"><small>OVERVIEW</small><b>Clearer signals</b></div><div className="dataBars"><i/><i/><i/><i/><i/><i/><i/></div></div>;
  if (type === "search") return <div className="serviceVisual visualSearch"><span className="searchRing">⌕</span><div><b>DISCOVERABILITY</b><i/><i/><i/></div></div>;
  if (type === "leads") return <div className="serviceVisual visualLeads"><div><i/> Prospect identified</div><div><i/> Follow-up planned</div><div><i/> Next step tracked</div></div>;
  return <div className="serviceVisual visualCreative"><div className="creativeTile one">A</div><div className="creativeTile two">AMM</div><div className="creativeTile three">IDEA<br/>→ IMPACT</div></div>;
}
export default function Home() {
  const [openFaq,setOpenFaq]=useState<number|null>(null);
  const [contactOpen,setContactOpen]=useState(false);
  return <main>
    <nav className="nav" aria-label="Main navigation">
      <Brand />
      <div className="navlinks"><a href="#services">Capabilities</a><a href="#how">Our approach</a><a href="#about">About AMM</a></div>
      <button className="navcta" type="button" onClick={()=>setContactOpen(true)}>Discuss a project <span>↗</span></button>
    </nav>
    <section className="hero">
      <div className="heroInner">
        <div className="eyebrow"><span className="eyebrowLine"/> DIGITAL SYSTEMS. PRACTICAL EXECUTION.</div>
        <h1>Make complex work<br/><span>feel effortless.</span></h1>
        <p className="heroText">AMM Data Solutions builds the systems, digital experiences and creative assets that help organizations operate with greater clarity.</p>
        <div className="heroActions"><a className="primary" href="#services">Explore capabilities <span>↗</span></a><a className="textLink" href="#contact">Tell us your objective <span>→</span></a></div>
        <div className="heroMeta"><span><i/> Clear scope and deliverables</span><span><i/> Pakistan and international projects</span></div>
      </div>
      <div className="heroArt" aria-label="Illustration of an organized digital business system">
        <div className="artHalo"></div><div className="orbit orbitA"></div><div className="orbit orbitB"></div>
        <div className="artCard artMain"><div className="artTop"><span>AMM SYSTEMS VIEW</span><span className="artStatus"><i/> CONNECTED</span></div>
          <div className="dashboardTitle">From scattered work<br/><b>to a clear system.</b></div>
          <div className="dashboardGrid"><div className="dashTile"><span className="dashIcon">01</span><small>DIGITAL PRESENCE</small><strong>Built to communicate</strong><div className="miniBars"><i/><i/><i/><i/><i/><i/></div></div><div className="dashTile"><span className="dashIcon">02</span><small>WORKFLOW</small><strong>Steps that connect</strong><div className="miniFlow"><i/><b/><i/><b/><i/></div></div><div className="dashTile wide"><small>BUSINESS INTELLIGENCE</small><strong>Information → decisions → action</strong><div className="chartLine"><i/><i/><i/><i/><i/><i/><i/></div></div></div>
        </div>
        <div className="artChip chipOne"><span className="statusDot"></span> Clear process</div><div className="artChip chipTwo"><span className="statusDot blue"></span> Purpose-built delivery</div>
      </div>
      <div className="heroBottomLine"><span>AMM DATA SOLUTIONS</span><span>LET’S MAKE SOLUTIONS</span><span>EXPLORE OUR CAPABILITIES ↓</span></div>
    </section>
    <section className="intro section"><div className="eyebrow">BUILT AROUND THE OBJECTIVE</div><div><h2>Technology is only useful when it <span>solves the right problem.</span></h2><p>We start with the outcome, shape a sensible scope, and deliver practical digital work without unnecessary complexity.</p></div></section>
    <section id="services" className="services section">
      <div className="sectionHead"><div><div className="eyebrow">OUR CAPABILITIES</div><h2>Six ways to move work forward<span className="yellowDot">.</span></h2></div><p>Connected capabilities across business systems, digital presence, information and creative execution.</p></div>
      <div className="serviceGrid">{services.map(s=><a className={`serviceCard serviceCard-${s.n}`} href={`/services/${s.slug}`} key={s.n}><div className="serviceCardTop"><span className="serviceNumber">CAPABILITY / {s.n}</span><span className="serviceArrow">↗</span></div><ServiceVisual type={s.visual}/><h3>{s.title}</h3><h4>{s.plain}</h4><p>{s.body}</p><ul>{s.examples.map(x=><li key={x}>{x}</li>)}</ul><div className="cardLink">View capability <span>↗</span></div></a>)}</div>
    </section>
    <section id="how" className="how section"><div className="howIntro"><div className="eyebrow">A CLEAR DELIVERY MODEL</div><h2>Defined scope.<br/><span>Thoughtful execution.</span></h2><p>Every engagement has a clear objective, an agreed scope and a review before handover.</p><a className="textLink" href="#contact">Discuss your requirements <span>→</span></a></div><div className="processList">{process.map(p=><div className="processItem" key={p[0]}><span className="processNumber">{p[0]}</span><div><h3>{p[1]}</h3><p>{p[2]}</p></div><span className="processArrow">↗</span></div>)}</div></section>
    <section className="trustBand" aria-label="AMM delivery principles"><div><span>01</span><b>Scope before build</b><p>Deliverables and expectations are agreed up front.</p></div><div><span>02</span><b>Human-reviewed work</b><p>Outputs are reviewed before handover.</p></div><div><span>03</span><b>Practical handover</b><p>Know what was delivered and what happens next.</p></div></section>
    <section id="about" className="about section"><div className="aboutVisual"><div className="aboutLogoFrame"><AMMLogo className="ammAboutLogo" height={72} /></div><div className="aboutAccent">LET’S MAKE SOLUTIONS<span>●</span></div></div><div className="aboutCopy"><div className="eyebrow">ABOUT AMM DATA SOLUTIONS</div><h2>Business-minded thinking.<br/><span>Digital execution.</span></h2><p>AMM Data Solutions brings automation, digital systems, business information and creative services together under one practical delivery approach. We work with organizations that value clear communication, thoughtful scope and useful outcomes.</p><div className="aboutTags"><span>Pakistan-based</span><span>International inquiries welcome</span><span>Scope-led delivery</span></div></div></section>
    <section id="contact" className="contact section"><div className="contactGlow"></div><div className="contactInner"><div className="eyebrow"><span className="eyebrowLine"/> START WITH THE BUSINESS OBJECTIVE</div><h2>What needs to work<br/><span>better?</span></h2><p>Share the challenge, goal or idea. We’ll help clarify a sensible next step and the scope it may require.</p><a className="primary" href="mailto:bammdatasolutins229@gmail.com?subject=Project%20inquiry%20-%20AMM%20Data%20Solutions">Discuss your project <span>↗</span></a><a className="contactEmail" href="mailto:bammdatasolutins229@gmail.com">bammdatasolutins229@gmail.com</a></div></section>
    <section className="faq section"><div><div className="eyebrow">GOOD TO KNOW</div><h2>Before we begin<span className="yellowDot">.</span></h2></div><div className="faqList">{faqs.map((f,i)=><div className="faqItem" key={f[0]}><button className="faqQuestion" aria-expanded={openFaq===i} onClick={()=>setOpenFaq(openFaq===i?null:i)}>{f[0]}<span>{openFaq===i?"−":"+"}</span></button>{openFaq===i&&<p>{f[1]}</p>}</div>)}</div></section>
    <footer><div className="footerTop"><Brand footer/><p>Digital systems, business intelligence and creative execution.</p><a className="footerContact" href="#contact">Discuss a project ↗</a></div><div className="footerBottom"><span>© 2026 AMM Data Solutions</span><span>Automation · Websites · Data · SEO · Growth · Creative</span><span>Pakistan and worldwide</span></div></footer>
    {contactOpen && <div className="contactModalBackdrop" onClick={()=>setContactOpen(false)}><section className="contactModal" role="dialog" aria-modal="true" aria-labelledby="contactModalTitle" onClick={e=>e.stopPropagation()}><button className="modalClose" type="button" aria-label="Close contact options" onClick={()=>setContactOpen(false)}>×</button><div className="eyebrow"><span className="eyebrowLine"/> GET IN TOUCH</div><h2 id="contactModalTitle">How would you like to connect?</h2><p>Choose the contact channel that works best for you.</p><a className="contactOption" href="https://wa.me/923032724908" target="_blank" rel="noreferrer"><span className="contactOptionIcon">↗</span><span><b>WhatsApp</b><small>Chat with AMM Data Solutions</small></span><strong>→</strong></a><a className="contactOption" href="mailto:bammdatasolutins229@gmail.com?subject=Project%20inquiry%20-%20AMM%20Data%20Solutions"><span className="contactOptionIcon">@</span><span><b>Email</b><small>bammdatasolutins229@gmail.com</small></span><strong>→</strong></a><a className="contactOption" href="https://www.linkedin.com/in/abdullah-mumtaz-malik-975a93240/" target="_blank" rel="noreferrer"><span className="contactOptionIcon">in</span><span><b>LinkedIn</b><small>Connect professionally</small></span><strong>→</strong></a></section></div>}
  </main>;
}
