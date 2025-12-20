import image1 from "/project/project_1.jpg";
import image2 from "/project/project_2.jpg";
import image3 from "/project/project_3.jpg";
import image4 from "/project/project_4.png";

export const PROJECTS = [
  {
    id: 1,
    title: "Brand Design",
    description: "high-end brand identity & creative direction",
    src: image4,
    category: "Branding & Identity",
    technologies: "Figma, Illustrator, Photoshop",
    year: "2024",
    liveUrl: "https://cocktail-project-puce.vercel.app/",
    githubUrl: "https://github.com/mariof5/gsap_cocktails.git",
    stat:"Live",
    overview: "High-end brand identity and creative direction services that transform businesses through strategic design thinking and visual storytelling. We create memorable brand experiences that resonate with target audiences and drive business growth."
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "clean user experience crafted for conversions",
    src: image2,
    category: "User Interface & Experience",
    technologies: "Figma, Sketch, Protopie",
    year: "2024",
    liveUrl: "",
    githubUrl: "#",
    stat:"LIVE",
    overview: "Clean user experience crafted for conversions with a focus on intuitive interfaces and seamless interactions. We design digital products that users love and that drive measurable business results through thoughtful UX research and UI design."
  },
  {
    id: 3,
    title: "Web Development",
    description: "modern, fast, responsive website development",
    src: image3,
    category: "Full Stack Development",
    technologies: "React, Node.js, MongoDB",
    year: "2024",
    liveUrl: "",
    githubUrl: "",
    stat:"coming soon",
    overview: "Modern, fast, responsive website development using cutting-edge technologies. We build scalable web applications that perform excellently across all devices and provide exceptional user experiences with clean, maintainable code."
  },
  {
    id: 4,
    title: "Motion Graphics",
    description: "smooth transitions, product animations & edits",
    src: image1,
    category: "Animation & Motion",
    technologies: "After Effects, Premiere Pro, Blender",
    year: "2024",
    liveUrl: "",
    githubUrl: "",
    stat:"coming soon",
    overview: "Smooth transitions, product animations, and professional video edits that bring stories to life. We create engaging motion graphics that capture attention and communicate complex ideas through beautiful, dynamic visual storytelling."
  },
  
];

export default PROJECTS;