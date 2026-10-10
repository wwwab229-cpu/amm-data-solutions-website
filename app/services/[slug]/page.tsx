import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const siteUrl = "https://amm-data-solutions-website.vercel.app";
const services = [
  { slug: "ai-automation-business-systems", title: "AI Automation & Business Systems", simple: "Make repetitive work easier.", description: "We help organize repeated tasks and customer inquiries into clearer workflows.", examples: ["Automate suitable repetitive tasks", "Organize customer inquiries and CRM records", "Set up follow-up steps and reminders"], outcome: "Less manual copying and a clearer view of what needs to happen next." },
  { slug: "website-ecommerce-solutions", title: "Website & E-commerce Solutions", simple: "Give your business a better website.", description: "We create websites that explain your business clearly and help visitors find the next step.", examples: ["Business websites and landing pages", "Online stores and product catalogs", "Mobile-friendly layouts and contact paths"], outcome: "A clearer online presence where customers can understand your offer and get in touch." },
  { slug: "data-analytics-business-intelligence", title: "Data Analytics & Business Intelligence", simple: "Make your information useful.", description: "We help organize business spreadsheets and reports so the information is easier to review.", examples: ["Excel and Google Sheets improvements", "Simple dashboards and recurring reports", "Market and competitor research"], outcome: "Information that is easier to understand and use when planning business activity." },
  { slug: "seo-ai-search-visibility", title: "SEO & AI Search Visibility", simple: "Help people find your business online.", description: "We improve website structure and content so search engines can better understand your pages.", examples: ["Technical website checks", "Page titles, descriptions and content structure", "Sitemap and indexing checks"], outcome: "A stronger technical foundation for search discovery. Rankings and AI citations cannot be guaranteed." },
  { slug: "lead-generation-growth-systems", title: "Lead Generation & Growth Systems", simple: "Find and organize potential customers.", description: "We research suitable business prospects and help create a clearer way to track sales opportunities.", examples: ["B2B prospect research", "Organized prospect lists", "Lead qualification and follow-up process"], outcome: "A more organized starting point for outreach and managing potential customers." },
  { slug: "digital-marketing-creative-solutions", title: "Digital Marketing & Creative Solutions", simple: "Keep your brand active and consistent.", description: "We help businesses plan clear digital content and create marketing materials around their offer.", examples: ["Social media content planning", "Ad creatives and campaign materials", "Content calendars and marketing reports"], outcome: "More consistent brand communication and a clearer view of planned marketing activity." },
];

export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return { title: "Service not found" };
  return { title: service.title, description: service.description, alternates: { canonical: `/services/${service.slug}` }, openGraph: { title: service.title, description: service.description, url: `${siteUrl}/services/${service.slug}`, siteName: "AMM Data Solutions", type: "website" } };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const schema = { "@context": "https://schema.org", "@type": "Service", name: service.title, description: service.description, provider: { "@type": "Organization", name: "AMM Data Solutions", url: siteUrl }, areaServed: ["Pakistan", "Worldwide"], url: `${siteUrl}/services/${service.slug}` };
  return <main>
    <nav className="nav" aria-label="Main navigation"><Link className="brand" href="/" aria-label="AMM Data Solutions home"><img src="/amm-logo.png" alt="AMM Data Solutions" /></Link><div className="navlinks"><Link href="/#services">Services</Link><Link href="/#how">How it works</Link><Link href="/#about">About</Link></div><Link className="navcta" href="/#contact">Contact us <span>↗</span></Link></nav>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <section className="detailHero"><div className="eyebrow">AMM DATA SOLUTIONS / OUR SERVICES</div><h1>{service.title}</h1><h2>{service.simple}</h2><p>{service.description}</p><div className="heroActions"><Link className="primary" href={`mailto:ammdatasolutions229@gmail.com?subject=${encodeURIComponent("Project inquiry: " + service.title)}`}>Discuss this service <span>↗</span></Link><Link className="textLink" href="/#services">View all services</Link></div></section>
    <section className="detailBody section"><div><div className="eyebrow">WHAT WE CAN HELP WITH</div><h2>Practical work.<br/>Clear scope.</h2></div><div className="detailList">{service.examples.map((item,i)=><div className="detailItem" key={item}><span>0{i+1}</span><p>{item}</p></div>)}</div></section>
    <section className="detailOutcome"><div className="eyebrow">THE GOAL</div><h2>What this helps you do</h2><p>{service.outcome}</p><p className="detailNote">We confirm the exact scope, tools, timeline and deliverables before starting. Work depends on your requirements and available platform access.</p><Link className="primary" href={`mailto:ammdatasolutions229@gmail.com?subject=${encodeURIComponent("Project inquiry: " + service.title)}`}>Tell us what you need <span>↗</span></Link></section>
    <footer><Link className="brand footerBrand" href="/" aria-label="AMM Data Solutions home"><img src="/amm-logo.png" alt="AMM Data Solutions" /></Link><p>AI automation · Websites · Data · SEO · Lead generation · Digital marketing</p><div className="footerBottom"><span>© 2026 AMM Data Solutions</span><span>Let’s Make Solutions</span><span>Pakistan & worldwide</span></div></footer>
  </main>;
}
