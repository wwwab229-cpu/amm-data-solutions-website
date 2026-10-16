import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/content/services-data";
import { siteContent } from "@/content/site-content";

export function Services() {
  return <section className="services section-shell" id="services" aria-labelledby="services-title"><div className="section-heading"><p className="eyebrow">{siteContent.servicesEyebrow}</p><h2 id="services-title">{siteContent.servicesTitle}</h2><p>{siteContent.servicesDescription}</p></div><div className="services-grid">{services.map((service, index) => <ServiceCard service={service} index={index} key={service.id} />)}</div></section>;
}
