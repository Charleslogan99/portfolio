"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// const resumeUrl = "https://drive.google.com/file/d/1d4CzkRfsU_KGp1GTcMOGZxB4g-wej5Cv/view?usp=drive_link";
const resumeUrl = "https://drive.google.com/file/d/1d4CzkRfsU_KGp1GTcMOGZxB4g-wej5Cv/view?usp=sharing";

const projects = [
  {
    number: "01",
    title: "Ecotra",
    category: "Ecotourism · Web & Mobile",
    description: "An ecotourism travel platform that helps people discover destinations and enjoy more thoughtful, sustainable travel experiences across web and mobile.",
    tags: ["FrontEnd","React", "React Native", "Travel"],
    icon: "/icons/ecoicon.png",
    link: "https://ecotra.org",
  },
  {
    number: "02",
    title: "Sarawark Global",
    category: "E-commerce · Web & Mobile",
    description: "A modern e-commerce experience built for seamless product discovery and shopping, delivered across both website and mobile app.",
    tags: ["FrontEnd","React", "React Native", "E-commerce"],
    icon: "/icons/saraicon.png",
    link: "https://sarawarkglobal.com",
  },
];

const services = [
  ["01", "Frontend Development", "Fast, accessible, and scalable interfaces built with React and Next.js."],
  ["02", "Mobile App Development", "Native-feeling iOS and Android experiences powered by React Native."],
  ["03", "UI Engineering", "Pixel-perfect implementation with thoughtful motion and meaningful interaction."],
];

const shell = "mx-auto w-[calc(100%-80px)] max-w-[1240px] max-[1100px]:w-[calc(100%-56px)] max-[800px]:w-[calc(100%-36px)] max-[480px]:w-[calc(100%-28px)]";
const eyebrow = "text-[9px] font-extrabold uppercase tracking-[.2em] text-[#777672]";
const serifGold = "font-[family-name:var(--font-instrument-serif)] font-normal italic text-[#d6ad45]";

function Arrow({ diagonal = true }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

function Reveal({ as: Tag = "div", className = "", children, ...props }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.12 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${visible ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"}`}
      {...props}
    >
      {children}
    </Tag>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [photoReady, setPhotoReady] = useState(true);
  const [supportOpen, setSupportOpen] = useState(false);
  const [loaderMounted, setLoaderMounted] = useState(true);
  const [loaderClosing, setLoaderClosing] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen || loaderMounted ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen, loaderMounted]);

  useEffect(() => {
    const closeTimer = setTimeout(() => setLoaderClosing(true), 1700);
    const removeTimer = setTimeout(() => setLoaderMounted(false), 2350);
    return () => {
      clearTimeout(closeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="w-full max-w-full overflow-x-clip bg-[#080808] text-[#f4f1ea]">
      {loaderMounted && (
        <div className={`${loaderClosing ? "pointer-events-none scale-[1.025] opacity-0" : "scale-100 opacity-100"} fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#060606] transition-all duration-700 ease-[cubic-bezier(.76,0,.24,1)]`} role="status" aria-label="Loading Charles Okoro portfolio">
          <div className="absolute inset-0 opacity-[.08] [background-image:linear-gradient(rgba(214,173,69,.25)_1px,transparent_1px),linear-gradient(90deg,rgba(214,173,69,.25)_1px,transparent_1px)] [background-size:54px_54px] [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]" />
          <div className="absolute left-6 top-6 text-[8px] font-bold uppercase tracking-[.2em] text-[#555] max-[480px]:left-4 max-[480px]:top-4">Portfolio · 2026</div>
          <div className="absolute right-6 top-6 text-[8px] font-bold uppercase tracking-[.2em] text-[#555] max-[480px]:right-4 max-[480px]:top-4">Enugu · NG</div>

          <div className="relative flex w-[min(420px,calc(100%-48px))] flex-col items-center">
            <div className="relative grid size-32 place-items-center max-[480px]:size-28">
              <span className="absolute inset-0 animate-[loaderRing_2s_ease-in-out_infinite] rounded-full border border-[#d6ad45]/20" />
              <span className="absolute inset-3 animate-[loaderRing_2s_ease-in-out_.2s_infinite] rounded-full border border-[#d6ad45]/35" />
              <span className="absolute inset-6 rounded-full border border-[#d6ad45]/50 bg-[#0d0d0d] shadow-[0_0_55px_rgba(214,173,69,.12)]" />
              <span className="relative animate-[loaderMonogram_1.2s_cubic-bezier(.2,.8,.2,1)_both] text-[28px] font-black tracking-[-.08em] text-[#d6ad45]">CO<span className="ml-0.5 text-white">.</span></span>
            </div>

            <div className="mt-8 overflow-hidden text-center">
              <p className="animate-[loaderText_.8s_ease_.25s_both] text-[10px] font-extrabold uppercase tracking-[.34em] text-white">Charles Okoro</p>
              <p className="mt-2 animate-[loaderText_.8s_ease_.4s_both] text-[8px] font-bold uppercase tracking-[.2em] text-[#666]">Frontend &amp; Mobile Developer</p>
            </div>

            <div className="mt-9 h-px w-full overflow-hidden bg-[#242424]">
              <span className="block h-full origin-left animate-[loaderProgress_1.7s_cubic-bezier(.65,0,.35,1)_forwards] bg-gradient-to-r from-[#8e681f] via-[#f4d779] to-[#d6ad45] shadow-[0_0_14px_#d6ad45]" />
            </div>
            <div className="mt-3 flex w-full justify-between text-[7px] font-bold uppercase tracking-[.18em] text-[#4f4f4f]"><span>Loading experience</span><span className="text-[#8c743b]">Please wait</span></div>
          </div>

          <div className="absolute bottom-6 left-1/2 h-8 w-px -translate-x-1/2 overflow-hidden bg-[#252525]"><span className="block h-1/2 w-full animate-[loaderLine_1.2s_ease-in-out_infinite] bg-[#d6ad45]" /></div>
        </div>
      )}
      <nav className={`${shell} relative z-40 flex h-[95px] items-center justify-between max-[800px]:h-[75px] max-[480px]:h-[68px]`}>
        <a className="group flex shrink-0 items-center gap-3" href="#top" aria-label="Charles Okoro home">
          <span className="relative grid size-14 shrink-0 place-items-center overflow-hidden rounded-full border border-[#343434] bg-[#151515] shadow-[0_8px_26px_rgba(0,0,0,.28)] transition duration-300 group-hover:border-[#d6ad45]/60 max-[800px]:size-[50px] max-[480px]:size-[46px]">
            <span className="text-xs font-extrabold tracking-[.04em] text-[#d6ad45]">CO</span>
            {photoReady && <Image className="object-cover" src="/images/mine.jpeg" alt="Charles Okoro" fill sizes="(max-width: 480px) 46px, (max-width: 800px) 50px, 56px" priority onError={() => setPhotoReady(false)} />}
          </span>
          <span className="flex flex-col text-[11px] font-extrabold uppercase leading-[1.05] tracking-[.09em] max-[480px]:text-[9px]">
            <span className="text-white">Charles</span>
            <span className="text-[#d6ad45]">Okoro.</span>
          </span>
        </a>

        <div className={`${menuOpen ? "max-[800px]:visible max-[800px]:translate-y-0 max-[800px]:opacity-100 max-[800px]:pointer-events-auto" : "max-[800px]:invisible max-[800px]:-translate-y-3 max-[800px]:opacity-0 max-[800px]:pointer-events-none"} flex gap-10 text-[13px] max-[800px]:fixed max-[800px]:inset-0 max-[800px]:z-50 max-[800px]:min-h-dvh max-[800px]:flex-col max-[800px]:items-stretch max-[800px]:justify-center max-[800px]:gap-0 max-[800px]:overflow-y-auto max-[800px]:bg-black/95 max-[800px]:px-6 max-[800px]:pb-[110px] max-[800px]:pt-[150px] max-[800px]:text-[clamp(38px,12vw,64px)] max-[800px]:font-extrabold max-[800px]:tracking-[-.055em] max-[800px]:backdrop-blur-xl max-[800px]:transition-all max-[800px]:duration-300 max-[360px]:px-[18px]`}>
          <div className="absolute inset-x-0 top-0 hidden h-28 items-center justify-between border-b border-[#242424] pl-6 max-[800px]:flex max-[360px]:pl-[18px]">
            <a className="relative grid size-[62px] place-items-center overflow-hidden rounded-full border border-[#333] bg-[#171717]" href="#top" onClick={closeMenu} aria-label="Charles Okoro home">
              <span className="text-[13px] text-[#d6ad45]">CO</span>
              {photoReady && <Image className="object-cover" src="/images/mine.jpeg" alt="Charles Okoro" fill sizes="62px" />}
            </a>
            <button className="flex h-full w-[100px] flex-col items-center justify-center border-0 border-l border-[#444] bg-[#343434] text-[44px] font-extralight leading-none transition-colors hover:bg-[#d6ad45] hover:text-black" onClick={closeMenu} aria-label="Close menu">×</button>
          </div>

          {[["Work", "#work"], ["About", "#about"], ["Services", "#services"], ["Contact", "#contact"]].map(([label, href]) => (
            <a key={label} className="text-[#b8b7b3] transition-colors hover:text-white max-[800px]:w-full max-[800px]:border-b max-[800px]:border-[#242424] max-[800px]:py-3 max-[800px]:text-[#eee] max-[800px]:after:float-right max-[800px]:after:mt-[.2em] max-[800px]:after:text-[.45em] max-[800px]:after:font-normal max-[800px]:after:text-[#4e4e4e] max-[800px]:after:content-['↗'] max-[800px]:hover:text-[#d6ad45]" href={href} onClick={closeMenu}>{label}</a>
          ))}

          <div className="absolute bottom-7 left-6 right-6 hidden items-end justify-between gap-5 text-[8px] font-bold uppercase leading-normal tracking-[.1em] text-[#666] max-[800px]:flex max-[480px]:flex-col max-[480px]:items-start max-[480px]:gap-2 max-[360px]:left-[18px] max-[360px]:right-[18px]">
            <span>Based in Enugu, Nigeria</span>
            <a className="text-[10px] normal-case tracking-normal text-[#aaa]" href="mailto:charlesokoro15@gmail.com">charlesokoro15@gmail.com</a>
          </div>
        </div>

        <a className="group relative flex items-center overflow-hidden rounded-full border border-transparent px-4 py-3 text-[10px] font-extrabold uppercase tracking-[.1em] text-[#d8d8d4] shadow-[0_0_25px_rgba(214,173,69,.08)] transition duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:text-white hover:shadow-[0_10px_40px_rgba(214,173,69,.25)] max-[800px]:hidden" href="#contact">
          <span className="pointer-events-none absolute -inset-[90%] animate-[availabilityOrbit_6s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_250deg,#8e681f_285deg,#f8dc82_320deg,#d6ad45_340deg,transparent_360deg)]" />
          <span className="pointer-events-none absolute inset-[1px] rounded-full bg-[#0c0c0c]" />
          <span className="relative z-10 mr-2.5 grid size-2 place-items-center">
            <i className="absolute size-2 rounded-full bg-[#d6ad45] shadow-[0_0_12px_#d6ad45]" />
            <i className="absolute size-2 animate-ping rounded-full border border-[#d6ad45] [animation-duration:1.8s]" />
          </span>
          <span className="relative z-10">Available for work</span>
          <span className="relative z-10 ml-2 text-sm leading-none text-[#d6ad45] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
        </a>
        <button className="hidden size-12 rounded-full border border-[#303030] max-[800px]:block" onClick={() => setMenuOpen(true)} aria-label="Open menu" aria-expanded={menuOpen}>
          <span className="mx-auto my-1.5 block h-px w-5 bg-white" /><span className="mx-auto my-1.5 block h-px w-5 bg-white" />
        </button>
      </nav>

      <section className={`${shell} relative flex h-[calc(100vh-95px)] min-h-[760px] max-h-[920px] flex-col justify-center max-[800px]:h-[calc(100svh-75px)] max-[800px]:min-h-[690px] max-[480px]:h-[calc(100svh-68px)] max-[480px]:min-h-[620px] max-[480px]:py-11`} id="top">
        <div className="pointer-events-none absolute left-[45%] top-[42%] size-[600px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(214,173,69,.08),transparent_64%)]" />
        <div className="mb-11 flex w-full justify-between text-[10px] uppercase tracking-[.16em] text-[#7e7d79] animate-[fadeUp_.8s_ease_forwards] max-[800px]:mb-9 max-[800px]:[&>span:last-child]:hidden">
          <span>Based in Enugu, Nigeria</span><span>Frontend &amp; Mobile Developer</span>
        </div>
        <h1 className="relative m-0 max-w-full text-[clamp(64px,9.5vw,142px)] font-extrabold leading-[.84]  tracking-[-.075em] opacity-0 animate-[fadeUp_.8s_ease_.18s_forwards] max-[1100px]:text-[10.5vw] max-[800px]:text-[clamp(54px,16vw,82px)] max-[800px]:leading-[.9] max-[480px]:text-[clamp(46px,15vw,64px)] max-[360px]:text-[clamp(42px,13.5vw,48px)]">
          I build digital<br />
          <span className={serifGold}>experiences</span><br className="hidden max-[800px]:block" />
          <span className="ml-[.36em] mt-4 mb-4 inline-block max-[800px]:ml-0">that</span><br className="max-[800px]:hidden" />
          <span className="inline-block max-[800px]:ml-[.36em]">feel <em className="font-[family-name:var(--font-instrument-serif)] font-normal">alive.</em></span>
        </h1>
        <div className="mt-12 flex items-center justify-end gap-20 opacity-0 animate-[fadeUp_.8s_ease_.36s_forwards] max-[800px]:mt-10 max-[800px]:justify-between max-[800px]:gap-6 max-[480px]:mt-8 max-[480px]:items-end">
          <p className="max-w-[430px] text-[15px] leading-[1.7] text-[#aaa9a5] max-[800px]:max-w-[280px] max-[800px]:text-xs max-[480px]:max-w-[245px]">I&apos;m Charles — a React &amp; React Native developer turning ambitious ideas into fast, polished products people love to use.</p>
          <a className="flex size-[66px] shrink-0 items-center justify-center rounded-full border border-[#454545] text-2xl leading-none transition hover:scale-110 hover:border-[#d6ad45] hover:bg-[#d6ad45] hover:text-black max-[800px]:size-[54px] max-[480px]:size-12" href="#work" aria-label="View selected work">
            <span className="flex size-full rotate-90 items-center ml-1.5 justify-center leading-none"><Arrow diagonal={false} /></span>
          </a>
        </div>
        <div className="absolute bottom-7 left-0 flex items-center gap-3 text-[8px] tracking-[.16em] text-[#64635f] max-[800px]:hidden"><span className="h-px w-7 bg-[#64635f]" /> SCROLL TO EXPLORE</div>
      </section>

      <section className="-rotate-[1.2deg] scale-[1.02] overflow-hidden whitespace-nowrap border-y border-[#272727] bg-[#0d0d0d] py-5" aria-hidden="true">
        <div className="inline-block animate-[marquee_22s_linear_infinite] text-[11px] tracking-[.16em]">REACT <i className="mx-7 text-[#d6ad45]">✦</i> NEXT.JS <i className="mx-7 text-[#d6ad45]">✦</i> REACT NATIVE <i className="mx-7 text-[#d6ad45]">✦</i> JAVASCRIPT <i className="mx-7 text-[#d6ad45]">✦</i> TAILWIND CSS <i className="mx-7 text-[#d6ad45]">✦</i> GITHUB <i className="mx-7 text-[#d6ad45]">✦</i> REDUX <i className="mx-7 text-[#d6ad45]">✦</i></div>
      </section>

      <section className={`${shell} py-[150px] max-[800px]:py-24 max-[480px]:py-20`} id="work">
        <Reveal as="header" className="grid grid-cols-[1fr_2fr_1fr] items-end border-b border-[#272727] pb-14 max-[800px]:grid-cols-1 max-[800px]:gap-6">
          <p className={eyebrow}>( SELECTED WORK )</p>
          <h2 className="m-0 text-[clamp(45px,5.5vw,78px)] font-extrabold leading-[.95] tracking-[-.055em] max-[480px]:text-[44px]">Things I&apos;ve <span className={serifGold}>built.</span></h2>
          <p className="max-w-[250px] justify-self-end text-xs leading-relaxed text-[#82817d] max-[800px]:justify-self-start">A selection of products where strategy, design, and code came together.</p>
        </Reveal>
        {projects.map((project, index) => (
          <Reveal as="a" href={project.link} target="_blank" rel="noreferrer" className="group grid grid-cols-[1.4fr_1fr] items-center gap-[70px] border-b border-[#272727] py-[70px] max-[1100px]:grid-cols-[1.2fr_1fr] max-[1100px]:gap-11 max-[800px]:grid-cols-1 max-[800px]:gap-9 max-[800px]:py-12 max-[480px]:gap-7 max-[480px]:py-10" key={project.title}>
            <div className={`relative grid min-h-[440px] place-items-center overflow-hidden transition duration-500 group-hover:scale-[.985] max-[800px]:min-h-[330px] max-[480px]:min-h-[290px] max-[360px]:min-h-[260px] ${index === 0 ? "bg-gradient-to-br from-[#e3c266] to-[#b8892f] text-black" : "bg-[#8271ff] text-white"}`}>
              <span className="absolute inset-0 opacity-[.13] [background-image:linear-gradient(currentColor_1px,transparent_1px),linear-gradient(90deg,currentColor_1px,transparent_1px)] [background-size:45px_45px]" />
              <div className="flex h-[72%] w-[57%] -rotate-[5deg] flex-col justify-center rounded-[18px] border-[7px] border-[#1f1f1f] bg-[#0c0c0c] p-7 text-white shadow-[0_35px_70px_rgba(0,0,0,.35)] transition duration-500 group-hover:-rotate-2 group-hover:scale-105 max-[1100px]:w-[65%] max-[800px]:w-[64%] max-[480px]:w-[69%] max-[480px]:p-5 max-[360px]:w-[72%]">
                <div className="relative mb-4 grid size-14 shrink-0 place-items-center overflow-hidden rounded-full border border-[#3b3b3b] bg-white shadow-[0_10px_28px_rgba(0,0,0,.35)] ring-2 ring-white/5 transition duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_14px_35px_rgba(0,0,0,.45)] max-[480px]:size-12">
                  <Image
                    className="object-contain p-1 mix-blend-multiply"
                    src={project.icon}
                    alt={`${project.title} logo`}
                    fill
                    sizes="(max-width: 480px) 48px, 56px"
                  />
                </div>
                <small className="uppercase tracking-[.12em] text-[#aaa]">{project.title}</small>
                <strong className="my-5 whitespace-pre-line text-[clamp(24px,3vw,44px)] leading-[.95] tracking-[-.06em] max-[480px]:text-[27px]">{index === 0 ? "Explore. Enjoy.\nConserve." : "Shop without\nboundaries."}</strong>
                <span className="mt-2.5 h-[7px] w-full rounded bg-[#333]" /><span className="mt-2.5 h-[7px] w-3/5 rounded bg-[#333]" />
              </div>
              <span className="absolute bottom-4 right-5 text-[10px]">{project.number}</span>
            </div>
            <div>
              <p className="text-[9px] font-extrabold uppercase tracking-[.15em] text-[#73726e]">{project.category}</p>
              <h3 className="my-5 flex justify-between text-[42px] font-extrabold tracking-[-.04em] max-[800px]:text-[34px]">{project.title} <span className="text-2xl transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#d6ad45]"><Arrow /></span></h3>
              <p className="text-[13px] leading-[1.7] text-[#969591]">{project.description}</p>
              <div className="mt-7 flex flex-wrap gap-2">{project.tags.map((tag) => <span className="rounded-full border border-[#303030] px-3 py-2 text-[9px] font-bold text-[#aaa]" key={tag}>{tag}</span>)}</div>
            </div>
          </Reveal>
        ))}
      </section>

      <section className={`${shell} grid grid-cols-[1fr_3fr] gap-10 border-t border-[#272727] py-[150px] max-[1100px]:grid-cols-[240px_1fr] max-[800px]:grid-cols-1 max-[800px]:gap-12 max-[800px]:py-24 max-[480px]:py-20`} id="about">
        <Reveal className="flex flex-col items-start max-[800px]:grid max-[800px]:grid-cols-2 max-[800px]:items-start">
          <p className={`${eyebrow} max-[800px]:col-span-2`}>( ABOUT ME )</p>
          <div className="relative mt-14 grid aspect-[4/5] w-full max-w-[250px] place-items-center overflow-hidden border border-[#292929] bg-[#151515] max-[800px]:mt-8 max-[800px]:max-w-[260px] max-[480px]:max-w-[210px]">
            <span className="text-4xl font-extrabold tracking-[-.08em] text-[#d6ad45]">CO</span>
            {photoReady && <Image className="object-cover grayscale transition duration-500 hover:scale-105 hover:grayscale-0" src="/images/mine.jpeg" alt="Charles Okoro, frontend and mobile developer" fill sizes="(max-width: 480px) 210px, (max-width: 800px) 260px, 250px" onError={() => setPhotoReady(false)} />}
          </div>
          <p className="text-[9px] uppercase leading-relaxed tracking-[.08em] text-[#73726e] max-[800px]:self-end max-[800px]:pl-5">Charles Okoro<br />Frontend &amp; Mobile Developer</p>
        </Reveal>
        <Reveal>
          <h2 className="m-0 max-w-[950px] text-[clamp(42px,5.6vw,76px)] font-extrabold leading-[1.05] tracking-[-.055em] max-[480px]:text-[42px] max-[360px]:text-[37px]">I care about the <span className="text-[#d6ad45]">details</span> that turn a product from functional into <em className="font-[family-name:var(--font-instrument-serif)] font-normal">unforgettable.</em></h2>
          <div className="mb-11 ml-[33%] mt-16 grid grid-cols-2 gap-12 text-[13px] leading-[1.8] text-[#92918d] max-[1100px]:ml-[18%] max-[800px]:ml-0 max-[800px]:mt-11 max-[800px]:grid-cols-1 max-[800px]:gap-3">
            <p>I&apos;m Charles, a Frontend React Developer based in Enugu. I began my journey in tech in 2022 and have since focused on turning ambitious ideas into polished web and mobile experiences through clean engineering, thoughtful design, and continuous learning.</p>
            <p>My work includes the Ecotra ecotourism platform and Sarawark Global&apos;s e-commerce experiences. Away from code, I enjoy gaming, watching great films, working out, listening to music, exploring new places, and keeping up with new ideas in design and technology.</p>
          </div>
          <div className="ml-[33%] flex flex-wrap items-center gap-7 max-[1100px]:ml-[18%] max-[800px]:ml-0 max-[800px]:flex-col max-[800px]:items-start">
            <a className="flex min-w-[190px] items-center justify-between gap-7 rounded-full border border-[#d6ad45] bg-[#d6ad45] px-5 py-2 text-[11px] font-extrabold uppercase tracking-[.08em] text-black transition hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(214,173,69,.2)]" href={resumeUrl} target="_blank" rel="noreferrer"><span>View my résumé</span><span className="text-lg"><Arrow /></span></a>
            <a className="border-b border-[#777] pb-2 text-xs font-bold" href="#contact">Let&apos;s work together <span className="ml-3"><Arrow /></span></a>
          </div>
        </Reveal>
      </section>

      <section className={`${shell} pb-[150px] pt-[60px] max-[800px]:py-24 max-[480px]:py-20`} id="services">
        <Reveal as="header" className="grid grid-cols-[1fr_2fr_1fr] items-end border-b border-[#272727] pb-14 max-[800px]:grid-cols-1 max-[800px]:gap-6">
          <p className={eyebrow}>( WHAT I DO )</p><h2 className="text-[clamp(45px,5.5vw,78px)] font-extrabold leading-[.95] tracking-[-.055em] max-[480px]:text-[44px]">How I can <span className={serifGold}>help.</span></h2>
        </Reveal>
        {services.map(([num, title, text]) => (
          <Reveal className="group grid grid-cols-[80px_1.3fr_1fr_30px] items-center gap-9 border-b border-[#272727] py-10 max-[800px]:grid-cols-[35px_1fr_20px] max-[800px]:gap-4 max-[480px]:py-8" key={title}>
            <span className="text-[10px] text-[#64635f]">{num}</span><h3 className="text-[28px] font-extrabold tracking-[-.03em] max-[480px]:text-[22px]">{title}</h3><p className="max-w-[330px] text-xs leading-relaxed text-[#8f8e8a] max-[800px]:col-start-2">{text}</p><span className="text-[22px] transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#d6ad45] max-[800px]:col-start-3 max-[800px]:row-start-1"><Arrow /></span>
          </Reveal>
        ))}
      </section>

      <section className={`${shell} min-h-[760px] pt-40 max-[800px]:min-h-0 max-[800px]:pt-24`} id="contact">
        <Reveal as="p" className={eyebrow}>( HAVE A PROJECT IN MIND? )</Reveal>
        <Reveal as="h2" className="my-14 text-[clamp(70px,11vw,155px)] font-extrabold leading-[.8] tracking-[-.075em] max-[800px]:my-10 max-[800px]:text-[17vw] max-[480px]:text-[18vw]">Let&apos;s make<br />something <span className={serifGold}>great.</span></Reveal>
        <Reveal as="a" className="inline-flex max-w-full gap-10 border-b border-[#555] pb-3 text-[17px] font-bold max-[480px]:w-full max-[480px]:justify-between max-[480px]:gap-3 max-[480px]:break-all max-[480px]:text-[clamp(11px,3.5vw,16px)]" href="mailto:charlesokoro15@gmail.com">charlesokoro15@gmail.com <span className="text-[#d6ad45]"><Arrow /></span></Reveal>
        <footer className="mt-[150px] flex min-h-[130px] items-center justify-between gap-9 border-t border-[#272727] py-7 text-[9px] uppercase tracking-[.1em] text-[#6e6d69] max-[800px]:mt-[120px] max-[800px]:flex-col max-[800px]:items-start max-[800px]:gap-6 max-[800px]:py-9">
          <div className="max-w-[430px]"><p className="text-[#898884]">© {new Date().getFullYear()} Charles Okoro. Built with intention.</p><p className="mt-2 max-w-[420px] text-[7px] normal-case leading-relaxed tracking-[.08em] text-[#555450]">Brand names and logos belong to their respective owners and are shown only to identify projects I contributed to.</p></div>
          <div className="flex gap-7"><a className="hover:text-white" href="https://www.linkedin.com/in/charles-okoro-4a838b246" target="_blank" rel="noreferrer">LinkedIn</a><a className="hover:text-white" href="https://github.com/Charleslogan99" target="_blank" rel="noreferrer">GitHub</a></div>
          <a className="hover:text-white" href="#top">Back to top ↑</a>
        </footer>
      </section>

      <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end max-[480px]:bottom-4  max-[480px]:right-4">
        <div className={`${supportOpen ? "visible mb-4 translate-y-0 scale-100 opacity-100" : "invisible mb-1 translate-y-4 scale-95 opacity-0"} w-[330px] origin-bottom-right overflow-hidden rounded-[24px] border border-white/10 bg-[#111]/95 shadow-[0_24px_80px_rgba(0,0,0,.55),0_0_35px_rgba(214,173,69,.08)] backdrop-blur-xl transition-all duration-500 max-[480px]:w-[calc(100vw-32px)]`} role="dialog" aria-label="Contact Charles">
          <div className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#d6ad45] to-[#a87b25] p-5 text-black">
            <div className="absolute -right-8 -top-10 size-28 rounded-full border border-black/10" />
            <div className="absolute -right-3 -top-3 size-16 rounded-full border border-black/10" />
            <div className="relative flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="relative grid size-11 place-items-center overflow-hidden rounded-full border-2 border-black/15 bg-[#171717] text-[11px] font-extrabold text-[#d6ad45]">
                  CO
                  {photoReady && <Image className="object-cover" src="/images/mine.jpeg" alt="Charles Okoro" fill sizes="44px" />}
                </span>
                <div><p className="text-sm font-extrabold">Charles Okoro</p><p className="mt-0.5 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[.08em] text-black/65"><i className="size-1.5 animate-pulse rounded-full bg-emerald-700" /> Usually replies quickly</p></div>
              </div>
              <button className="grid size-8 place-items-center rounded-full bg-black/10 text-xl leading-none transition hover:rotate-90 hover:bg-black hover:text-white" onClick={() => setSupportOpen(false)} aria-label="Close support message">×</button>
            </div>
          </div>
          <div className="p-5">
            <p className="text-[15px] font-extrabold text-white">Hi there! 👋</p>
            <p className="mt-2 text-xs leading-[1.7] text-[#aaa]">Have a project, opportunity, or idea in mind? Send me a message and let&apos;s talk about building something great.</p>
            <a className="mt-5 flex w-full items-center justify-between rounded-xl bg-white px-4 py-3.5 text-xs font-extrabold text-black transition hover:-translate-y-0.5 hover:bg-[#d6ad45] hover:shadow-[0_10px_30px_rgba(214,173,69,.15)]" href="mailto:charlesokoro15@gmail.com?subject=Portfolio%20Enquiry">
              <span>Send me an email</span><span className="text-lg leading-none">↗</span>
            </a>
            <p className="mt-3 text-center text-[9px] tracking-[.04em] text-[#555]">CHARLESOKORO15@GMAIL.COM</p>
          </div>
        </div>

        <button className="group relative cursor-pointer grid size-16 place-items-center rounded-full border border-[#d6ad45]/40 bg-[#d6ad45] text-black shadow-[0_12px_40px_rgba(214,173,69,.3)] transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_18px_55px_rgba(214,173,69,.42)] max-[480px]:size-14" onClick={() => setSupportOpen(!supportOpen)} aria-label={supportOpen ? "Close support chat" : "Open support chat"} aria-expanded={supportOpen}>
          <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#d6ad45]/25 [animation-duration:2.4s]" />
          <span className={`${supportOpen ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"} absolute  transition-all duration-300`}>
            <svg width="25" height="25" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 11.5a7.5 7.5 0 0 1-8 7.48 8.7 8.7 0 0 1-3.32-.88L4 20l1.47-4.17A7.5 7.5 0 1 1 20 11.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/></svg>
          </span>
          <span className={`${supportOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"} absolute text-[30px] font-light leading-none transition-all duration-300`}>×</span>
          {!supportOpen && <span className="absolute -right-0.5 -top-0.5 size-4 rounded-full border-[3px] border-[#080808] bg-emerald-500" />}
        </button>
      </div>
    </main>
  );
}


// "use client";

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";

// const resumeUrl = "https://drive.google.com/file/d/1d4CzkRfsU_KGp1GTcMOGZxB4g-wej5Cv/view?usp=drive_link";

// const projects = [
//   {
//     number: "01",
//     title: "Ecotra",
//     category: "Ecotourism · Web & Mobile",
//     description: "An ecotourism travel platform that helps people discover destinations and enjoy more thoughtful, sustainable travel experiences across web and mobile.",
//     tags: ["FrontEnd","React", "React Native", "Travel"],
//     icon: "/icons/ecoicon.png",
//     link: "https://ecotra.org",
//   },
//   {
//     number: "02",
//     title: "Sarawark Global",
//     category: "E-commerce · Web & Mobile",
//     description: "A modern e-commerce experience built for seamless product discovery and shopping, delivered across both website and mobile app.",
//     tags: ["FrontEnd","React", "React Native", "E-commerce"],
//     icon: "/icons/saraicon.png",
//     link: "https://sarawarkglobal.com",
//   },
// ];

// const services = [
//   ["01", "Frontend Development", "Fast, accessible, and scalable interfaces built with React and Next.js."],
//   ["02", "Mobile App Development", "Native-feeling iOS and Android experiences powered by React Native."],
//   ["03", "UI Engineering", "Pixel-perfect implementation with thoughtful motion and meaningful interaction."],
// ];

// const shell = "mx-auto w-[calc(100%-80px)] max-w-[1240px] max-[1100px]:w-[calc(100%-56px)] max-[800px]:w-[calc(100%-36px)] max-[480px]:w-[calc(100%-28px)]";
// const eyebrow = "text-[9px] font-extrabold uppercase tracking-[.2em] text-[#777672]";
// const serifGold = "font-[family-name:var(--font-instrument-serif)] font-normal italic text-[#d6ad45]";

// function Arrow({ diagonal = true }) {
//   return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
// }

// function Reveal({ as: Tag = "div", className = "", children, ...props }) {
//   const ref = useRef(null);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => {
//       if (entry.isIntersecting) {
//         setVisible(true);
//         observer.disconnect();
//       }
//     }, { threshold: 0.12 });
//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <Tag
//       ref={ref}
//       className={`${className} transition-all duration-700 ease-out ${visible ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"}`}
//       {...props}
//     >
//       {children}
//     </Tag>
//   );
// }

// export default function Home() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [photoReady, setPhotoReady] = useState(true);
//   const [supportOpen, setSupportOpen] = useState(false);

//   useEffect(() => {
//     document.body.style.overflow = menuOpen ? "hidden" : "";
//     return () => { document.body.style.overflow = ""; };
//   }, [menuOpen]);

//   const closeMenu = () => setMenuOpen(false);

//   return (
//     <main className="w-full max-w-full overflow-x-clip bg-[#080808] text-[#f4f1ea]">
//       <nav className={`${shell} relative z-40 flex h-[95px] items-center justify-between max-[800px]:h-[75px] max-[480px]:h-[68px]`}>
//         <a className="group flex shrink-0 items-center gap-3" href="#top" aria-label="Charles Okoro home">
//           <span className="relative grid size-14 shrink-0 place-items-center overflow-hidden rounded-full border border-[#343434] bg-[#151515] shadow-[0_8px_26px_rgba(0,0,0,.28)] transition duration-300 group-hover:border-[#d6ad45]/60 max-[800px]:size-[50px] max-[480px]:size-[46px]">
//             <span className="text-xs font-extrabold tracking-[.04em] text-[#d6ad45]">CO</span>
//             {photoReady && <Image className="object-cover" src="/images/mine.jpeg" alt="Charles Okoro" fill sizes="(max-width: 480px) 46px, (max-width: 800px) 50px, 56px" priority onError={() => setPhotoReady(false)} />}
//           </span>
//           <span className="flex flex-col text-[11px] font-extrabold uppercase leading-[1.05] tracking-[.09em] max-[480px]:text-[9px]">
//             <span className="text-white">Charles</span>
//             <span className="text-[#d6ad45]">Okoro.</span>
//           </span>
//         </a>

//         <div className={`${menuOpen ? "max-[800px]:visible max-[800px]:translate-y-0 max-[800px]:opacity-100 max-[800px]:pointer-events-auto" : "max-[800px]:invisible max-[800px]:-translate-y-3 max-[800px]:opacity-0 max-[800px]:pointer-events-none"} flex gap-10 text-[13px] max-[800px]:fixed max-[800px]:inset-0 max-[800px]:z-50 max-[800px]:min-h-dvh max-[800px]:flex-col max-[800px]:items-stretch max-[800px]:justify-center max-[800px]:gap-0 max-[800px]:overflow-y-auto max-[800px]:bg-black/95 max-[800px]:px-6 max-[800px]:pb-[110px] max-[800px]:pt-[150px] max-[800px]:text-[clamp(38px,12vw,64px)] max-[800px]:font-extrabold max-[800px]:tracking-[-.055em] max-[800px]:backdrop-blur-xl max-[800px]:transition-all max-[800px]:duration-300 max-[360px]:px-[18px]`}>
//           <div className="absolute inset-x-0 top-0 hidden h-28 items-center justify-between border-b border-[#242424] pl-6 max-[800px]:flex max-[360px]:pl-[18px]">
//             <a className="relative grid size-[62px] place-items-center overflow-hidden rounded-full border border-[#333] bg-[#171717]" href="#top" onClick={closeMenu} aria-label="Charles Okoro home">
//               <span className="text-[13px] text-[#d6ad45]">CO</span>
//               {photoReady && <Image className="object-cover" src="/images/mine.jpeg" alt="Charles Okoro" fill sizes="62px" />}
//             </a>
//             <button className="flex h-full w-[100px] flex-col items-center justify-center border-0 border-l border-[#444] bg-[#343434] text-[44px] font-extralight leading-none transition-colors hover:bg-[#d6ad45] hover:text-black" onClick={closeMenu} aria-label="Close menu">×</button>
//           </div>

//           {[["Work", "#work"], ["About", "#about"], ["Services", "#services"], ["Contact", "#contact"]].map(([label, href]) => (
//             <a key={label} className="text-[#b8b7b3] transition-colors hover:text-white max-[800px]:w-full max-[800px]:border-b max-[800px]:border-[#242424] max-[800px]:py-3 max-[800px]:text-[#eee] max-[800px]:after:float-right max-[800px]:after:mt-[.2em] max-[800px]:after:text-[.45em] max-[800px]:after:font-normal max-[800px]:after:text-[#4e4e4e] max-[800px]:after:content-['↗'] max-[800px]:hover:text-[#d6ad45]" href={href} onClick={closeMenu}>{label}</a>
//           ))}

//           <div className="absolute bottom-7 left-6 right-6 hidden items-end justify-between gap-5 text-[8px] font-bold uppercase leading-normal tracking-[.1em] text-[#666] max-[800px]:flex max-[480px]:flex-col max-[480px]:items-start max-[480px]:gap-2 max-[360px]:left-[18px] max-[360px]:right-[18px]">
//             <span>Based in Enugu, Nigeria</span>
//             <a className="text-[10px] normal-case tracking-normal text-[#aaa]" href="mailto:charlesokoro15@gmail.com">charlesokoro15@gmail.com</a>
//           </div>
//         </div>

//         <a className="group relative flex items-center overflow-hidden rounded-full border border-transparent px-4 py-3 text-[10px] font-extrabold uppercase tracking-[.1em] text-[#d8d8d4] shadow-[0_0_25px_rgba(214,173,69,.08)] transition duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:text-white hover:shadow-[0_10px_40px_rgba(214,173,69,.25)] max-[800px]:hidden" href="#contact">
//           <span className="pointer-events-none absolute -inset-[90%] animate-[availabilityOrbit_6s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_250deg,#8e681f_285deg,#f8dc82_320deg,#d6ad45_340deg,transparent_360deg)]" />
//           <span className="pointer-events-none absolute inset-[1px] rounded-full bg-[#0c0c0c]" />
//           <span className="relative z-10 mr-2.5 grid size-2 place-items-center">
//             <i className="absolute size-2 rounded-full bg-[#d6ad45] shadow-[0_0_12px_#d6ad45]" />
//             <i className="absolute size-2 animate-ping rounded-full border border-[#d6ad45] [animation-duration:1.8s]" />
//           </span>
//           <span className="relative z-10">Available for work</span>
//           <span className="relative z-10 ml-2 text-sm leading-none text-[#d6ad45] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
//         </a>
//         <button className="hidden size-12 rounded-full border border-[#303030] max-[800px]:block" onClick={() => setMenuOpen(true)} aria-label="Open menu" aria-expanded={menuOpen}>
//           <span className="mx-auto my-1.5 block h-px w-5 bg-white" /><span className="mx-auto my-1.5 block h-px w-5 bg-white" />
//         </button>
//       </nav>

//       <section className={`${shell} relative flex h-[calc(100vh-95px)] min-h-[760px] max-h-[920px] flex-col justify-center max-[800px]:h-[calc(100svh-75px)] max-[800px]:min-h-[690px] max-[480px]:h-[calc(100svh-68px)] max-[480px]:min-h-[620px] max-[480px]:py-11`} id="top">
//         <div className="pointer-events-none absolute left-[45%] top-[42%] size-[600px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(214,173,69,.08),transparent_64%)]" />
//         <div className="mb-11 flex w-full justify-between text-[10px] uppercase tracking-[.16em] text-[#7e7d79] animate-[fadeUp_.8s_ease_forwards] max-[800px]:mb-9 max-[800px]:[&>span:last-child]:hidden">
//           <span>Based in Enugu, Nigeria</span><span>Frontend &amp; Mobile Developer</span>
//         </div>
//         <h1 className="relative m-0 max-w-full text-[clamp(64px,9.5vw,142px)] font-extrabold leading-[.84]  tracking-[-.075em] opacity-0 animate-[fadeUp_.8s_ease_.18s_forwards] max-[1100px]:text-[10.5vw] max-[800px]:text-[clamp(54px,16vw,82px)] max-[800px]:leading-[.9] max-[480px]:text-[clamp(46px,15vw,64px)] max-[360px]:text-[clamp(42px,13.5vw,48px)]">
//           I build digital<br />
//           <span className={serifGold}>experiences</span><br className="hidden max-[800px]:block" />
//           <span className="ml-[.36em] mt-4 mb-4 inline-block max-[800px]:ml-0">that</span><br className="max-[800px]:hidden" />
//           <span className="inline-block max-[800px]:ml-[.36em]">feel <em className="font-[family-name:var(--font-instrument-serif)] font-normal">alive.</em></span>
//         </h1>
//         <div className="mt-12 flex items-center justify-end gap-20 opacity-0 animate-[fadeUp_.8s_ease_.36s_forwards] max-[800px]:mt-10 max-[800px]:justify-between max-[800px]:gap-6 max-[480px]:mt-8 max-[480px]:items-end">
//           <p className="max-w-[430px] text-[15px] leading-[1.7] text-[#aaa9a5] max-[800px]:max-w-[280px] max-[800px]:text-xs max-[480px]:max-w-[245px]">I&apos;m Charles — a React &amp; React Native developer turning ambitious ideas into fast, polished products people love to use.</p>
//           <a className="flex size-[66px] shrink-0 items-center justify-center rounded-full border border-[#454545] text-2xl leading-none transition hover:scale-110 hover:border-[#d6ad45] hover:bg-[#d6ad45] hover:text-black max-[800px]:size-[54px] max-[480px]:size-12" href="#work" aria-label="View selected work">
//             <span className="flex size-full rotate-90 items-center ml-1.5 justify-center leading-none"><Arrow diagonal={false} /></span>
//           </a>
//         </div>
//         <div className="absolute bottom-7 left-0 flex items-center gap-3 text-[8px] tracking-[.16em] text-[#64635f] max-[800px]:hidden"><span className="h-px w-7 bg-[#64635f]" /> SCROLL TO EXPLORE</div>
//       </section>

//       <section className="-rotate-[1.2deg] scale-[1.02] overflow-hidden whitespace-nowrap border-y border-[#272727] bg-[#0d0d0d] py-5" aria-hidden="true">
//         <div className="inline-block animate-[marquee_22s_linear_infinite] text-[11px] tracking-[.16em]">REACT <i className="mx-7 text-[#d6ad45]">✦</i> NEXT.JS <i className="mx-7 text-[#d6ad45]">✦</i> REACT NATIVE <i className="mx-7 text-[#d6ad45]">✦</i> JAVASCRIPT <i className="mx-7 text-[#d6ad45]">✦</i> TAILWIND CSS <i className="mx-7 text-[#d6ad45]">✦</i> GITHUB <i className="mx-7 text-[#d6ad45]">✦</i> REDUX <i className="mx-7 text-[#d6ad45]">✦</i></div>
//       </section>

//       <section className={`${shell} py-[150px] max-[800px]:py-24 max-[480px]:py-20`} id="work">
//         <Reveal as="header" className="grid grid-cols-[1fr_2fr_1fr] items-end border-b border-[#272727] pb-14 max-[800px]:grid-cols-1 max-[800px]:gap-6">
//           <p className={eyebrow}>( SELECTED WORK )</p>
//           <h2 className="m-0 text-[clamp(45px,5.5vw,78px)] font-extrabold leading-[.95] tracking-[-.055em] max-[480px]:text-[44px]">Things I&apos;ve <span className={serifGold}>built.</span></h2>
//           <p className="max-w-[250px] justify-self-end text-xs leading-relaxed text-[#82817d] max-[800px]:justify-self-start">A selection of products where strategy, design, and code came together.</p>
//         </Reveal>
//         {projects.map((project, index) => (
//           <Reveal as="a" href={project.link} target="_blank" rel="noreferrer" className="group grid grid-cols-[1.4fr_1fr] items-center gap-[70px] border-b border-[#272727] py-[70px] max-[1100px]:grid-cols-[1.2fr_1fr] max-[1100px]:gap-11 max-[800px]:grid-cols-1 max-[800px]:gap-9 max-[800px]:py-12 max-[480px]:gap-7 max-[480px]:py-10" key={project.title}>
//             <div className={`relative grid min-h-[440px] place-items-center overflow-hidden transition duration-500 group-hover:scale-[.985] max-[800px]:min-h-[330px] max-[480px]:min-h-[290px] max-[360px]:min-h-[260px] ${index === 0 ? "bg-gradient-to-br from-[#e3c266] to-[#b8892f] text-black" : "bg-[#8271ff] text-white"}`}>
//               <span className="absolute inset-0 opacity-[.13] [background-image:linear-gradient(currentColor_1px,transparent_1px),linear-gradient(90deg,currentColor_1px,transparent_1px)] [background-size:45px_45px]" />
//               <div className="flex h-[72%] w-[57%] -rotate-[5deg] flex-col justify-center rounded-[18px] border-[7px] border-[#1f1f1f] bg-[#0c0c0c] p-7 text-white shadow-[0_35px_70px_rgba(0,0,0,.35)] transition duration-500 group-hover:-rotate-2 group-hover:scale-105 max-[1100px]:w-[65%] max-[800px]:w-[64%] max-[480px]:w-[69%] max-[480px]:p-5 max-[360px]:w-[72%]">
//                 <div className="relative mb-4 grid size-14 shrink-0 place-items-center overflow-hidden rounded-full border border-[#3b3b3b] bg-white shadow-[0_10px_28px_rgba(0,0,0,.35)] ring-2 ring-white/5 transition duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_14px_35px_rgba(0,0,0,.45)] max-[480px]:size-12">
//                   <Image
//                     className="object-contain p-1 mix-blend-multiply"
//                     src={project.icon}
//                     alt={`${project.title} logo`}
//                     fill
//                     sizes="(max-width: 480px) 48px, 56px"
//                   />
//                 </div>
//                 <small className="uppercase tracking-[.12em] text-[#aaa]">{project.title}</small>
//                 <strong className="my-5 whitespace-pre-line text-[clamp(24px,3vw,44px)] leading-[.95] tracking-[-.06em] max-[480px]:text-[27px]">{index === 0 ? "Explore. Enjoy.\nConserve." : "Shop without\nboundaries."}</strong>
//                 <span className="mt-2.5 h-[7px] w-full rounded bg-[#333]" /><span className="mt-2.5 h-[7px] w-3/5 rounded bg-[#333]" />
//               </div>
//               <span className="absolute bottom-4 right-5 text-[10px]">{project.number}</span>
//             </div>
//             <div>
//               <p className="text-[9px] font-extrabold uppercase tracking-[.15em] text-[#73726e]">{project.category}</p>
//               <h3 className="my-5 flex justify-between text-[42px] font-extrabold tracking-[-.04em] max-[800px]:text-[34px]">{project.title} <span className="text-2xl transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#d6ad45]"><Arrow /></span></h3>
//               <p className="text-[13px] leading-[1.7] text-[#969591]">{project.description}</p>
//               <div className="mt-7 flex flex-wrap gap-2">{project.tags.map((tag) => <span className="rounded-full border border-[#303030] px-3 py-2 text-[9px] font-bold text-[#aaa]" key={tag}>{tag}</span>)}</div>
//             </div>
//           </Reveal>
//         ))}
//       </section>

//       <section className={`${shell} grid grid-cols-[1fr_3fr] gap-10 border-t border-[#272727] py-[150px] max-[1100px]:grid-cols-[240px_1fr] max-[800px]:grid-cols-1 max-[800px]:gap-12 max-[800px]:py-24 max-[480px]:py-20`} id="about">
//         <Reveal className="flex flex-col items-start max-[800px]:grid max-[800px]:grid-cols-2 max-[800px]:items-start">
//           <p className={`${eyebrow} max-[800px]:col-span-2`}>( ABOUT ME )</p>
//           <div className="relative mt-14 grid aspect-[4/5] w-full max-w-[250px] place-items-center overflow-hidden border border-[#292929] bg-[#151515] max-[800px]:mt-8 max-[800px]:max-w-[260px] max-[480px]:max-w-[210px]">
//             <span className="text-4xl font-extrabold tracking-[-.08em] text-[#d6ad45]">CO</span>
//             {photoReady && <Image className="object-cover grayscale transition duration-500 hover:scale-105 hover:grayscale-0" src="/images/mine.jpeg" alt="Charles Okoro, frontend and mobile developer" fill sizes="(max-width: 480px) 210px, (max-width: 800px) 260px, 250px" onError={() => setPhotoReady(false)} />}
//           </div>
//           <p className="text-[9px] uppercase leading-relaxed tracking-[.08em] text-[#73726e] max-[800px]:self-end max-[800px]:pl-5">Charles Okoro<br />Frontend &amp; Mobile Developer</p>
//         </Reveal>
//         <Reveal>
//           <h2 className="m-0 max-w-[950px] text-[clamp(42px,5.6vw,76px)] font-extrabold leading-[1.05] tracking-[-.055em] max-[480px]:text-[42px] max-[360px]:text-[37px]">I care about the <span className="text-[#d6ad45]">details</span> that turn a product from functional into <em className="font-[family-name:var(--font-instrument-serif)] font-normal">unforgettable.</em></h2>
//           <div className="mb-11 ml-[33%] mt-16 grid grid-cols-2 gap-12 text-[13px] leading-[1.8] text-[#92918d] max-[1100px]:ml-[18%] max-[800px]:ml-0 max-[800px]:mt-11 max-[800px]:grid-cols-1 max-[800px]:gap-3">
//             <p>I&apos;m Charles, a Frontend React Developer based in Enugu. I began my journey in tech in 2022 and have since focused on turning ambitious ideas into polished web and mobile experiences through clean engineering, thoughtful design, and continuous learning.</p>
//             <p>My work includes the Ecotra ecotourism platform and Sarawark Global&apos;s e-commerce experiences. Away from code, I enjoy gaming, watching great films, working out, listening to music, exploring new places, and keeping up with new ideas in design and technology.</p>
//           </div>
//           <div className="ml-[33%] flex flex-wrap items-center gap-7 max-[1100px]:ml-[18%] max-[800px]:ml-0 max-[800px]:flex-col max-[800px]:items-start">
//             <a className="flex min-w-[190px] items-center justify-between gap-7 rounded-full border border-[#d6ad45] bg-[#d6ad45] px-5 py-2 text-[11px] font-extrabold uppercase tracking-[.08em] text-black transition hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(214,173,69,.2)]" href={resumeUrl} target="_blank" rel="noreferrer"><span>View my résumé</span><span className="text-lg"><Arrow /></span></a>
//             <a className="border-b border-[#777] pb-2 text-xs font-bold" href="#contact">Let&apos;s work together <span className="ml-3"><Arrow /></span></a>
//           </div>
//         </Reveal>
//       </section>

//       <section className={`${shell} pb-[150px] pt-[60px] max-[800px]:py-24 max-[480px]:py-20`} id="services">
//         <Reveal as="header" className="grid grid-cols-[1fr_2fr_1fr] items-end border-b border-[#272727] pb-14 max-[800px]:grid-cols-1 max-[800px]:gap-6">
//           <p className={eyebrow}>( WHAT I DO )</p><h2 className="text-[clamp(45px,5.5vw,78px)] font-extrabold leading-[.95] tracking-[-.055em] max-[480px]:text-[44px]">How I can <span className={serifGold}>help.</span></h2>
//         </Reveal>
//         {services.map(([num, title, text]) => (
//           <Reveal className="group grid grid-cols-[80px_1.3fr_1fr_30px] items-center gap-9 border-b border-[#272727] py-10 max-[800px]:grid-cols-[35px_1fr_20px] max-[800px]:gap-4 max-[480px]:py-8" key={title}>
//             <span className="text-[10px] text-[#64635f]">{num}</span><h3 className="text-[28px] font-extrabold tracking-[-.03em] max-[480px]:text-[22px]">{title}</h3><p className="max-w-[330px] text-xs leading-relaxed text-[#8f8e8a] max-[800px]:col-start-2">{text}</p><span className="text-[22px] transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#d6ad45] max-[800px]:col-start-3 max-[800px]:row-start-1"><Arrow /></span>
//           </Reveal>
//         ))}
//       </section>

//       <section className={`${shell} min-h-[760px] pt-40 max-[800px]:min-h-0 max-[800px]:pt-24`} id="contact">
//         <Reveal as="p" className={eyebrow}>( HAVE A PROJECT IN MIND? )</Reveal>
//         <Reveal as="h2" className="my-14 text-[clamp(70px,11vw,155px)] font-extrabold leading-[.8] tracking-[-.075em] max-[800px]:my-10 max-[800px]:text-[17vw] max-[480px]:text-[18vw]">Let&apos;s make<br />something <span className={serifGold}>great.</span></Reveal>
//         <Reveal as="a" className="inline-flex max-w-full gap-10 border-b border-[#555] pb-3 text-[17px] font-bold max-[480px]:w-full max-[480px]:justify-between max-[480px]:gap-3 max-[480px]:break-all max-[480px]:text-[clamp(11px,3.5vw,16px)]" href="mailto:charlesokoro15@gmail.com">charlesokoro15@gmail.com <span className="text-[#d6ad45]"><Arrow /></span></Reveal>
//         <footer className="mt-[150px] flex min-h-[130px] items-center justify-between gap-9 border-t border-[#272727] py-7 text-[9px] uppercase tracking-[.1em] text-[#6e6d69] max-[800px]:mt-[120px] max-[800px]:flex-col max-[800px]:items-start max-[800px]:gap-6 max-[800px]:py-9">
//           <div className="max-w-[430px]"><p className="text-[#898884]">© {new Date().getFullYear()} Charles Okoro. Built with intention.</p><p className="mt-2 max-w-[420px] text-[7px] normal-case leading-relaxed tracking-[.08em] text-[#555450]">Brand names and logos belong to their respective owners and are shown only to identify projects I contributed to.</p></div>
//           <div className="flex gap-7"><a className="hover:text-white" href="https://www.linkedin.com/in/charles-okoro-4a838b246" target="_blank" rel="noreferrer">LinkedIn</a><a className="hover:text-white" href="https://github.com/Charleslogan99" target="_blank" rel="noreferrer">GitHub</a></div>
//           <a className="hover:text-white" href="#top">Back to top ↑</a>
//         </footer>
//       </section>

//       <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end max-[480px]:bottom-4  max-[480px]:right-4">
//         <div className={`${supportOpen ? "visible mb-4 translate-y-0 scale-100 opacity-100" : "invisible mb-1 translate-y-4 scale-95 opacity-0"} w-[330px] origin-bottom-right overflow-hidden rounded-[24px] border border-white/10 bg-[#111]/95 shadow-[0_24px_80px_rgba(0,0,0,.55),0_0_35px_rgba(214,173,69,.08)] backdrop-blur-xl transition-all duration-500 max-[480px]:w-[calc(100vw-32px)]`} role="dialog" aria-label="Contact Charles">
//           <div className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#d6ad45] to-[#a87b25] p-5 text-black">
//             <div className="absolute -right-8 -top-10 size-28 rounded-full border border-black/10" />
//             <div className="absolute -right-3 -top-3 size-16 rounded-full border border-black/10" />
//             <div className="relative flex items-start justify-between gap-4">
//               <div className="flex items-center gap-3">
//                 <span className="relative grid size-11 place-items-center overflow-hidden rounded-full border-2 border-black/15 bg-[#171717] text-[11px] font-extrabold text-[#d6ad45]">
//                   CO
//                   {photoReady && <Image className="object-cover" src="/images/mine.jpeg" alt="Charles Okoro" fill sizes="44px" />}
//                 </span>
//                 <div><p className="text-sm font-extrabold">Charles Okoro</p><p className="mt-0.5 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[.08em] text-black/65"><i className="size-1.5 animate-pulse rounded-full bg-emerald-700" /> Usually replies quickly</p></div>
//               </div>
//               <button className="grid size-8 place-items-center rounded-full bg-black/10 text-xl leading-none transition hover:rotate-90 hover:bg-black hover:text-white" onClick={() => setSupportOpen(false)} aria-label="Close support message">×</button>
//             </div>
//           </div>
//           <div className="p-5">
//             <p className="text-[15px] font-extrabold text-white">Hi there! 👋</p>
//             <p className="mt-2 text-xs leading-[1.7] text-[#aaa]">Have a project, opportunity, or idea in mind? Send me a message and let&apos;s talk about building something great.</p>
//             <a className="mt-5 flex w-full items-center justify-between rounded-xl bg-white px-4 py-3.5 text-xs font-extrabold text-black transition hover:-translate-y-0.5 hover:bg-[#d6ad45] hover:shadow-[0_10px_30px_rgba(214,173,69,.15)]" href="mailto:charlesokoro15@gmail.com?subject=Portfolio%20Enquiry">
//               <span>Send me an email</span><span className="text-lg leading-none">↗</span>
//             </a>
//             <p className="mt-3 text-center text-[9px] tracking-[.04em] text-[#555]">CHARLESOKORO15@GMAIL.COM</p>
//           </div>
//         </div>

//         <button className="group relative cursor-pointer grid size-16 place-items-center rounded-full border border-[#d6ad45]/40 bg-[#d6ad45] text-black shadow-[0_12px_40px_rgba(214,173,69,.3)] transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_18px_55px_rgba(214,173,69,.42)] max-[480px]:size-14" onClick={() => setSupportOpen(!supportOpen)} aria-label={supportOpen ? "Close support chat" : "Open support chat"} aria-expanded={supportOpen}>
//           <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#d6ad45]/25 [animation-duration:2.4s]" />
//           <span className={`${supportOpen ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"} absolute  transition-all duration-300`}>
//             <svg width="25" height="25" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 11.5a7.5 7.5 0 0 1-8 7.48 8.7 8.7 0 0 1-3.32-.88L4 20l1.47-4.17A7.5 7.5 0 1 1 20 11.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/></svg>
//           </span>
//           <span className={`${supportOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"} absolute text-[30px] font-light leading-none transition-all duration-300`}>×</span>
//           {!supportOpen && <span className="absolute -right-0.5 -top-0.5 size-4 rounded-full border-[3px] border-[#080808] bg-emerald-500" />}
//         </button>
//       </div>
//     </main>
//   );
// }
