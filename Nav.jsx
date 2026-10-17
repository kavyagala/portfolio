import { useEffect, useState } from "react";
import { site, nav } from "../config";
import { initials, useActiveSection } from "../hooks";

const ids = nav.map((n) => n.id);

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(ids);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu with Escape; lock page scroll while open
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""} ${open ? "nav--open" : ""}`}>
      <div className="nav__inner wrap">
        <a href="#top" className="nav__logo" onClick={close} aria-label={`${site.name} — back to top`}>
          <span className="nav__mark">{initials(site.name)}</span>
          <span className="nav__name">{site.name}</span>
        </a>

        <nav aria-label="Primary">
          <ul id="nav-menu" className="nav__links">
            {nav.map((n, i) => (
              <li key={n.id}>
                <a href={`#${n.id}`} onClick={close}
                  className={active === n.id ? "is-active" : ""}
                  aria-current={active === n.id ? "true" : undefined}>
                  <span className="nav__idx">0{i + 1}</span>
                  {n.label}
                </a>
              </li>
            ))}
            <li className="nav__cta-mobile">
              <a href="#contact" className="btn btn--primary" onClick={close}>Let's Connect</a>
            </li>
          </ul>
        </nav>

        <a href="#contact" className="btn btn--primary btn--sm nav__cta">Let's Connect</a>

        <button className="nav__toggle" aria-expanded={open} aria-controls="nav-menu"
          aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((o) => !o)}>
          <span /><span />
        </button>
      </div>
    </header>
  );
}
