import { siteContent } from "@/content/site-content";

export function Contact() {
  return <section className="contact section-shell" id="contact" aria-labelledby="contact-title"><p className="eyebrow">START A CONVERSATION</p><h2 id="contact-title">{siteContent.contactTitle}</h2><p>{siteContent.contactDescription}</p><a className="button" href="mailto:ammdatasolutions229@gmail.com?subject=AMM%20Data%20Solutions%20Inquiry">Let's talk <span aria-hidden="true">↗</span></a></section>;
}
