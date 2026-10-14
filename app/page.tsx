"use client";

import { useEffect, useRef, useState } from "react";
import AMMLogo from "../logo/AMMLogo";

const services = [
  { n:"01", slug:"ai-automation-business-systems", title:"AI Automation & Business Systems", plain:"Less busywork. More control.", body:"Connect repetitive tasks, lead tracking and customer workflows so work moves forward with fewer manual steps.", examples:["Workflow automation","Lead capture and follow-up systems","Business process setup"], visual:"workflow" },
  { n:"07", slug:"ai-chatbots-virtual-assistants", title:"AI Chatbots & Virtual Assistants", plain:"Helpful answers. More opportunities.", body:"Offer AI-powered assistants that answer business FAQs, guide website visitors, support shopping questions or help customers request appointments.", examples:["Website AI chatbots","Lead generation bots","E-commerce assistant bots","Appointment booking bots"], visual:"bots" },
  { n:"02", slug:"website-ecommerce-solutions", title:"Web & E-commerce Solutions", plain:"A stronger digital front door.", body:"Build a clear, credible online presence that helps customers understand your offer and take action.", examples:["Business websites","Online stores and product catalogs","Landing pages and integrations"], visual:"web" },
  { n:"03", slug:"data-analytics-business-intelligence", title:"Data Analytics & Reporting", plain:"Turn scattered data into clarity.", body:"Bring spreadsheets, reporting and business information into a format that supports better decisions.", examples:["Spreadsheet automation","Dashboards and recurring reports","Data cleaning and validation"], visual:"data" },
  { n:"04", slug:"seo-ai-search-visibility", title:"SEO & AI Search Visibility", plain:"Make your business easier to discover.", body:"Improve the structure and content that helps search platforms understand your business.", examples:["Technical SEO checks","Content and structured data","Indexing and search visibility monitoring"], visual:"search" },
  { n:"05", slug:"digital-marketing-creative-solutions", title:"Digital Marketing & Advertising", plain:"Campaigns built around clear goals.", body:"Plan and manage digital campaigns with suitable creative, conversion tracking and performance reporting.", examples:["Google Ads and Meta Ads","Social media marketing","Campaign tracking and reporting"], visual:"ads" },
  { n:"06", slug:"creative-brand-solutions", title:"Creative & Brand Solutions", plain:"Creative that supports business goals.", body:"Create consistent visual assets that communicate your offer clearly across digital channels.", examples:["Social media and ad creatives","Brand assets and marketing graphics","Presentations and report design"], visual:"creative" },
];
const process = [
  ["01","Understand the objective","We clarify the business goal, current process and what a useful result should look like."],
  ["02","Scope the right solution","We agree on deliverables, tools, timeline and responsibilities before work begins."],
  ["03","Build, review and hand over","We review the output with you and explain how to use the delivered solution."],
];
const faqs = [
  ["What does AMM Data Solutions do?","We deliver digital systems and creative services across AI chatbots, automation, websites, business data, search visibility, lead generation and marketing."],
  ["Do you work with businesses outside Pakistan?","Yes. We welcome inquiries from Pakistan and international markets. Scope, timeline and working arrangements are agreed for each project."],
  ["How much does a project cost?","Pricing depends on the scope and requirements. Share what you need and we can discuss a practical scope before quoting."],
];
function Brand({ footer=false }: { footer?: boolean }) {
  return <a className={footer ? "brand footerBrand" : "brand"} href="/" aria-label="AMM Data Solutions home"><AMMLogo height={38} /></a>;
}
function ServiceVisual({ type }: { type: string }) {
  if (type === "workflow") return <div className="serviceVisual visualWorkflow"><span>REQUEST</span><i>→</i><span>PROCESS</span><i>→</i><b>RESULT</b></div>;
  if (type === "bots") return <div className="serviceVisual visualWorkflow"><span>ASK</span><i>→</i><span>AI BOT</span><i>→</i><b>NEXT STEP</b></div>;
  if (type === "web") return <div className="serviceVisual visualWeb"><div className="webBar"><i/><i/><i/></div><div className="webHeroLine"/><div className="webHeroLine short"/><div className="webButton"/><div className="webBlocks"><i/><i/><i/></div></div>;
  if (type === "data") return <div className="serviceVisual visualData"><div className="dataMetric"><small>OVERVIEW</small><b>Clearer signals</b></div><div className="dataBars"><i/><i/><i/><i/><i/><i/><i/></div></div>;
  if (type === "search") return <div className="serviceVisual visualSearch"><span className="searchRing">⌕</span><div><b>DISCOVERABILITY</b><i/><i/><i/></div></div>;
  if (type === "leads") return <div className="serviceVisual visualLeads"><div><i/> Prospect identified</div><div><i/> Follow-up planned</div><div><i/> Next step tracked</div></div>;
  if (type === "ads") return <div className="serviceVisual visualAds"><div className="adsTop"><span>CAMPAIGN PERFORMANCE</span><b>↗</b></div><div className="adsMetrics"><div><small>REACH</small><i/><i/><i/></div><div><small>CONVERSIONS</small><strong>Goal-led</strong><span>Track · Learn · Improve</span></div></div><div className="adsPlatforms"><b>Google Ads</b><b>Meta Ads</b><span>AI-assisted</span></div></div>;
  return <div className="serviceVisual visualCreative"><div className="creativeTile one">A</div><div className="creativeTile two">AMM</div><div className="creativeTile three">IDEA<br/>→ IMPACT</div></div>;
}
  const demoFlows=[
    {scene:"automation",service:"AI AUTOMATION",message:"Can AMM automate repetitive business tasks?"},
    {scene:"chatbot",service:"AI CHATBOTS",message:"Can you build an AI chatbot for my website?"},
    {scene:"website",service:"WEBSITES & E-COMMERCE",message:"I need a professional business website."},
    {scene:"data",service:"DATA & REPORTING",message:"Can you organize my spreadsheets and reports?"},
    {scene:"seo",service:"GOOGLE + AI SEO",message:"How can my business improve search visibility?"},
    {scene:"marketing",service:"DIGITAL ADVERTISING",message:"Can AMM help with Google and Meta ads?"},
    {scene:"creative",service:"CREATIVE DESIGN",message:"I need branded social media designs."}
  ];

function DemoWorkflow({ scene, historical=false }: { scene: string; historical?: boolean }) {
  const labels:Record<string,string>={idle:"WORKFLOW",automation:"AI AUTOMATION",chatbot:"AI CHATBOTS",website:"WEB & E-COMMERCE",data:"DATA & REPORTING",seo:"SEO + AI SEARCH",marketing:"DIGITAL ADS",creative:"CREATIVE & BRAND"};
  return <div className={`heroWorkPreview historyWorkPreview work-${scene}`} aria-label={`${scene} workflow animation`}>
    <div className="heroWorkHead"><span className="heroWorkLive"><i/> WORKFLOW VISUAL</span>{!historical&&<span>{labels[scene]||"WORKFLOW"}</span>}</div>
    {scene==="automation"&&<div className="workflowAnimation"><div className="workflowNode activeNode"><b>01</b><span>New lead</span></div><i className="workflowConnector"/><div className="workflowNode"><b>02</b><span>Auto follow-up</span></div><i className="workflowConnector"/><div className="workflowNode"><b>03</b><span>Track status</span></div></div>}
    {scene==="chatbot"&&<div className="botAnimation"><div className="botFace"><span/><span/><i/></div><div className="botReplyLines"><i/><i/><i/></div><div className="botSpark">✦</div></div>}
    {scene==="website"&&<div className="websiteAnimation"><div className="siteMockTop"><i/><i/><i/></div><div className="siteMockHero"><div><b/><i/><i/><span/></div><div className="siteMockImage"/></div><div className="siteMockCards"><i/><i/><i/></div></div>}
    {scene==="data"&&<div className="dataAnimation"><div className="dataBigNumber"><small>REPORT SNAPSHOT</small><b>Clearer insights</b><span>Updating dashboard…</span></div><div className="dataAnimationBars"><i/><i/><i/><i/><i/><i/><i/></div></div>}
    {scene==="seo"&&<div className="seoAnimation"><div className="seoSearchBar"><span>⌕</span><i/></div><div className="seoResult"><b/><i/><i/></div><div className="seoResult secondResult"><b/><i/><i/></div><span className="seoScan">SCANNING STRUCTURE</span></div>}
    {scene==="marketing"&&<div className="marketingAnimation"><div className="marketingCard"><span>CAMPAIGN</span><b>Right audience</b><i/><i/><small>Track · Learn · Improve</small></div><div className="marketingOrbit"><i/><i/><i/></div></div>}
    {scene==="creative"&&<div className="creativeAnimation"><div className="creativePoster"><span>AMM / STUDIO</span><b>IDEA<br/>→ IMPACT</b><i/></div><div className="creativeSwatches"><i/><i/><i/></div></div>}
  </div>;
}
export default function Home() {
  const [openFaq,setOpenFaq]=useState<number|null>(null);
  const [contactOpen,setContactOpen]=useState(false);
  const [demoMessage,setDemoMessage]=useState("");
  const [demoDraft,setDemoDraft]=useState("");
  const [demoSent,setDemoSent]=useState(false);
  const [demoService,setDemoService]=useState("AI AUTOMATION");
  const [demoHistory,setDemoHistory]=useState<Array<{message:string;service:string;scene:string}>>([]);
  const demoMessagesRef=useRef<HTMLDivElement|null>(null);
  const [demoScene,setDemoScene]=useState("idle");
  const [demoTyping,setDemoTyping]=useState(true);
  const demoSceneLabels:Record<string,string>={idle:"READY",automation:"AI AUTOMATION",chatbot:"AI CHATBOTS",website:"WEB & E-COMMERCE",data:"DATA & REPORTING",seo:"SEO + AI SEARCH",marketing:"DIGITAL ADS",creative:"CREATIVE & BRAND"};
  const demoSceneLabel=demoSceneLabels[demoScene]||"WORKFLOW";
  useEffect(()=>{const el=demoMessagesRef.current;if(el)el.scrollTop=el.scrollHeight;},[demoHistory,demoMessage,demoDraft]);
  useEffect(()=>{
    let cancelled=false;
    let timer:ReturnType<typeof setTimeout>|undefined;
    const wait=(ms:number)=>new Promise<void>(resolve=>{timer=setTimeout(resolve,ms);});
    const cycle=async()=>{
      let index=0;
      while(!cancelled){
        const flow=demoFlows[index%demoFlows.length];
        setDemoMessage("");setDemoDraft("");setDemoSent(false);setDemoTyping(false);
        await wait(850);
        setDemoTyping(true);
        for(let n=1;n<=flow.message.length;n++){
          if(cancelled)return;
          setDemoDraft(flow.message.slice(0,n));
          await wait(58);
        }
        if(cancelled)return;
        setDemoTyping(false);
        await wait(850);
        if(cancelled)return;
        setDemoMessage(flow.message);setDemoDraft("");setDemoSent(true);setDemoScene(flow.scene);setDemoService(flow.service);
        await wait(650);
        if(cancelled)return;
        await wait(5200);
        if(cancelled)return;
        setDemoHistory(previous=>[...previous,{message:flow.message,service:flow.service,scene:flow.scene}].slice(-2));
        index++;
      }
    };
    void cycle();
    return ()=>{cancelled=true;if(timer)clearTimeout(timer);};
  },[]);
  return <main>
    <nav className="nav" aria-label="Main navigation">
      <Brand />
      <div className="navlinks"><a href="#services">Capabilities</a><a href="#how">Our approach</a><a href="#about">About AMM</a></div>
      <button className="navcta" type="button" onClick={()=>setContactOpen(true)}>Discuss a project <span>↗</span></button>
    </nav>
    <section className="hero">
      <div className="heroInner">
        <div className="eyebrow"><span className="eyebrowLine"/> DIGITAL SYSTEMS. PRACTICAL EXECUTION.</div>
        <h1>Business Automation<br/><span>& Digital Solutions</span></h1>
        <p className="heroText">AMM Data Solutions helps businesses in Pakistan and beyond improve workflows, build websites, organize business data and strengthen online visibility.</p>
        <div className="heroActions"><a className="primary" href="#services">Explore capabilities <span>↗</span></a><a className="textLink" href="#contact">Tell us your objective <span>→</span></a></div>
        <div className="heroMeta"><span><i/> Clear scope and deliverables</span><span><i/> Pakistan and international projects</span></div>
      </div>
      <div className="heroArt heroChatArt" aria-label="Interactive animated preview of AMM's website assistant">
        <div className="heroChatGlow"/>
        <div className="heroChatOrbit heroChatOrbitOne"/>
        <div className="heroChatOrbit heroChatOrbitTwo"/>
        <div className="heroChatPreview">
          <div className="heroChatTop">
            <div className="heroChatAvatar" aria-label="AMM Data Solutions logo"><AMMLogo height={25} /></div>
            <div className="heroChatIdentity"><strong>AMM Assistant</strong><span><i/> Interactive service preview</span></div>
            <span className="heroChatMore" aria-hidden="true">•••</span>
          </div>
          <div ref={demoMessagesRef} className="heroChatMessages visualOnlyMessages" aria-live="polite">
            {demoHistory.map((item,index)=><div className="demoHistoryExchange" key={`${index}-${item.message}`}><div className="heroChatBubble userBubble historyUserBubble"><span className="bubbleName">YOU</span>{item.message}<span className="customerSentStatus">Sent ✓</span></div><DemoWorkflow scene={item.scene} historical /></div>)}
            {demoMessage && <div className="heroChatBubble userBubble"><span className="bubbleName">YOU</span>{demoMessage}{demoSent && <span className="customerSentStatus">Sent ✓</span>}</div>}
            {demoSent && <DemoWorkflow scene={demoScene} historical />}
            {demoTyping && !demoMessage && <div className="heroAutoTyping"><i/><i/><i/><small>Preparing message…</small></div>}
          </div>


          <div className="heroChatComposer demoComposer" aria-label="Live demo message composer">
            <div className="demoComposerText">{demoDraft || (demoSent ? "Message sent" : "Type a message…")}{demoTyping && demoDraft && <span className="demoCaret" aria-hidden="true"/>}</div>
            <button type="button" className="demoSendButton" aria-label="Send message" disabled={!demoDraft}><span>➤</span></button>
          </div>
          <div className="heroChatCaption"><span className="heroChatPulse"/> 7 AMM SERVICES <span>AUTO DEMO</span></div>
        </div>
        <div className="heroChatFloat floatTop"><span>✦</span> Animated workflows</div>
        <div className="heroChatFloat floatBottom"><span>↗</span> From question to next step</div>
      </div>
      <div className="heroBottomLine"><span>AMM DATA SOLUTIONS</span><span>LET’S MAKE SOLUTIONS</span><span>EXPLORE OUR CAPABILITIES ↓</span></div>
    </section>
    <section className="intro section"><div className="eyebrow">BUILT AROUND THE OBJECTIVE</div><div><h2>Technology is only useful when it <span>solves the right problem.</span></h2><p>We start with the outcome, shape a sensible scope, and deliver practical digital work without unnecessary complexity.</p></div></section>
    <section id="services" className="services section">
      <div className="sectionHead"><div><div className="eyebrow">OUR CAPABILITIES</div><h2>Seven capabilities. One practical approach<span className="yellowDot">.</span></h2></div><p>Practical solutions across automation, AI chatbots, websites, data, search visibility, marketing and creative work.</p></div>
      <div className="serviceGrid">{services.map(s=><a className={`serviceCard serviceCard-${s.n}`} href={`/services/${s.slug}`} key={s.n}><div className="serviceCardTop"><span className="serviceNumber">CAPABILITY / {s.n}</span><span className="serviceArrow">↗</span></div><ServiceVisual type={s.visual}/><h3>{s.title}</h3><h4>{s.plain}</h4><p>{s.body}</p><ul>{s.examples.map(x=><li key={x}>{x}</li>)}</ul><div className="whiteLabelStrip"><span className="whiteLabelIcon" aria-hidden="true"><svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="m11 17 2 2a2 2 0 0 0 3-3"/><path d="m14 14 2.5 2.5a2 2 0 0 0 3-3l-3.9-3.9a3 3 0 0 0-4.2 0l-.9.9a2 2 0 0 1-3-3l2.8-2.8a5.8 5.8 0 0 1 7.1-.9l.5.3a2 2 0 0 0 2 .1L21 3"/><path d="M3 3 2 14l6.5 6.5a2 2 0 0 0 3-3"/><path d="M3 3h8l3 3"/><path d="m8 13 4 4"/></svg></span><span>WHITE-LABEL PARTNERSHIPS</span><span className="whiteLabelArrow" aria-hidden="true">↗</span></div><div className="cardLink">View capability <span>↗</span></div></a>)}</div>
    </section>
    <section id="how" className="how section"><div className="howIntro"><div className="eyebrow">A CLEAR DELIVERY MODEL</div><h2>Defined scope.<br/><span>Thoughtful execution.</span></h2><p>Every engagement has a clear objective, an agreed scope and a review before handover.</p><a className="textLink" href="#contact">Discuss your requirements <span>→</span></a></div><div className="processList">{process.map(p=><div className="processItem" key={p[0]}><span className="processNumber">{p[0]}</span><div><h3>{p[1]}</h3><p>{p[2]}</p></div><span className="processArrow">↗</span></div>)}</div></section>
    <section className="trustBand" aria-label="AMM delivery principles"><div><span>01</span><b>Scope before build</b><p>Deliverables and expectations are agreed up front.</p></div><div><span>02</span><b>Human-reviewed work</b><p>Outputs are reviewed before handover.</p></div><div><span>03</span><b>Practical handover</b><p>Know what was delivered and what happens next.</p></div></section>
    <section id="about" className="about section"><div className="aboutVisual"><div className="aboutLogoFrame"><AMMLogo className="ammAboutLogo" height={72} /></div><div className="aboutAccent">LET’S MAKE SOLUTIONS<span>●</span></div></div><div className="aboutCopy"><div className="eyebrow">ABOUT AMM DATA SOLUTIONS</div><h2>Business-minded thinking.<br/><span>Digital execution.</span></h2><p>AMM Data Solutions brings automation, digital systems, business information and creative services together under one practical delivery approach. We work with organizations that value clear communication, thoughtful scope and useful outcomes.</p><div className="aboutTags"><span>Pakistan-based</span><span>International inquiries welcome</span><span>Scope-led delivery</span></div></div></section>
    <section id="contact" className="contact section"><div className="contactGlow"></div><div className="contactInner"><div className="eyebrow"><span className="eyebrowLine"/> START WITH THE BUSINESS OBJECTIVE</div><h2>What needs to work<br/><span>better?</span></h2><p>Share the challenge, goal or idea. We’ll help clarify a sensible next step and the scope it may require.</p><a className="primary" href="mailto:ammdatasolutions229@gmail.com?subject=Project%20inquiry%20-%20AMM%20Data%20Solutions">Discuss your project <span>↗</span></a><a className="contactEmail" href="mailto:ammdatasolutions229@gmail.com?subject=Project%20inquiry%20-%20AMM%20Data%20Solutions">Email AMM Data Solutions</a></div></section>
    <section className="faq section"><div><div className="eyebrow">GOOD TO KNOW</div><h2>Before we begin<span className="yellowDot">.</span></h2></div><div className="faqList">{faqs.map((f,i)=><div className="faqItem" key={f[0]}><button className="faqQuestion" aria-expanded={openFaq===i} onClick={()=>setOpenFaq(openFaq===i?null:i)}>{f[0]}<span>{openFaq===i?"−":"+"}</span></button>{openFaq===i&&<p>{f[1]}</p>}</div>)}</div></section>
    <footer><div className="footerTop"><Brand footer/><p>Digital systems, business intelligence and creative execution.</p><a className="footerContact" href="#contact">Discuss a project ↗</a></div><div className="footerBottom"><span>© 2026 AMM Data Solutions</span><span>Automation · Websites · Data · SEO · Marketing · Creative</span><span>Pakistan and worldwide</span></div></footer>
    {contactOpen && <div className="contactModalBackdrop" onClick={()=>setContactOpen(false)}><section className="contactModal" role="dialog" aria-modal="true" aria-labelledby="contactModalTitle" onClick={e=>e.stopPropagation()}><button className="modalClose" type="button" aria-label="Close contact options" onClick={()=>setContactOpen(false)}>×</button><div className="eyebrow"><span className="eyebrowLine"/> GET IN TOUCH</div><h2 id="contactModalTitle">How would you like to connect?</h2><p>Choose the contact channel that works best for you.</p><a className="contactOption" href="mailto:ammdatasolutions229@gmail.com?subject=Project%20inquiry%20-%20AMM%20Data%20Solutions"><span className="contactOptionIcon">@</span><span><b>Email</b><small>Send a project inquiry directly</small></span><strong>→</strong></a><a className="contactOption" href="https://www.linkedin.com/in/abdullah-mumtaz-malik-975a93240/" target="_blank" rel="noreferrer"><span className="contactOptionIcon">in</span><span><b>LinkedIn</b><small>Connect professionally</small></span><strong>→</strong></a></section></div>}
  </main>;
}
