import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const siteUrl = "https://amm-data-solutions-website.vercel.app";
const services = [
  { slug: "ai-automation-business-systems", title: "AI Automation & Business Systems", description: "Connect repetitive tasks, customer inquiries and team workflows into practical business systems.", intro: "Make everyday work more consistent with workflows designed around your existing process.", includes: ["AI workflow integration and automation planning", "CRM setup and lead management structure", "Follow-up workflow design", "WhatsApp Business workflow planning", "Testing, documentation and handover"], fit: "Businesses handling repeated admin tasks, scattered inquiries or follow-ups that are difficult to manage consistently." },
  { slug: "website-ecommerce-solutions", title: "Website & E-commerce Solutions", description: "Build a clear, trustworthy digital home for your business, services and products.", intro: "Give customers a clearer way to understand your business, explore your offer and contact your team.", includes: ["Business websites and landing pages", "E-commerce storefronts and product catalogs", "Responsive layouts for mobile and desktop", "Useful forms and customer journeys", "Basic technical and on-page SEO foundations"], fit: "Businesses that need a professional web presence, a focused landing page or an online product catalog." },
  { slug: "data-analytics-business-intelligence", title: "Data Analytics & Business Intelligence", description: "Turn scattered business information into useful reports and clearer decisions.", intro: "Organize operational information so teams can review performance and spend less time assembling reports.", includes: ["Excel and Google Sheets workflow improvements", "Spreadsheet cleanup and structured data", "Dashboards and recurring reports", "Market and competitor research", "Clear summaries of findings and limitations"], fit: "Teams that rely on spreadsheets, recurring reports or research to plan and make business decisions." },
  { slug: "seo-ai-search-visibility", title: "SEO & AI Search Visibility", description: "Improve the structure, clarity and technical foundations of your website for search discovery.", intro: "Help search engines and visitors understand what your business offers through useful content and sound technical foundations.", includes: ["Technical website SEO audits", "On-page titles, descriptions and content structure", "Sitemap, robots and indexing checks", "Internal linking and service-page structure", "AI search visibility recommendations grounded in SEO fundamentals"], fit: "Businesses with a website that needs clearer service information, stronger technical foundations or a more organized content structure.", note: "Search rankings, indexing timelines and inclusion in AI-generated answers cannot be guaranteed." },
  { slug: "lead-generation-growth-systems", title: "Lead Generation & Growth Systems", description: "Research relevant business prospects and organize the next steps in a sales process.", intro: "Create a more structured way to identify potential customers, qualify fit and manage follow-up.", includes: ["B2B prospect and market research", "Relevant prospect list preparation", "Lead qualification criteria", "Customer support assistant planning", "Sales follow-up workflow design"], fit: "Businesses that need help identifying suitable prospects and creating a clearer process for managing opportunities." },
  { slug: "digital-marketing-creative-solutions", title: "Digital Marketing & Creative Solutions", description: "Support a consistent digital presence with purposeful content and marketing assets.", intro: "Keep brand communication organized with creative assets and reporting that support a clear marketing goal.", includes: ["Social media content planning and management", "Advertising creatives and campaign assets", "Digital brand content", "Content calendars and publishing support", "Marketing performance summaries"], fit: "Businesses that want more consistent digital communication and better visibility into their marketing activity." },
];

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return { title: "Service not found" };
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: { title: service.title, description: service.description, url: `${siteUrl}/services/${service.slug}`, siteName: "AMM Data Solutions", type: "website" },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const schema = { "@context": "https://schema.org", "@type": "Service", name: service.title, description: service.description, provider: { "@type": "Organization", name: "AMM Data Solutions", url: siteUrl }, areaServed: ["Pakistan", "Worldwide"], url: `${siteUrl}/services/${service.slug}` };
  return <main className="servicePage">
    <nav className="nav" aria-label="Main navigation"><Link className="brand" href="/"><span>AMM</span><small>DATA SOLUTIONS</small></Link><div className="navlinks"><Link href="/#solutions">All services</Link><Link href="/#process">Our process</Link><Link href="/#about">About</Link></div><Link className="navcta" href="/#contact">Start a project <i>↗</i></Link></nav>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <section className="serviceHero"><div className="serviceHeroGlow"/><div className="sectionTag">AMM DATA SOLUTIONS / SERVICE</div><div className="serviceEyebrow">PRACTICAL DIGITAL SOLUTIONS</div><h1>{service.title}</h1><p className="serviceIntro">{service.intro}</p><div className="heroActions"><Link className="primary" href={`mailto:bammdatasolutins229@gmail.com?subject=${encodeURIComponent("Project inquiry: " + service.title)}`}>Discuss this service <b>↗</b></Link><Link className="secondary" href="/#solutions">Explore all services</Link></div><div className="servicePageMeta"><span>Clear scope</span><span>Quality checks</span><span>Pakistan + worldwide</span></div></section>
    <section className="serviceDetails section"><div><div className="sectionTag">WHAT THIS CAN INCLUDE</div><h2>Built around<br/><span>your real needs.</span></h2><p className="serviceDetailCopy">{service.description}</p></div><div className="serviceIncludes">{service.includes.map((item, i) => <div className="includeItem" key={item}><span>0{i+1}</span><p>{item}</p><b>↗</b></div>)}</div></section>
    <section className="serviceFit"><div className="sectionTag">IS THIS RIGHT FOR YOU?</div><h2>Designed for a clear<br/><span>business outcome.</span></h2><p>{service.fit}</p>{"note" in service && service.note ? <p className="serviceNote">{service.note}</p> : null}<Link className="primary large" href={`mailto:bammdatasolutins229@gmail.com?subject=${encodeURIComponent("Project inquiry: " + service.title)}`}>Tell us what you need <b>↗</b></Link></section>
    <footer><div className="footerTop"><Link className="footerBrand" href="/"><strong>AMM</strong><span>DATA SOLUTIONS</span></Link><Link href="/#solutions">All services ↑</Link></div><p>AI Automation · Websites · Data Intelligence · SEO · Lead Generation · Digital Marketing</p><div className="footerBottom"><span>© 2026 AMM Data Solutions</span><span>Let’s Make Solutions</span><span>Pakistan · Worldwide</span></div></footer>
  </main>;
}
