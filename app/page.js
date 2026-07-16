"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const resumeUrl = "https://drive.google.com/file/d/1d4CzkRfsU_KGp1GTcMOGZxB4g-wej5Cv/view?usp=drive_link";

const projects = [
  {
    number: "01",
    title: "Ecotra",
    category: "Ecotourism · Web & Mobile",
    description:
      "An ecotourism travel platform that helps people discover destinations and enjoy more thoughtful, sustainable travel experiences across web and mobile.",
    tags: ["React", "React Native", "Travel"],
    accent: "lime",
    link: "https://ecotra.org",
  },
  {
    number: "02",
    title: "Sarawark Global",
    category: "E-commerce · Web & Mobile",
    description:
      "A modern e-commerce experience built for seamless product discovery and shopping, delivered across both website and mobile app.",
    tags: ["React", "React Native", "E-commerce"],
    accent: "violet",
    link: "https://sarawarkglobal.com",
  },
];

const services = [
  ["01", "Frontend Development", "Fast, accessible, and scalable interfaces built with React and Next.js."],
  ["02", "Mobile App Development", "Native-feeling iOS and Android experiences powered by React Native."],
  ["03", "UI Engineering", "Pixel-perfect implementation with thoughtful motion and meaningful interaction."],
];

function Arrow({ diagonal = true }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [photoReady, setPhotoReady] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <main>
      <div className="noise" />
      <nav className="nav shell">
        <a className="brand" href="#top" aria-label="Charles Okoro home">
          <span className="brand-fallback">CO</span>
          {photoReady && (
            <Image
              src="/images/mine.jpeg"
              alt="Charles Okoro"
              fill
              sizes="48px"
              priority
              onError={() => setPhotoReady(false)}
            />
          )}
        </a>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <div className="mobile-menu-top">
            <a className="mobile-menu-brand" href="#top" onClick={() => setMenuOpen(false)} aria-label="Charles Okoro home">
              <span>CO</span>
              {photoReady && (
                <Image src="/images/mine.jpeg" alt="Charles Okoro" fill sizes="64px" />
              )}
            </a>
            <button className="menu-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <b>×</b>
            </button>
          </div>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <div className="mobile-menu-bottom">
            <span>Based in Enugu, Nigeria</span>
            <a href="mailto:charlesokoro15@gmail.com">charlesokoro15@gmail.com</a>
          </div>
        </div>
        <a className="availability" href="#contact">
          <i /> Available for work
        </a>
        <button className="menu" onClick={() => setMenuOpen(true)} aria-label="Open menu" aria-expanded={menuOpen}>
          <span /><span />
        </button>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-kicker fade-up">
          <span>Based in Enugu, Nigeria</span>
          <span>Frontend &amp; Mobile Developer</span>
        </div>
        <h1 className="fade-up delay-1">
          I build digital<br />
          <span className="accent-word">experiences</span><br className="mobile-break" />
          <span className="hero-that">that</span><br className="after-that" />
          <span className="hero-feel">feel <em>alive.</em></span>
        </h1>
        <div className="hero-bottom fade-up delay-2">
          <p>
            I&apos;m Charles Okoro — a React &amp; React Native developer turning ambitious ideas into fast,
            polished products people love to use.
          </p>
          <a className="circle-link" href="#work" aria-label="View selected work">
            <Arrow diagonal={false} />
          </a>
        </div>
        <div className="scroll-cue"><span /> SCROLL TO EXPLORE</div>
      </section>

      <section className="marquee" aria-hidden="true">
        <div>REACT <i>✦</i> NEXT.JS <i>✦</i> REACT NATIVE <i>✦</i> JAVASCRIPT <i>✦</i> TAILWIND CSS <i>✦</i> GITHUB <i>✦</i> REDUX <i>✦</i></div>
      </section>

      <section className="work shell section" id="work">
        <header className="section-head reveal">
          <p className="eyebrow">( SELECTED WORK )</p>
          <h2>Things I&apos;ve <span>built.</span></h2>
          <p>A selection of products where strategy, design, and code came together.</p>
        </header>
        <div className="project-list">
          {projects.map((project) => (
            <a href={project.link} target="_blank" rel="noreferrer" className="project reveal" key={project.title}>
              <div className={`project-art ${project.accent}`}>
                <span className="art-grid" />
                <div className="device">
                  <small>{project.title}</small>
                  <strong>{project.number === "01" ? "Explore. Enjoy. \Conserve." : "Shop without\nboundaries."}</strong>
                  <span className="device-line" />
                  <span className="device-line short" />
                </div>
                <span className="project-num">{project.number}</span>
              </div>
              <div className="project-info">
                <p>{project.category}</p>
                <h3>{project.title} <Arrow /></h3>
                <p className="description">{project.description}</p>
                <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="about shell section" id="about">
        <div className="about-label reveal">
          <p className="eyebrow">( ABOUT ME )</p>
          <div className="about-photo">
            <span>CO</span>
            {photoReady && (
              <Image
                src="/images/mine.jpeg"
                alt="Charles Okoro, frontend and mobile developer"
                fill
                sizes="(max-width: 800px) 240px, 220px"
                onError={() => setPhotoReady(false)}
              />
            )}
          </div>
          <p className="photo-caption">Charles Okoro<br />Frontend &amp; Mobile Developer</p>
        </div>
        <div className="about-copy reveal">
          <h2>I care about the <span>details</span> that turn a product from functional into <em>unforgettable.</em></h2>
          <div className="about-small">
            <p>I&apos;m Charles Ifeanyi, a FrontEnd React Developer based in Enugu. I blend clean engineering with an eye for design to build dependable digital products people enjoy using.</p>
            <p>My work spans web and mobile experiences, including ecotourism platform Ecotra and e-commerce platform Sarawark Global. I enjoy turning ambitious ideas into clear, useful products.</p>
          </div>
          <div className="about-actions">
            <a className="resume-link" href={resumeUrl} target="_blank" rel="noreferrer">
              <span>View my résumé</span>
              <Arrow />
            </a>
            <a className="text-link" href="#contact">Let&apos;s work together <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="services shell section" id="services">
        <header className="section-head reveal">
          <p className="eyebrow">( WHAT I DO )</p>
          <h2>How I can <span>help.</span></h2>
        </header>
        <div className="service-list">
          {services.map(([num, title, text]) => (
            <div className="service reveal" key={title}>
              <span>{num}</span><h3>{title}</h3><p>{text}</p><Arrow />
            </div>
          ))}
        </div>
      </section>

      <section className="contact shell" id="contact">
        <p className="eyebrow reveal">( HAVE A PROJECT IN MIND? )</p>
        <h2 className="reveal">Let&apos;s make<br />something <span>great.</span></h2>
        <a className="email reveal" href="mailto:charlesokoro15@gmail.com">charlesokoro15@gmail.com <Arrow /></a>
        <footer>
          <div className="footer-note">
            <p>© {new Date().getFullYear()} Charles Okoro. Built with intention.</p>
            <p className="brand-disclaimer">Brand names and logos belong to their respective owners and are shown only to identify projects I contributed to.</p>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/charles-okoro-4a838b246?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/dashboard" target="_blank" rel="noreferrer">GitHub</a>
          </div>
          <a href="#top">Back to top ↑</a>
        </footer>
      </section>
    </main>
  );
}
