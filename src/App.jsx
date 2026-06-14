import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  Blocks,
  Building2,
  CheckCircle2,
  ChevronRight,
  Compass,
  DraftingCompass,
  Factory,
  Layers3,
  Mail,
  MapPin,
  Menu,
  MonitorCog,
  Palette,
  PenTool,
  Phone,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import "./styles.css";

const images = {
  hero: "https://framerusercontent.com/images/HKTsO2sJppI3QbTtg2jMzN6FwEM.jpg?width=4096&height=1724",
  construction: "https://framerusercontent.com/images/2Au4DHXYa33o5C9yrriEB5q8.jpg?width=4096&height=2731",
  interior: "https://framerusercontent.com/images/0iER8vo5TXMWdL84cEkuWRjHJg.jpg?width=4096&height=3072",
  branding: "https://framerusercontent.com/images/UxUhhLOtUyLXQQC61zVyYjEMEAQ.jpg?width=2400&height=1600",
  digital: "https://framerusercontent.com/images/ckM2S8aEPRs80cHPU9PntqL7U5E.jpg?width=2400&height=1483",
  projectA: "https://framerusercontent.com/images/8JrdrkTs7B4k82xWUxPfwlv9I.jpg?width=4096&height=2731",
  projectB: "https://framerusercontent.com/images/90nFbgLbsx8yqFRz0P7WMUsUpo.jpg?width=4096&height=2734",
  projectC: "https://framerusercontent.com/images/zVoxlwpiAH0LkcCAlhK23jMI8w.jpg?width=3456&height=2635",
};

const navItems = [
  ["Services", "#services"],
  ["Process", "#process"],
  ["Projects", "#projects"],
  ["Expertise", "#expertise"],
  ["Contact", "#contact"],
];

const services = [
  {
    icon: Building2,
    title: "Construction",
    description:
      "Coordinated construction support for residential, commercial, and workspace projects, from site planning to delivery.",
    capabilities: ["Build coordination", "Finishing works", "Site execution"],
    image: images.construction,
  },
  {
    icon: DraftingCompass,
    title: "Interior Design",
    description:
      "Purposeful interiors for homes, offices, hospitality, and retail environments, designed around comfort, function, and identity.",
    capabilities: ["Space planning", "Furniture concepts", "Material palettes"],
    image: images.interior,
  },
  {
    icon: Palette,
    title: "Branding",
    description:
      "Visual identity and environmental branding that turn physical and digital touchpoints into one coherent customer experience.",
    capabilities: ["Identity systems", "Signage direction", "Brand applications"],
    image: images.branding,
  },
  {
    icon: MonitorCog,
    title: "Digital Services",
    description:
      "Responsive websites, digital touchpoints, and conversion-focused interfaces shaped around each client's business goals.",
    capabilities: ["Website design", "SEO-friendly builds", "Performance care"],
    image: images.digital,
  },
  {
    icon: Blocks,
    title: "System Development",
    description:
      "Practical business systems and internal tools for teams that need cleaner operations, reporting, and customer workflows.",
    capabilities: ["Workflow tools", "Dashboards", "Custom systems"],
    image: images.projectB,
  },
  {
    icon: Factory,
    title: "Business Solutions",
    description:
      "Integrated advisory and execution support that connects design, technology, and physical delivery into one plan.",
    capabilities: ["Project planning", "Vendor coordination", "Launch support"],
    image: images.projectC,
  },
];

const projects = [
  {
    title: "Commercial Interior Transformation",
    category: "Interior + Finishing",
    description: "A premium office and customer-facing environment concept for a growing Addis Ababa business.",
    image: images.projectA,
  },
  {
    title: "Residential Fit-Out Suite",
    category: "Residential Design",
    description: "A warm, modern home interior direction pairing custom furniture, finishes, and lighting.",
    image: images.projectB,
  },
  {
    title: "Brand + Digital Launch System",
    category: "Branding + Web",
    description: "A coordinated identity, website, and digital presentation package for an ambitious service company.",
    image: images.projectC,
  },
];

const process = [
  ["01", "Discover", "Clarify the business goal, space requirements, audience, budget, and delivery constraints."],
  ["02", "Design", "Develop the visual direction, layouts, materials, systems, and execution roadmap."],
  ["03", "Coordinate", "Align suppliers, builders, designers, digital teams, and decision makers around one plan."],
  ["04", "Deliver", "Execute, refine, document, and hand over a space or system ready for real use."],
];

const reveal = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

function PillButton({ href, children, tone = "light" }) {
  return (
    <a className={`pill-button ${tone}`} href={href}>
      <span>{children}</span>
      <i aria-hidden="true">
        <ArrowUpRight size={18} strokeWidth={2.7} />
      </i>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Majestic Trading PLC home">
        <span className="brand-mark">
          <img src="/majestic-mark.png" alt="" aria-hidden="true" />
        </span>
        <span>Majestic Trading PLC</span>
      </a>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navItems.map(([label, href]) => (
          <a key={label} href={href}>
            {label}
          </a>
        ))}
      </nav>
      <a className="nav-cta" href="#contact">
        Start a Project
      </a>
      <button className="menu-toggle" onClick={() => setOpen(true)} aria-label="Open menu" type="button">
        <Menu size={25} />
      </button>
      <div className={`mobile-panel ${open ? "open" : ""}`} aria-hidden={!open}>
        <button className="panel-close" onClick={() => setOpen(false)} aria-label="Close menu" type="button">
          <X size={26} />
        </button>
        {navItems.map(([label, href]) => (
          <a key={label} href={href} onClick={() => setOpen(false)}>
            {label}
            <ChevronRight size={18} />
          </a>
        ))}
        <PillButton href="#contact" tone="dark">
          Request Consultation
        </PillButton>
      </div>
    </header>
  );
}

function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.35], [0, 140]);
  const scale = useTransform(scrollYProgress, [0, 0.35], [1.05, 1.16]);

  return (
    <section className="hero" id="top">
      <motion.img style={{ y, scale }} className="hero-bg" src={images.hero} alt="Premium architectural interior" />
      <div className="hero-scrim" />
      <div className="hero-content">
        <Reveal>
          <p className="eyebrow light">
            <Sparkles size={16} /> Addis Ababa multidisciplinary design and build partner
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1>Inspired spaces, built systems, stronger brands.</h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="hero-copy">
            Majestic Trading PLC brings interior design, finishing, construction, branding, digital services, system
            development, and business solutions into one premium delivery experience.
          </p>
        </Reveal>
        <Reveal className="hero-actions" delay={0.22}>
          <PillButton href="#contact">Start a Project</PillButton>
          <PillButton href="#services" tone="glass">
            Explore Services
          </PillButton>
        </Reveal>
      </div>
      <Reveal className="hero-cards" delay={0.3}>
        <div>
          <span>01</span>
          <strong>Interior & finishing</strong>
        </div>
        <div>
          <span>02</span>
          <strong>Construction support</strong>
        </div>
        <div>
          <span>03</span>
          <strong>Brand + digital systems</strong>
        </div>
      </Reveal>
    </section>
  );
}

function SectionIntro({ eyebrow, title, text, light = false }) {
  return (
    <div className={`section-intro ${light ? "light" : ""}`}>
      <Reveal>
        <p className={`eyebrow ${light ? "light" : ""}`}>
          <Compass size={16} /> {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2>{title}</h2>
      </Reveal>
      {text && (
        <Reveal delay={0.1}>
          <p>{text}</p>
        </Reveal>
      )}
    </div>
  );
}

function MetricStrip() {
  const metrics = [
    ["6", "Core disciplines"],
    ["3+", "Years of dedicated practice"],
    ["Addis Ababa", "Local project presence"],
    ["End-to-end", "Design, build, brand, digital"],
  ];
  return (
    <section className="metrics" aria-label="Company highlights">
      {metrics.map(([value, label], index) => (
        <Reveal key={label} delay={index * 0.04}>
          <strong>{value}</strong>
          <span>{label}</span>
        </Reveal>
      ))}
    </section>
  );
}

function About() {
  return (
    <section className="about-section">
      <div className="about-grid">
        <SectionIntro
          eyebrow="Company positioning"
          title="A single partner for spaces, brands, and digital growth."
          text="Majestic's strongest advantage is breadth: the company can shape the physical environment, the brand experience, and the digital presence around the same business goal."
        />
        <Reveal className="about-card">
          <p>
            From timeless residential interiors to productive commercial spaces, the work is framed around detail,
            functionality, and a client's unique vision. This concept sharpens that story into a premium, trust-led
            website experience.
          </p>
          <div className="check-list">
            {["Interior design and finishing", "Construction and woodworking", "Branding and website development"].map(
              (item) => (
                <span key={item}>
                  <CheckCircle2 size={18} /> {item}
                </span>
              ),
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="services-section" id="services">
      <SectionIntro
        eyebrow="Capabilities"
        title="Six service lines, one integrated standard."
        text="Each service is presented as a business capability, not a disconnected offering. That makes the homepage easier to scan and stronger for conversion."
      />
      <div className="service-grid">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Reveal className="service-card" key={service.title} delay={(index % 3) * 0.06}>
              <div className="service-image">
                <img src={service.image} alt={`${service.title} visual`} />
              </div>
              <div className="service-body">
                <div className="service-top">
                  <Icon size={24} />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="chips">
                  {service.capabilities.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const points = [
    [ShieldCheck, "Reliable coordination", "One project language across creative, construction, and digital teams."],
    [Layers3, "Premium presentation", "A refined process that makes complex services feel clear and confident."],
    [BadgeCheck, "Business-minded delivery", "Decisions are connected to usability, durability, brand value, and growth."],
  ];

  return (
    <section className="why-section">
      <SectionIntro
        eyebrow="Why choose us"
        title="Built for clients who need more than a vendor list."
        text="Majestic can own the full experience from concept through execution, giving clients fewer handoffs and a more coherent result."
        light
      />
      <div className="why-grid">
        {points.map(([Icon, title, text], index) => (
          <Reveal className="why-card" key={title} delay={index * 0.07}>
            <Icon size={26} />
            <h3>{title}</h3>
            <p>{text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="process-section" id="process">
      <SectionIntro
        eyebrow="Process"
        title="A clear path from intent to handover."
        text="The process mirrors premium agency delivery: discovery, design, coordination, and disciplined launch."
      />
      <div className="process-list">
        {process.map(([number, title, text], index) => (
          <Reveal className="process-row" key={title} delay={index * 0.05}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <SectionIntro
        eyebrow="Featured projects"
        title="Project storytelling that feels credible before the case studies are ready."
        text="These are concept placeholders until Majestic provides verified project photography, results, and client names."
      />
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Reveal className="project-card" key={project.title} delay={index * 0.06}>
            <img src={project.image} alt={`${project.title} placeholder`} />
            <div className="project-meta">
              <span>{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Expertise() {
  const expertise = [
    "Residential interiors",
    "Commercial fit-outs",
    "Office environments",
    "Hospitality concepts",
    "Custom furniture",
    "Website design",
    "Business systems",
    "Brand environments",
  ];

  return (
    <section className="expertise-section" id="expertise">
      <div className="expertise-copy">
        <SectionIntro
          eyebrow="Expertise"
          title="Designed for clients who want a polished outcome without fragmented execution."
          text="Majestic's service mix is strongest when a client needs the space, identity, and operating layer to feel connected."
          light
        />
      </div>
      <Reveal className="expertise-panel">
        {expertise.map((item) => (
          <span key={item}>
            <PenTool size={16} /> {item}
          </span>
        ))}
      </Reveal>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <SectionIntro
          eyebrow="Start the conversation"
          title="Bring the brief. Majestic can shape the space, the brand, and the system around it."
          text="Use the details below for direct outreach. The form is a front-end concept and can be wired to a backend in the next iteration."
        />
        <Reveal className="contact-grid">
          <div className="contact-card">
            <MapPin size={24} />
            <h3>Visit</h3>
            <p>Airport Road Addis Ababa, Dembel City Center Office # SFS 001, Addis Ababa, Ethiopia</p>
          </div>
          <div className="contact-card">
            <Phone size={24} />
            <h3>Call</h3>
            <p>+2519 11 25 36 89<br />+2519 23 57 26 50<br />+2519 11 25 36 79</p>
          </div>
          <div className="contact-card">
            <Mail size={24} />
            <h3>Email</h3>
            <p>contact@majestictradingplc.com</p>
          </div>
        </Reveal>
        <Reveal className="inquiry-form">
          <label>
            Name
            <input type="text" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" placeholder="you@example.com" />
          </label>
          <label>
            Service
            <select defaultValue="">
              <option value="" disabled>
                Select a service
              </option>
              {services.map((service) => (
                <option key={service.title}>{service.title}</option>
              ))}
            </select>
          </label>
          <label className="wide">
            Project brief
            <textarea placeholder="Tell us what you want to build, design, brand, or systemize." />
          </label>
          <button type="button" className="submit-button">
            Request Consultation <ArrowUpRight size={18} />
          </button>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  const year = useMemo(() => new Date().getFullYear(), []);
  return (
    <footer className="footer">
      <div>
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark">
            <img src="/majestic-mark.png" alt="" aria-hidden="true" />
          </span>
          <span>Majestic Trading PLC</span>
        </a>
        <p>Premium construction, interiors, branding, and digital services in Addis Ababa.</p>
      </div>
      <nav aria-label="Footer navigation">
        {navItems.map(([label, href]) => (
          <a key={label} href={href}>
            {label}
          </a>
        ))}
      </nav>
      <p className="copyright">© {year} Majestic Trading PLC. Concept homepage.</p>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Majestic Trading PLC",
            url: "https://www.majestictradingplc.com/",
            email: "contact@majestictradingplc.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Airport Road Addis Ababa, Dembel City Center Office # SFS 001",
              addressLocality: "Addis Ababa",
              addressCountry: "ET",
            },
            telephone: ["+251911253689", "+251923572650", "+251911253679"],
            makesOffer: services.map((service) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: service.title },
            })),
          }),
        }}
      />
      <Header />
      <main>
        <Hero />
        <MetricStrip />
        <About />
        <Services />
        <WhyChooseUs />
        <Process />
        <Projects />
        <Expertise />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
