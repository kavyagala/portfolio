import { useEffect } from "react";
import Nav from "./components/Nav";
import { Hero, About, Projects, Experience, Skills, Contact, Footer } from "./components/Sections";
import { Divider } from "./components/Visuals";
import { site, contact } from "./config";
import { useReveal } from "./hooks";

// Shown ONLY while running `npm run dev`, never on the deployed site.
function ConfigReminder() {
  const missing = [];
  if (site.name === "Your Name") missing.push("name");
  if (!contact.email) missing.push("email");
  if (!contact.github) missing.push("GitHub");
  if (!contact.linkedin) missing.push("LinkedIn");
  if (!import.meta.env.DEV || missing.length === 0) return null;
  return (
    <div className="dev-note" role="note">
      Dev reminder: set your {missing.join(", ")} in <code>src/config.js</code>
    </div>
  );
}

export default function App() {
  useReveal();
  useEffect(() => {
    document.title = `${site.name} — Data & Machine Learning`;
  }, []);

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Nav />
      <main id="main">
        <Hero />
        <Divider label="residuals ≈ 0" />
        <About />
        <Divider label="n = 3 projects" />
        <Projects />
        <Divider label="σ² explained" />
        <Experience />
        <Divider label="p < 0.05" />
        <Skills />
        <Divider label="fin." />
        <Contact />
      </main>
      <Footer />
      <ConfigReminder />
    </>
  );
}
