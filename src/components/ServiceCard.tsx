import type { ServiceItem } from "@/content/services-data";

type ServiceCardProps = { service: ServiceItem; index: number };

export function ServiceCard({ service, index }: ServiceCardProps) {
  return <article className="service-card"><div className="service-card__top"><span className="service-card__index">{String(index + 1).padStart(2, "0")}</span><span className="service-card__symbol" aria-hidden="true">{service.symbol}</span></div><h3>{service.title}</h3><p>{service.description}</p><span className="service-card__arrow" aria-hidden="true">↗</span></article>;
}
