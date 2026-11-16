import image1 from "/project/mojito.webp";
import image2 from "/project/nimbus_keyboards.png";
import image3 from "/project/macbook.png";
import image4 from "/project/food_project.jfif";
import image5 from "/project/printing.jpg";
import image6 from "/project/vR_project.webp";

export const PROJECTS = [
{
    id: 1,
    title: "Mojito — Cocktail Bar Landing",
    description: "immersive brand site for a craft cocktail bar",
    src: image1,
    category: "Hospitality & Beverage",
    technologies: "React, Vite, GSAP, Tailwind CSS",
    year: "2025",
    liveUrl: "https://cocktail-project-puce.vercel.app/",
    githubUrl: "#",
    stat: "LIVE",
    overview: "A full-bleed, motion-led landing page for a craft cocktail bar, built around a summer-night mood rather than a product grid. Parallax foliage frames the hero and the menu sliders, drink cards split into \"most popular\" and \"most loved\" rails, and a pinned drink slider walks through recipes one cocktail at a time. A mixology detail grid with a 4.5/5 rating from 1,200+ customers anchors the trust section, while scroll-scrubbed reveals and oversized display type carry the brand voice — \"Cool. Crisp. Classic.\" — from the fold to the CTA."
},
  {
    id: 2,
    title: "Nimbus Keyboards",
    description: "high-impact product launch page for the Vapor75 keyboard",
    src: image2,
    category: "Product Marketing & E-Commerce",
    technologies: "Next.js, TypeScript, Prismic CMS, Tailwind CSS, Framer Motion",
    year: "2025",
    liveUrl: "https://nimbus-keyboards-mario.vercel.app/",
    githubUrl: "#",
    stat: "LIVE",
    overview: "A conversion-first product launch page for Nimbus Keyboards' Vapor75, built to make a premium mechanical keyboard feel as good on screen as it does under your fingers. Sticky buy CTAs, a feature grid covering the full aluminum case, hot-swappable switches and E-Ink status display, and an interactive customizer that lets visitors swap keycap sets and switch types with a live preview before they commit. Backed by social proof — 10,000+ customers, free worldwide shipping, 30-day guarantee, 2-year warranty — all powered by a Prismic-driven content model so the marketing team can ship updates without a deploy."
},
 {
    id: 3,
    title: "MacBook Pro — Scroll Story",
    description: "Apple-style product page driven entirely by scroll animation",
    src: image3,
    category: "Interactive Product Storytelling",
    technologies: "React, GSAP ScrollTrigger, Lenis, Tailwind CSS",
    year: "2025",
    liveUrl: "https://mac-book-web.vercel.app/",
    githubUrl: "#",
    stat: "LIVE",
    overview: "A cinematic recreation of Apple's MacBook Pro page, built to prove out scroll choreography at Apple's level of polish. Pinned sections drive a frame-by-frame 3D device sequence, then hand off to size and color selectors, an M4 chip breakdown with speed benchmarks, a GPU/ray-tracing performance gallery and an Apple Intelligence feature grid — every transition scrubbed to scroll position so the page reads like a film instead of a brochure. The technical challenge was keeping 60fps through heavy image sequences: preloaded assets, GPU-friendly transforms and a single master timeline with strict ScrollTrigger scrubbing."
},
   {
    id: 4,
    title: "Web Development",
    description: "modern, fast, responsive website development",
    src: image4,
    category: "Full Stack Development",
    technologies: "React, Three.js, Tailwind, GSAP",
    year: "2024",
    liveUrl: "https://mac-book-web.vercel.app/",
    githubUrl: "https://github.com/mariof5/mac-book-web.git",
    stat:"coming soon",
    overview: "Modern, fast, responsive website development using cutting-edge technologies. We build scalable web applications that perform excellently across all devices and provide exceptional user experiences with clean, maintainable code."
  },
  
  {
    id: 5,
    title: "Avera Printing Trade",
    description: "corporate site for a commercial print and branding house",
    src: image5,
    category: "Business & Industrial Services",
    technologies: "HTML5, CSS3, JavaScript, Bootstrap",
    year: "#",
    liveUrl: "#",
    githubUrl: "#",
    stat: "comming soon",
    overview: "A corporate marketing site for Avera Printing Trade, a commercial printer serving Addis Ababa with 20+ years in the trade. The structure is built to sell capability fast: a four-service breakdown covering UV, DTF, offset and screen printing, a rotating category rail spanning logo design through trophy and book print, and a filterable project gallery split by print type so visitors land on work that matches their job. A modal order form captures Totbag enquiries inline, and the site leans on its Totbags exclusivity deal with Shamas Natural as a credibility hook."
},
  {
    id: 6,
    title: "video editing portfolio",
    description: "clean user experience crafted for conversions",
    src: image6,
    category: "Portfolio Development",
    technologies: "React, node.js, express, firebase",
    year: "2024",
    liveUrl: "#",
    githubUrl: "#",
    stat:"LIVE",
    overview: "Clean user experience crafted for conversions with a focus on intuitive interfaces and seamless interactions. We design digital products that users love and that drive measurable business results through thoughtful UX research and UI design."
  },
];

export default PROJECTS;