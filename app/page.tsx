"use client";

import { useEffect, useRef, useState } from "react";
import AMMLogo from "../logo/AMMLogo";

const services = [
  { n:"01", slug:"ai-automation-business-systems", title:"AI Automation & Business Systems", plain:"Less busywork. More control.", body:"Connect repetitive tasks, lead tracking and customer workflows so work moves forward with fewer manual steps.", examples:["Workflow automation","Lead capture and follow-up systems","Business process setup"], visual:"workflow" },
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
  if (type === "ads") return <div className="serviceVisual visualAds"><div className="adsTop"><span>CAMPAIGN PERFORMANCE</span><b>↗</b></div><div className="adsMetrics"><div><small>REACH</small><i/><i/><i/></div><div><small>CONVERSIONS</small><strong>Goal-led</strong><span>Track · Learn · Improve</span></div></div><div className="adsPlatforms"><b>Google Ads</b><b>Meta Ads</b><span>AI-assisted</span></div></div>;
  return <div className="serviceVisual visualCreative"><div className="creativeTile one">A</div><div className="creativeTile two">AMM</div><div className="creativeTile three">IDEA<br/>→ IMPACT</div></div>;
}
export default function Home() {
  const [openFaq,setOpenFaq]=useState<number|null>(null);
  const [contactOpen,setContactOpen]=useState(false);
  const [serviceQuery,setServiceQuery]=useState("");
  const [activeExperience,setActiveExperience]=useState("");
  const [animationRun,setAnimationRun]=useState(0);
  const [submittedQuery,setSubmittedQuery]=useState("");
  const [conversation,setConversation]=useState<Array<{id:number;query:string;reply:string;kind:string;run:number}>>([]);
  const chatHistoryRef = useRef<HTMLDivElement|null>(null);
  useEffect(()=>{const history=chatHistoryRef.current;if(!history)return;history.scrollTo({top:history.scrollHeight,behavior:"smooth"});},[conversation.length]);
  const [autoDemoPaused,setAutoDemoPaused]=useState(false);
  useEffect(()=>{
    if(autoDemoPaused) return;
    let cancelled=false;
    const timers: ReturnType<typeof setTimeout>[]=[];
    const wait=(ms:number)=>new Promise<void>(resolve=>{const timer=setTimeout(resolve,ms);timers.push(timer);});
    const samples=[
      {query:"How can I automate customer inquiries and follow-ups?",kind:"automation",reply:"Here’s how a connected workflow can organize inquiries, prepare replies and support follow-ups."},
      {query:"How can my business become more visible on Google and AI search?",kind:"seo",reply:"Here’s a walkthrough of technical SEO checks, search content and AI search visibility."},
      {query:"Can you turn my Excel sales data into a clear dashboard?",kind:"data",reply:"Watch sample business data become an organized report with useful performance insights."},
      {query:"Can you build a website for my business?",kind:"web",reply:"Here’s how a business website can take shape, from structure to a polished page."},
      {query:"How would you plan a Facebook and Instagram ad campaign?",kind:"ads",reply:"Explore a sample campaign flow, creative direction and performance tracking."},
      {query:"Can you create a consistent brand and social media designs?",kind:"creative",reply:"Here’s a visual walkthrough of a consistent brand identity and creative asset system."}
    ];
    const runDemo=async()=>{
      await wait(900);
      for(let index=0;index<samples.length&&!cancelled;index++){
        const sample=samples[index];
        setServiceQuery("");
        for(let i=1;i<=sample.query.length&&!cancelled;i++){
          setServiceQuery(sample.query.slice(0,i));
          await wait(31);
        }
        if(cancelled) break;
        await wait(420);
        setAnimationRun(v=>v+1);
        setSubmittedQuery(sample.query);
        setActiveExperience(sample.kind);
        setConversation(items=>[...items,{id:Date.now()+index,query:sample.query,kind:sample.kind,run:index+1,reply:sample.reply}]);
        setServiceQuery("");
        await wait(7200);
      }
      if(!cancelled) await wait(500);
    };
    void runDemo();
    return ()=>{cancelled=true;timers.forEach(clearTimeout);};
  },[autoDemoPaused]);

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
      <div className="heroArt heroArtRefined" aria-label="Interactive AMM service experience">
        <div className="artHalo"></div><div className="orbit orbitA"></div><div className="orbit orbitB"></div>
        <div className="artCard artMain refinedSystemCard smartServiceCard">
          <div className="artTop"><span>AMM SMART SERVICE EXPERIENCE</span><span className="artStatus"><i/> LIVE DEMO</span></div>
          <div className="smartIntro"><div className="dashboardTitle">What would you like<br/><b>to make easier?</b></div><p>Tell us what your business needs. See how AMM could approach it.</p></div>
          
          <div className="smartChatHistory" ref={chatHistoryRef} aria-live="polite">
            {conversation.map((message)=><div className="smartConversationTurn" key={message.id}>
              <div className="smartChatUser"><span>{message.query}</span></div>
              <div className="smartChatReply smartLiveReply">
                <span className="smartChatAvatar"><AMMLogo height={18} className="smartChatAvatarLogo"/></span>
                <div className="smartLiveReplyBody">
                  <b>AMM Data Solutions <span className="smartLiveDot"/> Live walkthrough</b>
                  <p>{message.reply}</p>
                  <div className={`smartScene smartScene-${message.kind}`} key={`${message.kind}-${message.run}`}>
                    <div className="smartSceneHead"><span className="smartSceneLive"><i/> LIVE WORKFLOW</span></div>
                    {message.kind==="automation" && <><div className="smartSceneTitle">Manual work → Smart workflow</div><div className="smartFlowSteps"><div><span>✎</span><b>Tasks</b><small>Manual input</small></div><i>→</i><div><span>⌘</span><b>Connect</b><small>Automation</small></div><i>→</i><div><span>✓</span><b>Done</b><small>Clear output</small></div></div><div className="smartProgress"><i/></div><div className="smartSceneFoot">REPETITIVE TASKS, CONNECTED AND ORGANIZED</div></>}
                    {message.kind==="seo" && <><div className="smartSceneTitle">Be visible in Search and AI</div><div className="smartSeoSplit"><div><span className="smartSearchGlyph">⌕</span><b>Google Search</b><small>Organic visibility</small><div className="smartSearchLines"><i/><i/><i/></div></div><div><span className="smartAiGlyph">✳</span><b>AI Search</b><small>Answer visibility</small><div className="smartAiAnswer"><i/><i/></div></div></div><div className="smartConnectLine"><i/> ONE CONNECTED SEO STRATEGY <i/></div><div className="smartSceneFoot">ANALYZE → OPTIMIZE → MONITOR</div></>}
                    {message.kind==="web" && <><div className="smartSceneTitle">From idea to live website</div><div className="smartBrowser"><div className="smartBrowserTop"><i/><i/><i/><span>yourbusiness.com</span></div><div className="smartBrowserBody"><div className="smartWebCopy"><i/><i/><b>YOUR BUSINESS<br/>ONLINE</b><span>Built around your goals</span><em>Explore</em></div><div className="smartWebPreview"><i/><i/><i/></div></div></div><div className="smartSceneFoot">DESIGN → BUILD → LAUNCH</div></>}
                    {message.kind==="data" && <><div className="smartSceneTitle">From manual entry to organized data</div><div className="smartDataFlow"><div className="smartSheet"><b>INPUT DATA</b><div className="smartSheetGrid">{Array.from({length:12},(_,i)=><i key={i}/>)}</div></div><span className="smartDataArrow">→</span><div className="smartCleanSheet"><b><span>✓</span> CLEAN OUTPUT</b><div className="smartSheetGrid">{Array.from({length:12},(_,i)=><i key={i}/>)}</div></div></div><div className="smartSceneFoot">CAPTURE → PROCESS → ORGANIZE</div></>}
                    {message.kind==="ads" && <><div className="smartSceneTitle">Campaign signals become clear decisions</div><div className="smartCampaign"><div className="smartCampaignTop"><span><i/> CAMPAIGN OVERVIEW</span><b>LIVE PREVIEW</b></div><div className="smartCampaignMetrics"><div><small>REACH</small><strong>Audience</strong><i/><i/><i/></div><div><small>ENGAGEMENT</small><strong>Signals</strong><div className="smartCampaignBars"><i/><i/><i/><i/><i/><i/></div></div><div><small>CONVERSION</small><strong>Next action</strong><span className="smartCampaignPill">TRACKED</span></div></div><div className="smartCampaignFlow"><span>CREATIVE</span><i>→</i><span>AUDIENCE</span><i>→</i><span>MEASURE</span></div></div><div className="smartSceneFoot">PLAN → LAUNCH → MEASURE → IMPROVE</div></>}
                    {message.kind==="creative" && <><div className="smartSceneTitle">One brand. A consistent visual system.</div><div className="smartCreativeStage"><div className="smartCreativePoster"><small>BRAND / CONCEPT 01</small><strong>MAKE<br/><em>IT</em><br/>MATTER.</strong><span>AMM CREATIVE STUDIO</span></div><div className="smartCreativeStack"><div className="smartCreativeSquare"><b>A</b><span>BRAND MARK</span></div><div className="smartCreativePalette"><i/><i/><i/><i/></div><div className="smartCreativeType"><b>Ag</b><span>TYPE SYSTEM</span></div></div></div><div className="smartSceneFoot">CONCEPT → DESIGN SYSTEM → ASSETS</div></>}
                  </div>
                </div>
              </div>
            </div>)}
            {!activeExperience && conversation.length===0 && <div className="smartIdle"><span className="smartIdleIcon">✳</span><div><b>Your need. The matching solution.</b><small>Send a question to watch AMM’s matching workflow in action.</small></div></div>}
          </div>
          <form className="smartQueryForm" onSubmit={(e)=>{e.preventDefault();setAutoDemoPaused(true);const q=serviceQuery.trim();if(!q)return;const t=q.toLowerCase();const kind=/(seo|google|chatgpt|ai search|search result|search visibility|rank|discover online|find my business)/.test(t)?"seo":/(website|web site|e-commerce|ecommerce|online store|landing page|web design|web development)/.test(t)?"web":/(excel|spreadsheet|data entry|data-entry|google sheets|report|clean data|organize data|data processing|dashboard|analytics)/.test(t)?"data":/(advert|campaign|google ads|meta ads|facebook ads|instagram ads|marketing|promot|lead generation)/.test(t)?"ads":/(design|brand|branding|logo|social post|creative|graphics|visual identity)/.test(t)?"creative":"automation";setSubmittedQuery(q);setAnimationRun(v=>v+1);setConversation(items=>[...items,{id:Date.now(),query:q,kind,run:animationRun+1,reply:kind==="seo"?"I’ll show how Google SEO and AI search visibility fit together.":kind==="web"?"Here’s a visual walkthrough of a business website taking shape.":kind==="data"?"Here’s how data can move from manual input to an organized output.":kind==="ads"?"Here’s how campaign creative, audience signals and performance tracking connect.":kind==="creative"?"Here’s a visual direction for a consistent brand and creative asset system.":"Here’s a visual walkthrough of a connected business workflow."}]);setActiveExperience(kind);}}>
            <label className="smartQueryLabel" htmlFor="amm-service-query">YOUR BUSINESS NEED</label>
            <div className="smartQueryInputWrap"><input id="amm-service-query" value={serviceQuery} onChange={e=>{setAutoDemoPaused(true);setServiceQuery(e.target.value)}} placeholder="e.g. I want to get found on Google and AI" aria-label="Describe your business need"/><button type="submit" aria-label="Show matching service animation"><span>Send</span><b>↗</b></button></div>
          </form>
          <div className="smartBottom"><span>AMM DATA SOLUTIONS</span><span>LET’S MAKE SOLUTIONS <b>●</b></span></div>
        </div>
      </div>
      <div className="heroBottomLine"><span>LET’S MAKE SOLUTIONS</span></div>
    </section>
    <section className="intro section"><div className="eyebrow">BUILT AROUND THE OBJECTIVE</div><div><h2>Technology is only useful when it <span>solves the right problem.</span></h2><p>We start with the outcome, shape a sensible scope, and deliver practical digital work without unnecessary complexity.</p></div></section>
    <section id="services" className="services section">
      <div className="sectionHead"><div><div className="eyebrow">OUR CAPABILITIES</div><h2>Six capabilities. One practical approach<span className="yellowDot">.</span></h2></div><p>Practical solutions across automation, websites, data, search visibility, marketing and creative work.</p></div>
      <div className="serviceGrid">{services.map(s=><a className={`serviceCard serviceCard-${s.n}`} href={`/services/${s.slug}`} key={s.n}><div className="serviceCardTop"><span className="serviceNumber">CAPABILITY / {s.n}</span><span className="serviceArrow">↗</span></div><ServiceVisual type={s.visual}/><h3>{s.title}</h3><h4>{s.plain}</h4><p>{s.body}</p><ul>{s.examples.map(x=><li key={x}>{x}</li>)}</ul><div className="whiteLabelStrip"><span className="whiteLabelIcon" aria-hidden="true"><svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="m11 17 2 2a2 2 0 0 0 3-3"/><path d="m14 14 2.5 2.5a2 2 0 0 0 3-3l-3.9-3.9a3 3 0 0 0-4.2 0l-.9.9a2 2 0 0 1-3-3l2.8-2.8a5.8 5.8 0 0 1 7.1-.9l.5.3a2 2 0 0 0 2 .1L21 3"/><path d="M3 3 2 14l6.5 6.5a2 2 0 0 0 3-3"/><path d="M3 3h8l3 3"/><path d="m8 13 4 4"/></svg></span><span>WHITE-LABEL PARTNERSHIPS</span><span className="whiteLabelArrow" aria-hidden="true">↗</span></div><div className="cardLink">View capability <span>↗</span></div></a>)}</div>
    </section>
    <section id="how" className="how section"><div className="howIntro"><div className="eyebrow">A CLEAR DELIVERY MODEL</div><h2>Defined scope.<br/><span>Thoughtful execution.</span></h2><p>Every engagement has a clear objective, an agreed scope and a review before handover.</p><a className="textLink" href="#contact">Discuss your requirements <span>→</span></a></div><div className="processList">{process.map(p=><div className="processItem" key={p[0]}><span className="processNumber">{p[0]}</span><div><h3>{p[1]}</h3><p>{p[2]}</p></div><span className="processArrow">↗</span></div>)}</div></section>
    <section className="trustBand" aria-label="AMM delivery principles"><div><span>01</span><b>Scope before build</b><p>Deliverables and expectations are agreed up front.</p></div><div><span>02</span><b>Human-reviewed work</b><p>Outputs are reviewed before handover.</p></div><div><span>03</span><b>Practical handover</b><p>Know what was delivered and what happens next.</p></div></section>
    <section id="about" className="about section"><div className="aboutVisual"><div className="aboutLogoFrame"><AMMLogo className="ammAboutLogo" height={72} /></div><div className="aboutAccent">LET’S MAKE SOLUTIONS<span>●</span></div></div><div className="aboutCopy"><div className="eyebrow">ABOUT AMM DATA SOLUTIONS</div><h2>Business-minded thinking.<br/><span>Digital execution.</span></h2><p>AMM Data Solutions brings automation, digital systems, business information and creative services together under one practical delivery approach. We work with organizations that value clear communication, thoughtful scope and useful outcomes.</p><div className="aboutTags"><span>Pakistan-based</span><span>International inquiries welcome</span><span>Scope-led delivery</span></div></div></section>
    <section id="contact" className="contact section"><div className="contactGlow"></div><div className="contactInner"><div className="eyebrow"><span className="eyebrowLine"/> START WITH THE BUSINESS OBJECTIVE</div><h2>What needs to work<br/><span>better?</span></h2><p>Share the challenge, goal or idea. We’ll help clarify a sensible next step and the scope it may require.</p><a className="primary" href="mailto:ammdatasolutions229@gmail.com?subject=Project%20inquiry%20-%20AMM%20Data%20Solutions">Discuss your project <span>↗</span></a><a className="contactEmail" href="mailto:ammdatasolutions229@gmail.com?subject=Project%20inquiry%20-%20AMM%20Data%20Solutions">Email AMM Data Solutions</a></div></section>
    <section className="faq section"><div><div className="eyebrow">GOOD TO KNOW</div><h2>Before we begin<span className="yellowDot">.</span></h2></div><div className="faqList">{faqs.map((f,i)=><div className="faqItem" key={f[0]}><button className="faqQuestion" aria-expanded={openFaq===i} onClick={()=>setOpenFaq(openFaq===i?null:i)}>{f[0]}<span>{openFaq===i?"−":"+"}</span></button>{openFaq===i&&<p>{f[1]}</p>}</div>)}</div></section>
    <footer><div className="footerTop"><Brand footer/><p>Digital systems, business intelligence and creative execution.</p><a className="footerContact" href="#contact">Discuss a project ↗</a></div><div className="footerBottom"><span>© 2026 AMM Data Solutions</span><span>Automation · Websites · Data · SEO · Marketing · Creative</span><span>Pakistan and worldwide</span></div></footer>
    {contactOpen && <div className="contactModalBackdrop" onClick={()=>setContactOpen(false)}><section className="contactModal" role="dialog" aria-modal="true" aria-labelledby="contactModalTitle" onClick={e=>e.stopPropagation()}><button className="modalClose" type="button" aria-label="Close contact options" onClick={()=>setContactOpen(false)}>×</button><div className="eyebrow"><span className="eyebrowLine"/> GET IN TOUCH</div><h2 id="contactModalTitle">How would you like to connect?</h2><p>Choose the contact channel that works best for you.</p><a className="contactOption" href="https://wa.me/923032724908" target="_blank" rel="noreferrer"><span className="contactOptionIcon">↗</span><span><b>WhatsApp</b><small>Chat with AMM Data Solutions</small></span><strong>→</strong></a><a className="contactOption" href="mailto:ammdatasolutions229@gmail.com?subject=Project%20inquiry%20-%20AMM%20Data%20Solutions"><span className="contactOptionIcon">@</span><span><b>Email</b><small>Send a project inquiry directly</small></span><strong>→</strong></a><a className="contactOption" href="https://www.linkedin.com/in/abdullah-mumtaz-malik-975a93240/" target="_blank" rel="noreferrer"><span className="contactOptionIcon">in</span><span><b>LinkedIn</b><small>Connect professionally</small></span><strong>→</strong></a></section></div>}
  </main>;
}
