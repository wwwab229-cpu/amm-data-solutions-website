"use client";

import { useState } from "react";
import AMMLogo from "../logo/AMMLogo";

const services = [
  { n:"01", slug:"ai-automation-business-systems", title:"AI Automation & Business Systems", line:"Make everyday work flow.", body:"Connect repetitive tasks, lead tracking and customer workflows so work moves forward with fewer manual steps.", examples:["Workflow automation","Lead capture and follow-up systems","Business process setup"], visual:"automation", size:"large" },
  { n:"07", slug:"ai-chatbots-virtual-assistants", title:"AI Chatbots & Virtual Assistants", line:"Give every question a next step.", body:"AI-powered assistants that answer FAQs, guide visitors and help customers request appointments.", examples:["Website AI chatbots","Lead generation bots","Appointment booking bots"], visual:"assistant", size:"small" },
  { n:"02", slug:"website-ecommerce-solutions", title:"Web & E-commerce Solutions", line:"A clearer digital front door.", body:"Build a credible online presence that helps customers understand your offer and take action.", examples:["Business websites","Online stores and catalogs","Landing pages and integrations"], visual:"web", size:"small" },
  { n:"03", slug:"data-analytics-business-intelligence", title:"Data Analytics & Reporting", line:"See what matters sooner.", body:"Bring spreadsheets, reporting and business information into a format that supports better decisions.", examples:["Spreadsheet automation","Dashboards and recurring reports","Data cleaning and validation"], visual:"data", size:"small" },
  { n:"04", slug:"seo-ai-search-visibility", title:"SEO & AI Search Visibility", line:"Be easier to discover.", body:"Improve the structure and content that helps search platforms understand your business.", examples:["Technical SEO checks","Content and structured data","Indexing and visibility monitoring"], visual:"search", size:"large" },
  { n:"05", slug:"digital-marketing-creative-solutions", title:"Digital Marketing & Advertising", line:"Every campaign has a purpose.", body:"Plan and manage digital campaigns with suitable creative, conversion tracking and performance reporting.", examples:["Google Ads and Meta Ads","Social media marketing","Campaign tracking and reporting"], visual:"marketing", size:"small" },
  { n:"06", slug:"creative-brand-solutions", title:"Creative & Brand Solutions", line:"Make the message land.", body:"Create consistent visual assets that communicate your offer clearly across digital channels.", examples:["Social media and ad creatives","Brand assets and marketing graphics","Presentations and report design"], visual:"creative", size:"small" },
];

const steps = [
  { n:"01", title:"Understand", text:"We start with your business objective, current process and the outcome you need." },
  { n:"02", title:"Shape the solution", text:"We agree the deliverables, tools, timeline and responsibilities before work begins." },
  { n:"03", title:"Build & review", text:"We share progress, review the result with you and explain the handover." },
];

function Brand({ footer=false }: { footer?: boolean }) {
  return <a className={footer ? "brand brandFooter" : "brand"} href="/" aria-label="AMM Data Solutions home"><AMMLogo height={38} /></a>;
}
function ServiceArt({ type }: { type: string }) {
  if(type==="automation") return <div className="art artAutomation" aria-hidden="true"><div className="automationLine lineA"/><div className="automationLine lineB"/><div className="automationNode nA"><span>01</span><b>INPUT</b></div><div className="automationNode nB"><span>02</span><b>PROCESS</b></div><div className="automationNode nC"><span>03</span><b>OUTCOME</b></div><div className="automationCore">AMM<i>↗</i></div><div className="artCaption">CONNECTED WORKFLOW <span>● LIVE CONCEPT</span></div></div>;
  if(type==="assistant") return <div className="art artAssistant" aria-hidden="true"><div className="chatOrb">✳</div><div className="chatPill pillOne">How can I help?</div><div className="chatPill pillTwo">Find the right next step <b>↗</b></div><div className="chatDot"/></div>;
  if(type==="web") return <div className="art artWeb" aria-hidden="true"><div className="browserFrame"><div className="browserTop"><i/><i/><i/><span>YOUR BUSINESS ONLINE</span></div><div className="browserContent"><div className="browserCopy"><b>Built for<br/>your next move.</b><i/><i/><em>EXPLORE ↗</em></div><div className="browserShape"><span/><b>AMM</b></div></div></div></div>;
  if(type==="data") return <div className="art artData" aria-hidden="true"><div className="dataChartLabel">BUSINESS SNAPSHOT <span>↗</span></div><div className="dataBars">{[32,50,42,70,56,88,66,100].map((v,i)=><i key={i} style={{height:v+"%"}}/>)}</div><div className="dataBaseline"><span>INPUTS</span><b>→</b><span>INSIGHT</span><b>→</b><span>ACTION</span></div></div>;
  if(type==="search") return <div className="art artSearch" aria-hidden="true"><div className="searchLens"><i/><i/><i/></div><div className="searchResult srOne"><b>YOUR BUSINESS</b><span>Clear, relevant information</span><em>VISIBLE</em></div><div className="searchResult srTwo"><b>AI SEARCH</b><span>Structured context</span><em>UNDERSTOOD</em></div><div className="searchOrbit"/></div>;
  if(type==="marketing") return <div className="art artMarketing" aria-hidden="true"><div className="campaignCard"><span>CAMPAIGN / 01</span><b>Reach the<br/><i>right people.</i></b><div className="campaignMetrics"><div><small>CREATIVE</small><strong>01</strong></div><div><small>TRACKING</small><strong>↗</strong></div><div><small>LEARNING</small><strong>02</strong></div></div></div></div>;
  return <div className="art artCreative" aria-hidden="true"><div className="creativeShape shapeOne">A</div><div className="creativeShape shapeTwo">IDEA<br/>→ IMPACT</div><div className="creativeShape shapeThree">AMM<span>®</span></div></div>;
}

export default function Home() {
 const [mobileOpen,setMobileOpen]=useState(false);
 const [openStep,setOpenStep]=useState("01");
 return <main className="newSite">
  <a className="skipLink" href="#capabilities">Skip to capabilities</a>
  <header className="siteHeader">
   <Brand/>
   <button className="menuToggle" aria-label={mobileOpen?"Close navigation":"Open navigation"} aria-expanded={mobileOpen} onClick={()=>setMobileOpen(!mobileOpen)}><span/><span/></button>
   <nav className={mobileOpen?"siteNav navVisible": "siteNav"} aria-label="Main navigation">
    <a href="#capabilities" onClick={()=>setMobileOpen(false)}>Capabilities</a><a href="#approach" onClick={()=>setMobileOpen(false)}>Approach</a><a href="#about" onClick={()=>setMobileOpen(false)}>About</a><a className="navContact" href="#contact" onClick={()=>setMobileOpen(false)}>Start a conversation <span>↗</span></a>
   </nav>
  </header>
  <section className="newHero">
   <div className="heroGridLines" aria-hidden="true"/>
   <div className="heroCopy">
    <div className="eyebrow"><span/> AMM DATA SOLUTIONS <b>—</b> LET’S MAKE SOLUTIONS</div>
    <h1>Good ideas.<br/><span>Better systems.</span></h1>
    <p>We turn repetitive business work into smart, organized and automated systems — and build the digital experiences around them.</p>
    <div className="heroButtons"><a className="buttonPrimary" href="#capabilities">Explore what we do <span>↗</span></a><a className="buttonQuiet" href="#contact">Talk through a project <span>→</span></a></div>
    <div className="heroFootnote"><span>01 / STRATEGY</span><span>02 / DIGITAL BUILD</span><span>03 / BETTER FLOW</span></div>
   </div>
   <div className="heroStage" aria-label="Abstract connected digital system concept">
    <div className="stageTop"><span>AMM / SYSTEM MAP</span><span><i/> CONCEPT IN MOTION</span></div>
    <div className="stageBackdrop"/><div className="stageRing ringA"/><div className="stageRing ringB"/><div className="stageRing ringC"/>
    <div className="stagePlane planeBack"/><div className="stagePlane planeFront"/>
    <div className="stageHub"><div className="hubLogo">AMM<span>.</span></div><small>DATA SOLUTIONS</small><b>Make work<br/>move forward.</b></div>
    <div className="stageModule moduleA"><small>01 / INPUT</small><b>Business goal</b><span>Clear direction <i>↗</i></span></div>
    <div className="stageModule moduleB"><small>02 / CONNECT</small><b>Smart workflow</b><span>Less friction <i>↗</i></span></div>
    <div className="stageModule moduleC"><small>03 / OUTPUT</small><b>Useful outcome</b><span>Ready to review <i>↗</i></span></div>
    <svg className="stageConnections" viewBox="0 0 600 540" fill="none" aria-hidden="true"><path d="M120 150 C180 150 170 235 255 245"/><path d="M470 150 C415 150 430 235 345 245"/><path d="M300 310 C300 365 225 375 180 420"/><path d="M300 310 C300 365 380 375 425 420"/><circle cx="120" cy="150" r="4"/><circle cx="470" cy="150" r="4"/><circle cx="180" cy="420" r="4"/><circle cx="425" cy="420" r="4"/></svg>
    <div className="stageBottom"><span>OBJECTIVE-LED DELIVERY</span><span>DESIGN <b>→</b> BUILD <b>→</b> REVIEW</span></div>
   </div>
   <div className="heroSideLabel">DIGITAL SOLUTIONS / 2026</div>
  </section>
  <div className="trustRibbon"><span>BUILT AROUND REAL BUSINESS NEEDS</span><b>AI & AUTOMATION</b><i>✳</i><b>DATA & INSIGHT</b><i>✳</i><b>SEARCH & GROWTH</b><i>✳</i><b>CREATIVE EXECUTION</b></div>
  <section className="introBand"><div className="introIndex">AMM / 001</div><p>Not more digital noise.<br/><span>Just solutions that make work clearer.</span></p><div className="introSide">PRACTICAL THINKING<br/>MEASURABLE PURPOSE</div></section>
  <section id="capabilities" className="capabilitiesSection">
   <div className="sectionHeading"><div><div className="eyebrow"><span/> WHAT WE BRING TO THE TABLE</div><h2>One partner.<br/><span>Connected capabilities.</span></h2></div><p>Choose a focused service or bring us a bigger challenge. We’ll shape the work around the goal, not the other way around.</p></div>
   <div className="capabilityGrid">{services.map((s,i)=><a href={`/services/${s.slug}`} key={s.n} className={`capabilityCard card-${s.visual} ${s.size==="large"?"cardLarge":""}`}><div className="cardMeta"><span>CAPABILITY / {s.n}</span><span className="cardArrow">↗</span></div><ServiceArt type={s.visual}/><div className="cardCopy"><h3>{s.title}</h3><h4>{s.line}</h4><p>{s.body}</p><ul>{s.examples.map(x=><li key={x}>{x}</li>)}</ul><div className="cardBottom"><span>EXPLORE SERVICE</span><b>↗</b></div></div></a>)}</div>
   <div className="partnerNote"><span className="partnerMark">↗</span><p><b>For agencies & delivery partners</b><br/>Ask us about white-label collaboration for suitable projects.</p><a href="#contact">Explore partnership <span>→</span></a></div>
  </section>
  <section id="approach" className="approachSection"><div className="approachHeader"><div><div className="eyebrow"><span/> HOW WE WORK</div><h2>Clear from the<br/><span>first conversation.</span></h2></div><p>No vague process or surprise scope. We agree what matters, build with purpose and review the result together.</p></div><div className="approachSteps">{steps.map(s=><button key={s.n} className={openStep===s.n?"approachStep stepOpen":"approachStep"} onClick={()=>setOpenStep(openStep===s.n?"":s.n)} aria-expanded={openStep===s.n}><span className="stepNumber">{s.n}</span><span className="stepContent"><b>{s.title}</b>{openStep===s.n&&<span className="stepDescription">{s.text}</span>}</span><span className="stepSymbol">{openStep===s.n?"−":"+"}</span></button>)}</div></section>
  <section id="about" className="aboutSection"><div className="aboutIndex">AMM<br/><span>DATA SOLUTIONS</span></div><div className="aboutMain"><div className="eyebrow"><span/> THE THINKING BEHIND THE WORK</div><h2>Business-minded.<br/><span>Technology-enabled.</span></h2><p>AMM Data Solutions brings automation, business information, websites, search visibility and creative execution together under one practical delivery approach. We work with businesses in Pakistan and welcome international inquiries.</p><div className="aboutFacts"><div><b>01</b><span>Clear scope</span></div><div><b>02</b><span>Useful outcomes</span></div><div><b>03</b><span>Thoughtful handover</span></div></div></div><div className="aboutStamp"><AMMLogo height={58}/><span>LET’S MAKE SOLUTIONS</span></div></section>
  <section id="contact" className="contactSection"><div className="contactPattern" aria-hidden="true"/><div className="contactLeft"><div className="eyebrow"><span/> YOUR NEXT STEP STARTS HERE</div><h2>What could work<br/><i>better?</i></h2></div><div className="contactRight"><p>Tell us the goal, the bottleneck or the idea you want to move forward. We’ll start with a clear conversation about scope and next steps.</p><a className="contactButton" href="mailto:ammdatasolutions229@gmail.com?subject=Project%20inquiry%20-%20AMM%20Data%20Solutions">Start a project conversation <span>↗</span></a><div className="contactChannels"><a href="mailto:ammdatasolutions229@gmail.com?subject=Project%20inquiry%20-%20AMM%20Data%20Solutions">Email AMM <span>↗</span></a><a href="https://www.linkedin.com/in/abdullah-mumtaz-malik-975a93240/" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a></div></div></section>
  <footer className="newFooter"><div className="footerTop"><Brand footer/><p>Smart systems. Clear communication. Creative execution.</p><a href="#top" onClick={e=>{e.preventDefault();window.scrollTo({top:0,behavior:"smooth"})}}>Back to top ↑</a></div><div className="footerBottom"><span>© 2026 AMM Data Solutions</span><span>Automation · Web · Data · SEO · Marketing · Creative</span><span>Pakistan / Worldwide</span></div></footer>
 </main>;
}
