import { site, about, education, projects, experience, skills, tools, contact, nav } from "../config";
import { HeroPlot, ProjectVisual } from "./Visuals";

/* Small "Fig. 0X" caption used as each section's eyebrow */
function SectionHead({ fig, label, title, children }) {
  return (
    <div className="section-head" data-reveal>
      <p className="eyebrow"><span>Fig. {fig}</span> — {label}</p>
      <h2 className="h2">{title}</h2>
      {children && <p className="lede">{children}</p>}
    </div>
  );
}

/* ───────── HERO ───────── */
export function Hero() {
  return (
    <section className="hero wrap" id="top">
      <div className="hero__text">
        <p className="eyebrow hero__label" data-reveal>BTech Student · Data &amp; Machine Learning</p>
        <h1 className="h1" data-reveal>
          Finding the <em>signal</em> in the noise.
        </h1>
        <p className="hero__intro" data-reveal>
          I'm a BTech student exploring data analysis, statistical modelling and
          machine learning to solve real-world problems.
        </p>
        <div className="hero__ctas" data-reveal>
          <a href="#projects" className="btn btn--primary">Explore My Work <span aria-hidden="true">↓</span></a>
          <a href="#contact" className="btn btn--ghost">Get in Touch</a>
        </div>
        {site.currentFocus && (
          <p className="status" data-reveal><span className="status__dot" aria-hidden="true" />{site.currentFocus}</p>
        )}
      </div>

      <figure className="hero__figure" data-reveal>
        <HeroPlot />
        <figcaption>
          <span>Fig. 00</span> Fitting a line, finding the main axes. <em>Illustrative data.</em>
        </figcaption>
      </figure>
    </section>
  );
}

/* ───────── ABOUT ───────── */
export function About() {
  return (
    <section className="section wrap" id="about">
      <SectionHead fig="01" label="About" title={<>A student who likes <em>asking</em> the data questions.</>} />
      <div className="about">
        <div className="about__body" data-reveal>
          {about.paragraphs.map((p, i) => (
            <p key={i} className={i === 0 ? "about__lead" : ""}>{p}</p>
          ))}
        </div>

        <aside className="about__side" data-reveal>
          <div className="spec">
            <p className="spec__label">Education</p>
            <p className="spec__title">{education.school}</p>
            <dl className="spec__meta">
              <div><dt>Degree</dt><dd>{education.degree}{education.specialization && ` · ${education.specialization}`}</dd></div>
              <div><dt>Period</dt><dd>{education.period}</dd></div>
            </dl>
          </div>
          <div className="spec">
            <p className="spec__label">Interested in</p>
            <ul className="interests">
              {about.interests.map((x) => <li key={x}>{x}</li>)}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}

/* ───────── PROJECTS ───────── */
export function Projects() {
  return (
    <section className="section wrap" id="projects">
      <SectionHead fig="02" label="Selected projects" title={<>Three projects, three ways of <em>reading</em> data.</>}>
        Graphics are original illustrations of each technique, not experimental results.
      </SectionHead>

      <ol className="projects">
        {projects.map((p, i) => (
          <li key={p.id} className={`project project--${p.visual}`} data-reveal>
            <div className="project__visual">
              <span className="project__tag-illus">Illustration</span>
              <ProjectVisual type={p.visual} />
            </div>
            <div className="project__body">
              <p className="project__meta"><span>P/{String(i + 1).padStart(2, "0")}</span>{p.category}</p>
              <h3 className="project__title">{p.title}</h3>
              <p className="project__desc">{p.description}</p>
              <ul className="tags">{p.tags.map((t) => <li key={t}>{t}</li>)}</ul>
              {(p.liveUrl || p.githubUrl) && (
                <div className="project__links">
                  {p.liveUrl && <a className="link-arrow" href={p.liveUrl} target="_blank" rel="noreferrer">View Project ↗</a>}
                  {p.githubUrl && <a className="link-arrow" href={p.githubUrl} target="_blank" rel="noreferrer">Source on GitHub ↗</a>}
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ───────── EXPERIENCE + EDUCATION ───────── */
export function Experience() {
  return (
    <section className="section wrap" id="experience">
      <SectionHead fig="03" label="Experience" title={<>Analysis on one side, <em>logistics</em> on the other.</>} />
      <ol className="timeline">
        {experience.map((e) => (
          <li key={e.org} className="timeline__item" data-reveal>
            <div className="timeline__when">
              <span className="chip">{e.type}</span>
              {e.period && <span className="timeline__date">{e.period}</span>}
            </div>
            <div className="timeline__what">
              <h3>{e.role} <span>— {e.org}</span></h3>
              <p>{e.description}</p>
            </div>
            <p className="timeline__lens"><span>lens</span>{e.lens}</p>
          </li>
        ))}
        <li className="timeline__item" data-reveal>
          <div className="timeline__when">
            <span className="chip">Education</span>
            <span className="timeline__date">{education.period}</span>
          </div>
          <div className="timeline__what">
            <h3>{education.degree}{education.specialization && `, ${education.specialization}`} <span>— {education.school}</span></h3>
            <p>Undergraduate engineering programme, with coursework and projects pointing toward data and machine learning.</p>
          </div>
          <p className="timeline__lens"><span>lens</span>Foundational</p>
        </li>
      </ol>
    </section>
  );
}

/* ───────── SKILLS ───────── */
export function Skills() {
  return (
    <section className="section wrap" id="skills">
      <SectionHead fig="04" label="Skills & interests" title={<>Techniques I've <em>actually</em> used.</>}>
        Each of these comes straight from a project above. No percentages, no progress bars.
      </SectionHead>
      <div className="skills">
        {skills.map((g) => (
          <div key={g.group} className="skills__group" data-reveal>
            <h3 className="skills__title">{g.group}<span>n = {g.items.length}</span></h3>
            <ul className="tags tags--lg">{g.items.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
        ))}
        {tools.length > 0 && (
          <div className="skills__group" data-reveal>
            <h3 className="skills__title">Tools &amp; Technologies<span>n = {tools.length}</span></h3>
            <ul className="tags tags--lg">{tools.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
        )}
      </div>
    </section>
  );
}

/* ───────── CONTACT ───────── */
export function Contact() {
  const links = [
    contact.email && { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    contact.github && { label: "GitHub", value: contact.github.replace(/^https?:\/\/(www\.)?/, ""), href: contact.github },
    contact.linkedin && { label: "LinkedIn", value: contact.linkedin.replace(/^https?:\/\/(www\.)?/, ""), href: contact.linkedin },
  ].filter(Boolean);

  return (
    <section className="section wrap contact" id="contact">
      <p className="eyebrow" data-reveal><span>Fig. 05</span> — Contact</p>
      <h2 className="contact__title" data-reveal>Have an interesting <em>problem</em> to solve?</h2>
      <p className="lede" data-reveal>I'm always happy to talk about data, projects, or ideas worth testing.</p>
      {links.length > 0 && (
        <ul className="contact__links" data-reveal>
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} target={l.label === "Email" ? undefined : "_blank"} rel="noreferrer">
                <span className="contact__label">{l.label}</span>
                <span className="contact__value">{l.value}</span>
                <span className="contact__arrow" aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
      )}
      <a href="#top" className="back-top">Back to top ↑</a>
    </section>
  );
}

/* ───────── FOOTER ───────── */
export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <div>
          <p className="footer__name">{site.name}</p>
          <p className="footer__tag">{site.tagline}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="footer__links">
            {nav.map((n) => <li key={n.id}><a href={`#${n.id}`}>{n.label}</a></li>)}
          </ul>
        </nav>
        <p className="footer__copy">© {new Date().getFullYear()} {site.name} · Built with React &amp; Vite</p>
      </div>
    </footer>
  );
}
