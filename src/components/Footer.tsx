import { Contact } from "@/components/Contact";
import { Logo } from "@/components/Logo";
import { siteContent } from "@/content/site-content";

export function Footer() {
  return <><Contact /><footer className="site-footer"><Logo /><p>{siteContent.tagline}</p><small>© {new Date().getFullYear()} AMM Data Solutions. All rights reserved.</small></footer></>;
}
