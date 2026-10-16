import { siteContent } from "@/content/site-content";

export function About() {
  return <section className="about section-shell" id="about" aria-labelledby="about-title"><p className="eyebrow">BUILT AROUND YOUR BUSINESS</p><h2 id="about-title">Practical technology. Clearer ways to work.</h2><p>{siteContent.aboutDescription}</p></section>;
}
