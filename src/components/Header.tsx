import { navigation } from "@/content/navigation";
import { Logo } from "@/components/Logo";

export function Header() {
  return <header className="site-header"><div className="site-header__inner"><Logo /><nav className="site-nav" aria-label="Main navigation">{navigation.map((item) => <a href={item.href} key={item.label}>{item.label}</a>)}</nav><a className="button button--small button--header-pill" href="#contact">Let's Talk</a></div></header>;
}
