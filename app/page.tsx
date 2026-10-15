"use client";

import { useEffect, useRef, useState } from "react";
import AMMLogo from "../logo/AMMLogo";

const services = [
  { n:"01", slug:"ai-automation-business-systems", title:"AI Automation & Business Systems", short:"Make work flow.", body:"Connect repetitive tasks, lead tracking and customer workflows into a clearer operating system.", tags:["Workflow automation","Lead follow-up","Business systems"], visual:"automation", color:"blue" },
  { n:"02", slug:"website-ecommerce-solutions", title:"Web & E-commerce Solutions", short:"A better digital front door.", body:"Give customers a clear, useful online experience that makes the next step obvious.", tags:["Business websites","Online stores","Integrations"], visual:"web", color:"violet" },
  { n:"03", slug:"data-analytics-business-intelligence", title:"Data Analytics & Reporting", short:"Find the signal in your data.", body:"Organize spreadsheets, reporting and business information so it is easier to understand.", tags:["Data organization","Dashboards","Reporting"], visual:"data", color:"mint" },
  { n:"04", slug:"seo-ai-search-visibility", title:"SEO & AI Search Visibility", short:"Be easier to discover.", body:"Strengthen the technical structure and content that help search platforms understand your business.", tags:["Technical SEO","Indexing checks","AI search readiness"], visual:"search", color:"sky" },
  { n:"05", slug:"digital-marketing-creative-solutions", title:"Digital Marketing & Advertising", short:"Make every campaign intentional.", body:"Connect campaign goals, creative, audience targeting and performance measurement.", tags:["Google & Meta Ads","Social media","Campaign reporting"], visual:"marketing", color:"amber" },
  { n:"06", slug:"creative-brand-solutions", title:"Creative & Brand Solutions", short:"Make your message memorable.", body:"Create consistent visual assets for campaigns, social channels and business communication.", tags:["Ad creatives","Brand assets","Presentations"], visual:"creative", color:"rose" },
];

const chapters = [
  { n:"01", kicker:"UNDERSTAND", title:"Start with the real problem.", copy:"We look at the objective, the people involved and the work that needs to happen. No unnecessary complexity before the need is clear.", label:"A clear objective", nodes:["Business goal","Current process","Success criteria"] },
  { n:"02", kicker:"CONNECT", title:"Design the system around it.", copy:"We map the right tools, content and workflow into one practical solution—with the scope and responsibilities agreed up front.", label:"A connected plan", nodes:["People","Tools","Workflow"] },
  { n:"03", kicker:"DELIVER", title:"Build. Review. Hand over.", copy:"We test the agreed deliverables, review them with you and make the next steps clear before handover.", label:"Ready for review", nodes:["Build","Quality check","Handover"] },
];

const faqs = [
  ["What does AMM Data Solutions do?","We deliver practical digital solutions across automation, websites, business data, SEO, marketing and creative services."],
  ["Can you work with businesses outside Pakistan?","Yes. We welcome inquiries from Pakistan and international markets. Scope, timeline and working arrangements are agreed for each project."],
  ["How is project pricing decided?","Pricing depends on requirements, complexity and scope. We clarify the work before discussing a suitable quote."],
];

function Brand({ footer = false }: { footer?: boolean }) {
  return <a className={footer ? "brand footerBrand" : "brand"} href="/" aria-label="AMM Data Solutions home"><AMMLogo height={footer ? 35 : 39} /></a>;
}

function ServiceArtwork({ type }: { type: string }) {
  if (type === "automation") return <div className="artwork artworkAutomation"><div className="autoRail"></div><span className="autoNode a1">IN</span><span className="autoNode a2">AI</span><span className="autoNode a3">OUT</span><i className="autoPulse"></i><div className="autoLabel">CONNECTED WORKFLOW</div></div>;
  if (type === "web") return <div className="artwork artworkWeb"><div className="browserFrame"><div className="browserTop"><i/><i/><i/><span>yourbusiness.com</span></div><div className="browserContent"><div className="browserCopy"><b>Build your<br/>next chapter.</b><i/><i/><em>Explore</em></div><div className="browserShape"><span/><b/></div></div><div className="browserFoot"><i/><i/><i/></div></div><div className="floatChip">RESPONSIVE ↗</div></div>;
  if (type === "data") return <div className="artwork artworkData"><div className="dataOrb"></div><div className="dataPanel"><small>BUSINESS OVERVIEW</small><b>Clearer signals</b><div className="dataChart">{[32,48,41,64,56,84,73,96].map((h,i)=><i key={i} style={{height:h+"%"}}/>)}</div><div className="dataLegend"><i/> ORGANIZED DATA <span>↗</span></div></div><span className="dataFloat">INSIGHT / 01</span></div>;
  if (type === "search") return <div className="artwork artworkSearch"><div className="searchPlanet"><div className="searchLens">⌕</div><span className="searchOrbit so1"/><span className="searchOrbit so2"/></div><div className="searchResults"><small>SEARCH VISIBILITY</small><i/><i/><i/><b>STRUCTURE · CONTENT · SIGNAL</b></div><span className="searchDot sd1"/><span className="searchDot sd2"/></div>;
  if (type === "marketing") return <div className="artwork artworkMarketing"><div className="campaignCard"><div className="campaignHead"><span>CAMPAIGN / 01</span><b>↗</b></div><div className="campaignGraphic"><span>MAKE<br/>IT MATTER.</span><i/></div><div className="campaignMetrics"><span><small>REACH</small><b>Audience</b></span><span><small>MEASURE</small><b>Outcomes</b></span></div></div><span className="campaignToken ct1">CREATIVE</span><span className="campaignToken ct2">TRACKING</span></div>;
  return <div className="artwork artworkCreative"><div className="creativePlane cp1">A</div><div className="creativePlane cp2">AMM</div><div className="creativePlane cp3">IDEA<br/>→ IMPACT</div><span className="creativeSpark">✳</span><span className="creativeCaption">VISUAL LANGUAGE / 01</span></div>;
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [contactOpen, setContactOpen] = useState(false);
  const [carouselPaused, setCarouselPaused] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const storyRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const track = carouselRef.current;
    let carouselTimer = 0;
    if (track && !carouselPaused && !reduceMotion) {
      carouselTimer = window.setInterval(() => {
        if (track.matches(":hover") || track.contains(document.activeElement)) return;
        const half = track.scrollWidth / 2;
        if (track.scrollLeft >= half - 3) track.scrollLeft = 0;
        else track.scrollLeft += 0.55;
      }, 28);
    }
    return () => { if (carouselTimer) window.clearInterval(carouselTimer); };
  }, [carouselPaused]);

  useEffect(() => {
    const section = storyRef.current;
    if (!section) return;
    let raf = 0;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const total = Math.max(1, section.offsetHeight - window.innerHeight);
        const progress = Math.min(1, Math.max(0, -rect.top / total));
        setScrollProgress(progress);
        setActiveChapter(Math.min(2, Math.floor(progress * 3.01)));
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);

  const moveCarousel = (direction: number) => {
    const track = carouselRef.current;
    if (track) track.scrollBy({ left: direction * Math.min(track.clientWidth * 0.76, 390), behavior: "smooth" });
  };

  return <main className="ammSite">
    <nav className="siteNav" aria-label="Main navigation">
      <Brand />
      <div className="navLinks"><a href="#capabilities">Capabilities</a><a href="#approach">Approach</a><a href="#about">About</a></div>
      <button className="navCta" type="button" onClick={() => setContactOpen(true)}>Let’s talk <span>↗</span></button>
    </nav>

    <section className="cinemaHero" aria-labelledby="hero-title">
      <div className="heroAtmosphere heroAtmosphereOne"/><div className="heroAtmosphere heroAtmosphereTwo"/>
      <div className="heroCopy">
        <div className="overline"><span className="overlineSignal"/> AMM DATA SOLUTIONS <i/> LET’S MAKE SOLUTIONS</div>
        <h1 id="hero-title">Business work,<br/><span>reimagined.</span></h1>
        <p>We turn repetitive business work into smart, organized and automated systems—supported by digital experiences and creative execution.</p>
        <div className="heroButtons"><a className="buttonPrimary" href="#capabilities">Explore our capabilities <span>↘</span></a><a className="buttonText" href="#contact">Discuss a project <span>↗</span></a></div>
        <div className="heroProof"><span><i/> Clear scope</span><span><i/> Practical delivery</span><span><i/> Pakistan + worldwide</span></div>
      </div>
      <div className="heroScene" aria-label="A connected digital ecosystem around the AMM brand" onPointerMove={(event) => { const rect = event.currentTarget.getBoundingClientRect(); const x = (event.clientX - rect.left) / rect.width - 0.5; const y = (event.clientY - rect.top) / rect.height - 0.5; event.currentTarget.style.setProperty("--core-x", (x * -14) + "px"); event.currentTarget.style.setProperty("--core-y", (y * -12) + "px"); event.currentTarget.style.setProperty("--node-x", (x * 8) + "px"); event.currentTarget.style.setProperty("--node-y", (y * 7) + "px"); }} onPointerLeave={(event) => { event.currentTarget.style.setProperty("--core-x", "0px"); event.currentTarget.style.setProperty("--core-y", "0px"); event.currentTarget.style.setProperty("--node-x", "0px"); event.currentTarget.style.setProperty("--node-y", "0px"); }}>
        <div className="sceneGrid"/><div className="sceneAura"/>
        <div className="sceneOrbit sceneOrbitA"/><div className="sceneOrbit sceneOrbitB"/><div className="sceneOrbit sceneOrbitC"/>
        <div className="sceneRing ringFront"/><div className="sceneRing ringBack"/>
        <div className="sceneCore"><div className="coreGlass"><AMMLogo height={42}/><span>CONNECTED BY PURPOSE</span></div><div className="coreLight"/></div>
        <div className="sceneNode sceneNodeOne"><span className="nodeIcon">↗</span><small>01 / INPUT</small><b>Business need</b><i>Intent</i></div>
        <div className="sceneNode sceneNodeTwo"><span className="nodeIcon">⌘</span><small>02 / SYSTEM</small><b>Connected tools</b><i>Workflow</i></div>
        <div className="sceneNode sceneNodeThree"><span className="nodeIcon">✳</span><small>03 / OUTPUT</small><b>Useful outcome</b><i>Clarity</i></div>
        <div className="sceneNode sceneNodeFour"><span className="nodeIcon">◎</span><small>04 / REVIEW</small><b>Human review</b><i>Control</i></div>
        <div className="scenePath pathOne"><span/></div><div className="scenePath pathTwo"><span/></div><div className="scenePath pathThree"><span/></div>
        <div className="sceneTag sceneTagA">OBJECTIVE-LED <b>●</b></div><div className="sceneTag sceneTagB">DESIGN <i>→</i> BUILD <i>→</i> REVIEW</div>
        <div className="sceneIndex">SYSTEM STUDY <strong>001</strong><span>FIG. AMM / 26</span></div>
      </div>
      <div className="heroFooterLine"><span>01 — INTRODUCTION</span><span>THOUGHTFUL SYSTEMS. USEFUL OUTCOMES.</span><a href="#approach">SCROLL TO EXPLORE <b>↓</b></a></div>
    </section>

    <section className="introBand" aria-label="AMM approach summary"><span className="introMark">AMM<span>.</span></span><p>Not more tools for the sake of tools.<br/><strong>Better-connected work, designed around your objective.</strong></p><span className="introBandIndex">A PRACTICAL DIGITAL PARTNER <i>↗</i></span></section>

    <section id="approach" ref={storyRef} className="storySection">
      <div className="storySticky">
        <div className="storyHeader"><div className="overline overlineLight"><span className="overlineSignal"/> HOW WE WORK</div><div className="storyProgress"><span>THE AMM METHOD</span><div><i style={{transform:"scaleX("+Math.max(0.04,scrollProgress)+")"}}/></div><b>0{activeChapter+1}<small> / 03</small></b></div></div>
        <div className="storyGrid">
          <div className="storyText">
            {chapters.map((chapter, index) => <article key={chapter.n} className={"storyChapter" + (activeChapter === index ? " isActive" : "")} aria-current={activeChapter === index ? "step" : undefined}>
              <span className="chapterNumber">{chapter.n} <i>—</i> {chapter.kicker}</span>
              <h2>{chapter.title}</h2><p>{chapter.copy}</p>
              <div className="chapterMini"><span className="miniSignal"/> {chapter.label}</div>
            </article>)}
          </div>
          <div className={"storyVisual storyVisual"+(activeChapter+1)}>
            <div className="storyVisualTop"><span>AMM / SYSTEM MAP</span><span>LIVE SCENE <i/></span></div>
            <div className="storyUniverse">
              <div className="universeOrbit uo1"/><div className="universeOrbit uo2"/><div className="universeOrbit uo3"/>
              <div className="universeCore"><AMMLogo height={31}/><small>{chapters[activeChapter].label.toUpperCase()}</small></div>
              {chapters[activeChapter].nodes.map((node, index) => <div className={"universeNode universeNode"+index} key={node}><span>{String(index+1).padStart(2,"0")}</span><b>{node}</b><i/></div>)}
              <svg className="universeConnections" viewBox="0 0 560 440" aria-hidden="true"><path d="M280 220 L145 120 L108 294 L280 220 L418 115 L458 300 L280 220" /><path d="M145 120 L418 115 M108 294 L458 300" /></svg>
              <div className="universeBeam beamOne"/><div className="universeBeam beamTwo"/>
            </div>
            <div className="storyVisualBottom"><span>OBJECTIVE <b>→</b> SYSTEM <b>→</b> OUTCOME</span><span>SCENE 0{activeChapter+1}</span></div>
          </div>
        </div>
        <div className="storyFooter"><span>THOUGHTFUL BY DESIGN</span><span>SCROLL-LED STORY / 0{activeChapter+1}</span></div>
      </div>
    </section>

    <section id="capabilities" className="capabilitiesSection">
      <div className="sectionHeading"><div><div className="overline"><span className="overlineSignal"/> WHAT WE DO</div><h2>Six capabilities.<br/><span>One connected approach.</span></h2></div><p>Choose a capability to explore. Each solution starts with your objective—not a one-size-fits-all package.</p></div>
      <div className="serviceControls"><span><i/> DRAG OR SCROLL TO EXPLORE</span><div><button type="button" aria-label="Previous services" onClick={() => moveCarousel(-1)}>←</button><button type="button" aria-label="Next services" onClick={() => moveCarousel(1)}>→</button><button type="button" aria-label={carouselPaused ? "Resume service motion" : "Pause service motion"} onClick={() => setCarouselPaused(!carouselPaused)}>{carouselPaused ? "▶" : "Ⅱ"}</button></div></div>
      <div className="serviceViewport" ref={carouselRef} onFocusCapture={() => setCarouselPaused(true)} onBlurCapture={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setCarouselPaused(false); }} aria-label="AMM service capabilities">
        <div className="serviceTrack">{[0,1].map(copy => <div className="serviceSet" key={copy} aria-hidden={copy === 1 ? true : undefined}>{services.map(service => <a key={service.n} className={"capabilityCard card"+service.n+" tone"+service.color} href={"/services/"+service.slug} tabIndex={copy === 1 ? -1 : undefined}>
          <div className="cardTopline"><span>CAPABILITY / {service.n}</span><span className="cardOpen">↗</span></div>
          <ServiceArtwork type={service.visual}/>
          <div className="cardContent"><h3>{service.title}</h3><h4>{service.short}</h4><p>{service.body}</p><div className="cardTags">{service.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
          <div className="cardBottom"><span>EXPLORE CAPABILITY</span><b>↗</b></div>
        </a>)}</div>)}</div>
      </div>
      <div className="capabilityFoot"><span>01 — 06 / AMM CAPABILITIES</span><span>SWIPE, DRAG OR USE ARROWS <b>↔</b></span></div>
    </section>

    <section id="about" className="aboutSection">
      <div className="aboutVisual">
        <div className="aboutBlueprint"><span>AMM / BRAND SYSTEM</span><div className="blueprintGrid"/><div className="aboutLogoHalo"><div><AMMLogo height={66}/></div></div><div className="blueprintAxis axisH"/><div className="blueprintAxis axisV"/><span className="blueprintCoord coordA">24°51' N</span><span className="blueprintCoord coordB">67°00' E</span><span className="blueprintLabel">LET’S MAKE SOLUTIONS</span></div>
      </div>
      <div className="aboutCopy"><div className="overline"><span className="overlineSignal"/> ABOUT AMM</div><h2>Business-minded thinking.<br/><span>Digital execution.</span></h2><p>AMM Data Solutions brings digital systems, business information and creative execution together through a practical, scope-led delivery model.</p><p>We value clear communication, thoughtful implementation and solutions that are useful after handover.</p><div className="aboutValues"><span><b>01</b> Clear scope</span><span><b>02</b> Useful outcomes</span><span><b>03</b> Human review</span></div><a className="buttonText" href="#contact">Get to know our approach <span>↘</span></a></div>
    </section>

    <section className="deliveryStrip"><div className="deliveryStripIntro"><div className="overline"><span className="overlineSignal"/> BUILT AROUND YOUR OBJECTIVE</div><h2>Clarity before complexity.</h2></div><div className="deliverySteps"><div><span>01</span><b>Understand</b><small>Define the need</small></div><i>→</i><div><span>02</span><b>Build</b><small>Design the solution</small></div><i>→</i><div><span>03</span><b>Review</b><small>Agree the handover</small></div></div></section>

    <section id="contact" className="contactSection"><div className="contactAtmosphere"/><div className="contactVisual"><div className="contactOrb orbLarge"/><div className="contactOrb orbSmall"/><div className="contactBrandCore"><AMMLogo height={45}/><span>LET’S MAKE SOLUTIONS</span></div><div className="contactOrbitDot dotA"/><div className="contactOrbitDot dotB"/><div className="contactOrbitDot dotC"/></div><div className="contactCopy"><div className="overline overlineLight"><span className="overlineSignal"/> START WITH THE BUSINESS OBJECTIVE</div><h2>What needs to work<br/><span>better?</span></h2><p>Tell us what you’re trying to improve. We’ll help clarify a practical next step and the scope it may need.</p><button className="buttonPrimary" type="button" onClick={() => setContactOpen(true)}>Let’s talk <span>↗</span></button><span className="contactFootnote">NO PRESSURE. JUST A CLEAR STARTING POINT.</span></div></section>

    <section className="faqSection"><div className="faqIntro"><div className="overline"><span className="overlineSignal"/> GOOD TO KNOW</div><h2>Before we begin<span>.</span></h2><p>A few quick answers about working with AMM.</p></div><div className="faqList">{faqs.map((faq,index) => <div className={"faqItem"+(openFaq === index ? " faqOpen" : "")} key={faq[0]}><button type="button" className="faqQuestion" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)}><span>{faq[0]}</span><i>{openFaq === index ? "−" : "+"}</i></button>{openFaq === index && <p>{faq[1]}</p>}</div>)}</div></section>

    <footer className="siteFooter"><div className="footerMain"><div><Brand footer/><p>Practical digital systems.<br/>Creative solutions with purpose.</p></div><div className="footerLinks"><a href="#capabilities">Capabilities</a><a href="#approach">Our approach</a><a href="#about">About AMM</a><button type="button" onClick={() => setContactOpen(true)}>Let’s talk ↗</button></div><div className="footerSlogan">LET’S MAKE<br/><span>SOLUTIONS.</span><i>●</i></div></div><div className="footerBase"><span>© 2026 AMM Data Solutions</span><span>PAKISTAN + WORLDWIDE</span><span>A PRACTICAL DIGITAL PARTNER</span></div></footer>

    {contactOpen && <div className="contactBackdrop" onClick={() => setContactOpen(false)}><section className="contactDialog" role="dialog" aria-modal="true" aria-labelledby="contactDialogTitle" onClick={e => e.stopPropagation()}><button className="dialogClose" type="button" aria-label="Close contact options" onClick={() => setContactOpen(false)}>×</button><div className="overline"><span className="overlineSignal"/> CONNECT WITH AMM</div><h2 id="contactDialogTitle">Let’s start with a conversation.</h2><p>Choose the contact channel that works for you.</p><a className="dialogOption" href="mailto:ammdatasolutions229@gmail.com?subject=Project%20inquiry%20-%20AMM%20Data%20Solutions"><span className="dialogIcon">@</span><span><b>Email AMM Data Solutions</b><small>Share your project requirements</small></span><strong>↗</strong></a><a className="dialogOption" href="https://www.linkedin.com/in/abdullah-mumtaz-malik-975a93240/" target="_blank" rel="noreferrer"><span className="dialogIcon">in</span><span><b>LinkedIn</b><small>Connect professionally</small></span><strong>↗</strong></a></section></div>}
  </main>;
}
