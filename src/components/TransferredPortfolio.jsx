"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./TransferredPortfolio.module.css";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "story", label: "My Story" },
  { id: "techstack", label: "Stack" },
  { id: "projects", label: "Projects" },
  { id: "gallery", label: "Gallery" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const heroStats = [
  { label: "Years Experience", count: 8 },
  { label: "Projects Delivered", count: 50 },
  { label: "Happy Clients", count: 30 },
];

const aboutCards = [
  { icon: "🚀", title: "Full-Stack", subtitle: "Development" },
  { icon: "🤖", title: "AI & ML", subtitle: "Integration" },
  { icon: "⚙️", title: "CRM", subtitle: "Automation" },
  { icon: "☁️", title: "Cloud", subtitle: "Architecture" },
];

const timelineItems = [
  {
    year: "2016 - 2018",
    title: "Junior Developer",
    desc: "Started with front-end interfaces and back-end fundamentals, building dependable internal tools and learning how to ship practical software in real environments.",
    tag: "HTML · CSS · JS · PHP",
  },
  {
    year: "2018 - 2020",
    title: "Mid-Level Developer",
    desc: "Expanded into Laravel and Vue.js, led feature delivery for larger applications, and introduced cleaner API patterns and stronger team workflows.",
    tag: "Laravel · Vue.js · REST API · MySQL",
  },
  {
    year: "2020 - 2022",
    title: "Full-Stack Developer",
    desc: "Owned architecture, delivery, and deployment for business platforms, integrating cloud services and building scalable systems across multiple products.",
    tag: "React · Node.js · Docker · AWS · Azure",
  },
  {
    year: "2022 - Present",
    title: "IT Specialist & AI Consultant",
    desc: "Focused on AI-assisted workflows, CRM automation, prompt systems, and enterprise-grade tooling that reduces manual work and improves decision speed.",
    tag: "AI · CRM · Automation · GoHighLevel · Power Platform",
  },
];

const skills = {
  frontend: [
    { name: "HTML / CSS", icon: "🎨", stars: 5 },
    { name: "JavaScript", icon: "⚡", stars: 5 },
    { name: "TypeScript", icon: "🔷", stars: 4 },
    { name: "Vue.js", icon: "💚", stars: 5 },
    { name: "React", icon: "⚛️", stars: 4 },
    { name: "Quasar", icon: "🦋", stars: 5 },
  ],
  backend: [
    { name: "PHP", icon: "🐘", stars: 5 },
    { name: "Laravel", icon: "🔴", stars: 5 },
    { name: "Node.js", icon: "💚", stars: 4 },
    { name: "REST API", icon: "🔗", stars: 5 },
  ],
  database: [
    { name: "MySQL", icon: "🗄️", stars: 5 },
    { name: "PostgreSQL", icon: "🐘", stars: 4 },
    { name: "Docker", icon: "🐳", stars: 4 },
    { name: "AWS", icon: "☁️", stars: 3 },
    { name: "Azure", icon: "🔵", stars: 3 },
  ],
  ai: [
    { name: "ChatGPT", icon: "🤖", stars: 5 },
    { name: "Claude", icon: "🧠", stars: 5 },
    { name: "Codex", icon: "💻", stars: 5 },
    { name: "Prompt Systems", icon: "✍️", stars: 5 },
  ],
  crm: [
    { name: "GoHighLevel", icon: "🚀", stars: 5 },
    { name: "Zapier", icon: "⚡", stars: 5 },
    { name: "Power Automate", icon: "🔁", stars: 5 },
    { name: "Power Apps", icon: "📱", stars: 4 },
    { name: "API Integration", icon: "🔗", stars: 5 },
  ],
};

const projects = [
  {
    icon: "🏢",
    category: "Enterprise Systems",
    title: "Enterprise Resource Management Suite",
    desc: "A comprehensive operations platform covering inventory, HR, reporting, and analytics for a high-volume organization with AI-assisted forecasting and live dashboards.",
    tags: ["Laravel", "Vue.js", "MySQL", "Docker"],
  },
  {
    icon: "🤖",
    category: "AI Application",
    title: "AI-Powered Support Automation",
    desc: "An intelligent support workflow that combines large language models with CRM actions to reduce response time and automate repetitive service tasks.",
    tags: ["LLM API", "Node.js", "GoHighLevel", "Zapier"],
  },
  {
    icon: "📊",
    category: "CRM System",
    title: "Sales Pipeline Automation CRM",
    desc: "A sales orchestration system with lead scoring, follow-up automation, and custom API hooks designed to improve conversion and visibility across the funnel.",
    tags: ["GoHighLevel", "Power Automate", "REST API"],
  },
  {
    icon: "⚡",
    category: "SaaS Platform",
    title: "Multi-Tenant SaaS Dashboard",
    desc: "A white-label business dashboard with multi-tenant permissions, real-time analytics, and scalable infrastructure for recurring subscription clients.",
    tags: ["Quasar", "Laravel", "PostgreSQL", "AWS"],
  },
];

const defaultGallery = [
  { emoji: "💻", label: "Workspace", filter: "workspace", tall: true },
  { emoji: "🤝", label: "Client Meeting", filter: "meetings", tall: false },
  { emoji: "👥", label: "Team Collab", filter: "team", tall: false },
  { emoji: "🏆", label: "Certification", filter: "certs", tall: true },
  { emoji: "🎤", label: "Tech Event", filter: "events", tall: false },
  { emoji: "🖥️", label: "Workspace Setup", filter: "workspace", tall: false },
  { emoji: "📜", label: "Achievement", filter: "certs", tall: false },
  { emoji: "🎯", label: "Strategy Session", filter: "meetings", tall: true },
  { emoji: "🔧", label: "Behind The Scenes", filter: "team", tall: false },
];

const experiences = [
  {
    icon: "🧠",
    title: "AI Consultant & IT Specialist",
    company: "Independent Practice",
    desc: "Leading AI integration projects, CRM automation, and full-stack solution delivery for organizations looking to modernize operations.",
    period: "2022 - Present",
    current: true,
  },
  {
    icon: "🏗️",
    title: "Full-Stack Developer",
    company: "Technology Solutions Studio",
    desc: "Architected SaaS platforms, APIs, and multi-tenant systems using Laravel, Vue.js, and cloud infrastructure.",
    period: "2020 - 2022",
  },
  {
    icon: "⚙️",
    title: "Mid-Level Web Developer",
    company: "Digital Product Agency",
    desc: "Delivered enterprise web applications and guided junior developers across CMS and commerce-focused builds.",
    period: "2018 - 2020",
  },
  {
    icon: "💡",
    title: "Junior Web Developer",
    company: "Startup Team",
    desc: "Built responsive interfaces and back-end features using PHP, MySQL, and vanilla JavaScript in a fast-moving startup setting.",
    period: "2016 - 2018",
  },
];

const contactLinks = [
  {
    icon: "✉️",
    type: "Email",
    value: "hello@signalstudio.dev",
    href: "mailto:hello@signalstudio.dev",
  },
  {
    icon: "💼",
    type: "LinkedIn",
    value: "linkedin.com/in/signalstudio",
    href: "https://linkedin.com",
  },
  {
    icon: "🐙",
    type: "GitHub",
    value: "github.com/signalstudio",
    href: "https://github.com",
  },
  { icon: "🌐", type: "Portfolio", value: "signalstudio.dev", href: "#" },
];

function renderStars(total) {
  return Array.from({ length: 5 }, (_, index) => index < total);
}

export default function TransferredPortfolio() {
  const pageRef = useRef(null);
  const canvasRef = useRef(null);
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const statsRef = useRef(null);
  const toastTimerRef = useRef(null);
  const statsAnimatedRef = useRef(false);
  const [activeSkillCat, setActiveSkillCat] = useState("frontend");
  const [activeGalleryFilter, setActiveGalleryFilter] = useState("all");
  const [uploadedImages, setUploadedImages] = useState([]);
  const [lightbox, setLightbox] = useState(null);
  const [toastMessage, setToastMessage] = useState("");
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [navScrolled, setNavScrolled] = useState(false);
  const [statValues, setStatValues] = useState(heroStats.map(() => 0));

  const filteredGallery = useMemo(() => {
    const items = [
      ...defaultGallery,
      ...uploadedImages.map((src) => ({
        src,
        label: "Upload",
        filter: "workspace",
        tall: false,
      })),
    ];

    if (activeGalleryFilter === "all") {
      return items;
    }

    return items.filter((item) => item.filter === activeGalleryFilter);
  }, [activeGalleryFilter, uploadedImages]);

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) {
        window.clearTimeout(toastTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const root = pageRef.current;
    if (!root) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-visible", "true");
          }
        });
      },
      { threshold: 0.1 },
    );

    root.querySelectorAll("[data-reveal]").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [activeSkillCat, filteredGallery.length]);

  useEffect(() => {
    const statsElement = statsRef.current;
    if (!statsElement) {
      return undefined;
    }

    const animateStat = (index, target) => {
      let current = 0;
      const step = Math.ceil(target / 40);
      const interval = window.setInterval(() => {
        current = Math.min(current + step, target);
        setStatValues((previous) => {
          const next = [...previous];
          next[index] = current;
          return next;
        });
        if (current >= target) {
          window.clearInterval(interval);
        }
      }, 35);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !statsAnimatedRef.current) {
            statsAnimatedRef.current = true;
            heroStats.forEach((stat, index) => animateStat(index, stat.count));
          }
        });
      },
      { threshold: 0.5 },
    );

    observer.observe(statsElement);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);
      const scrollY = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0);
      setNavScrolled(scrollY > 20);

      sections.forEach((section) => {
        if (
          scrollY >= section.offsetTop - 200 &&
          scrollY < section.offsetTop + section.offsetHeight - 200
        ) {
          setActiveSection(section.id);
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return undefined;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return undefined;
    }

    let frameId = 0;
    let points = [];

    const initialize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      points = Array.from({ length: 80 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.3,
        o: Math.random() * 0.4 + 0.1,
      }));
    };

    const draw = () => {
      const width = canvas.width;
      const height = canvas.height;
      context.clearRect(0, 0, width, height);

      points.forEach((point) => {
        point.x += point.vx;
        point.y += point.vy;

        if (point.x < 0) point.x = width;
        if (point.x > width) point.x = 0;
        if (point.y < 0) point.y = height;
        if (point.y > height) point.y = 0;

        context.beginPath();
        context.arc(point.x, point.y, point.r, 0, Math.PI * 2);
        context.fillStyle = `rgba(255, 215, 0, ${point.o})`;
        context.fill();
      });

      for (let i = 0; i < points.length; i += 1) {
        for (let j = i + 1; j < points.length; j += 1) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            context.beginPath();
            context.moveTo(points[i].x, points[i].y);
            context.lineTo(points[j].x, points[j].y);
            context.strokeStyle = `rgba(255, 215, 0, ${0.06 * (1 - distance / 120)})`;
            context.lineWidth = 0.5;
            context.stroke();
          }
        }
      }

      frameId = window.requestAnimationFrame(draw);
    };

    initialize();
    draw();
    window.addEventListener("resize", initialize);

    return () => {
      window.removeEventListener("resize", initialize);
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      return undefined;
    }

    const cursor = cursorRef.current;
    const ring = ringRef.current;
    const root = pageRef.current;

    if (!cursor || !ring || !root) {
      return undefined;
    }

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let animationFrame = 0;

    const handleMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      cursor.style.left = `${mouseX - 4}px`;
      cursor.style.top = `${mouseY - 4}px`;
    };

    const animateRing = () => {
      ringX += (mouseX - ringX - 16) * 0.15;
      ringY += (mouseY - ringY - 16) * 0.15;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      animationFrame = window.requestAnimationFrame(animateRing);
    };

    const interactiveElements = root.querySelectorAll(
      "a, button, input, select, textarea, [data-cursor='hover']",
    );
    const growCursor = () => {
      cursor.style.transform = "scale(2)";
      ring.style.transform = "scale(1.5)";
      ring.style.borderColor = "rgba(255, 215, 0, 0.8)";
    };
    const resetCursor = () => {
      cursor.style.transform = "scale(1)";
      ring.style.transform = "scale(1)";
      ring.style.borderColor = "rgba(255, 215, 0, 0.4)";
    };

    window.addEventListener("mousemove", handleMove);
    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", growCursor);
      element.addEventListener("mouseleave", resetCursor);
    });
    animationFrame = window.requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", growCursor);
        element.removeEventListener("mouseleave", resetCursor);
      });
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  const showToast = (message) => {
    if (toastTimerRef.current) {
      window.clearTimeout(toastTimerRef.current);
    }

    setToastMessage(message);
    toastTimerRef.current = window.setTimeout(() => {
      setToastMessage("");
    }, 3000);
  };

  const handleGalleryUpload = (event) => {
    const files = Array.from(event.target.files || []);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (loadEvent) => {
        const imageData = loadEvent.target?.result;
        if (typeof imageData === "string") {
          setUploadedImages((previous) => [...previous, imageData]);
        }
      };
      reader.readAsDataURL(file);
    });
    event.target.value = "";
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    showToast("Message sent successfully!");
  };

  return (
    <main className={styles.page} ref={pageRef}>
      <div className={styles.cursor} ref={cursorRef} />
      <div className={styles.cursorRing} ref={ringRef} />

      <div className={`${styles.ambient} ${styles.ambientOne}`} />
      <div className={`${styles.ambient} ${styles.ambientTwo}`} />
      <div className={`${styles.ambient} ${styles.ambientThree}`} />

      <canvas className={styles.particles} ref={canvasRef} />

      <div
        className={`${styles.lightbox} ${lightbox ? styles.lightboxOpen : ""}`}
        onClick={() => setLightbox(null)}
      >
        <div
          className={styles.lightboxContent}
          onClick={(event) => event.stopPropagation()}
        >
          <button
            className={styles.lightboxClose}
            onClick={() => setLightbox(null)}
            type="button"
          >
            x
          </button>
          <div className={styles.lightboxBody}>
            {lightbox?.isImage ? (
              <img
                alt={lightbox.label || "Gallery item"}
                src={lightbox.content}
              />
            ) : (
              <div className={styles.lightboxEmoji}>
                {lightbox?.content || "📷"}
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        className={`${styles.toast} ${toastMessage ? styles.toastVisible : ""}`}
      >
        {toastMessage ? `+ ${toastMessage}` : ""}
      </div>

      <div
        className={styles.navProgress}
        style={{ width: `${scrollProgress}%` }}
      />

      <nav
        className={`${styles.navbar} ${navScrolled ? styles.navbarScrolled : ""}`}
      >
        <a className={styles.navLogo} href="#home">
          <div className={styles.navLogoMark}>AI</div>
          <div className={styles.navLogoText}>
            Portfolio
            <span>IT Specialist</span>
          </div>
        </a>

        <div className={styles.navLinks}>
          {navItems.map((item) => (
            <a
              key={item.id}
              className={activeSection === item.id ? styles.navActive : ""}
              href={`#${item.id}`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className={styles.navCta}>
          <a href="#contact">Hire Me {"->"}</a>
        </div>
      </nav>

      <section className={styles.heroSection} id="home">
        <div className={styles.heroLeft}>
          <div className={styles.heroBadge}>Available for Projects</div>

          <h1 className={styles.heroTitle}>
            Smart Systems{" "}
            <span className={styles.goldText}>Standard Practices.</span> WITH AI
            Productivity.
            {/* &amp; <span className={styles.goldText}>AI Productivity</span> */}
          </h1>

          <p className={styles.heroSub}>
            <span>Full-Stack Developer</span> · IT Specialist ·{" "}
            <span>CRM Automation Expert</span>
          </p>
          <div className={styles.heroButtons}>
            <a className={styles.btnPrimary} href="#projects">
              View Projects
            </a>
            <a className={styles.btnOutline} href="#contact">
              Contact Me
            </a>
            <button
              className={styles.btnGhost}
              onClick={() => showToast("CV download coming soon")}
              type="button"
            >
              Download CV
            </button>
          </div>
          <div className={styles.heroStats} ref={statsRef}>
            {heroStats.map((stat, index) => (
              <div className={styles.stat} key={stat.label}>
                <div className={styles.statNumber}>{statValues[index]}+</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.heroAvatarWrap}>
            <div className={styles.heroAvatarRingOuter} />
            <div className={styles.heroAvatarRing} />
            <div className={styles.heroAvatar}>
              <img
                alt="Hero portrait"
                className={styles.heroAvatarImage}
                src="/van/vaHero.png"
              />
            </div>
            {["🤖", "⚡", "🧠", "💻", "🔗"].map((icon) => (
              <div className={styles.floatIcon} key={icon}>
                {icon}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.divider} />

      <section className={styles.aboutSection} id="about">
        <div className={styles.sectionWrap}>
          <div className={styles.sectionLabel}>Who I Am</div>
          <div className={styles.aboutGrid} data-reveal="">
            <div className={styles.aboutText}>
              <h2 className={styles.sectionTitle}>
                AI-Powered{" "}
                <span className={styles.goldText}>IT Specialist</span> &
                Developer
              </h2>
              <p>
                This experience is built around a generic but high-capability
                profile focused on intelligent systems, scalable software, and
                modern automation.
              </p>
              <p>
                The positioning combines full-stack development, CRM
                orchestration, cloud thinking, and AI workflow design into one
                cohesive technical brand.
              </p>
              <p>
                The goal is to present a portfolio structure that feels premium,
                deliberate, and conversion-oriented without relying on personal
                information from the previous site.
              </p>
            </div>
            <div className={styles.aboutCards}>
              {aboutCards.map((card) => (
                <div className={styles.glassMini} key={card.title}>
                  <div className={styles.glassMiniIcon}>{card.icon}</div>
                  <h4>{card.title}</h4>
                  <p>{card.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className={styles.divider} />

      <section className={styles.storySection} id="story">
        <div className={styles.sectionWrap}>
          <div className={styles.sectionLabel}>My Journey</div>
          <h2 className={styles.sectionTitle} data-reveal="">
            My <span className={styles.goldText}>Story</span>
          </h2>
          <p className={styles.sectionDesc} data-reveal="">
            A path shaped by curiosity, code, and a steady move toward
            automation, systems thinking, and AI-assisted delivery.
          </p>
          <div className={styles.timeline}>
            {timelineItems.map((item) => (
              <div
                className={styles.timelineItem}
                data-reveal=""
                key={item.year}
              >
                <div className={styles.timelineDot} />
                <div className={styles.timelineYear}>{item.year}</div>
                <div className={styles.timelineTitle}>{item.title}</div>
                <div className={styles.timelineDesc}>{item.desc}</div>
                <div className={styles.timelineTag}>{item.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.divider} />

      <section className={styles.techSection} id="techstack">
        <div className={styles.sectionWrap}>
          <div className={styles.sectionLabel}>Technical Expertise</div>
          <h2 className={styles.sectionTitle} data-reveal="">
            My <span className={styles.goldText}>Tech Stack</span>
          </h2>
          <p className={styles.sectionDesc} data-reveal="">
            A curated arsenal of modern technologies shaped around real product
            delivery, integrations, and automation work.
          </p>

          <div className={styles.stackTabs}>
            {Object.keys(skills).map((category) => (
              <button
                className={`${styles.stackTab} ${activeSkillCat === category ? styles.stackTabActive : ""}`}
                key={category}
                onClick={() => setActiveSkillCat(category)}
                type="button"
              >
                {category === "database"
                  ? "Database & Cloud"
                  : category === "ai"
                    ? "AI Skills"
                    : category === "crm"
                      ? "CRM & Automation"
                      : category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <div className={styles.stackGrid}>
            {skills[activeSkillCat].map((skill) => (
              <div
                className={styles.skillCard}
                data-cursor="hover"
                data-reveal=""
                key={skill.name}
              >
                <div className={styles.skillIcon}>{skill.icon}</div>
                <div className={styles.skillName}>{skill.name}</div>
                <div className={styles.stars}>
                  {renderStars(skill.stars).map((filled, index) => (
                    <span
                      className={`${styles.star} ${filled ? styles.starFilled : styles.starEmpty}`}
                      key={`${skill.name}-${index}`}
                    >
                      {filled ? "★" : "☆"}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.divider} />

      <section className={styles.projectsSection} id="projects">
        <div className={styles.sectionWrap}>
          <div className={styles.sectionLabel}>Portfolio</div>
          <h2 className={styles.sectionTitle} data-reveal="">
            Featured <span className={styles.goldText}>Projects</span>
          </h2>
          <p className={styles.sectionDesc} data-reveal="">
            Selected work spanning enterprise systems, AI applications, and
            automation platforms.
          </p>

          <div className={styles.projectsGrid}>
            {projects.map((project) => (
              <div
                className={styles.projectCard}
                data-cursor="hover"
                data-reveal=""
                key={project.title}
              >
                <div className={styles.projectImage}>{project.icon}</div>
                <div className={styles.projectInfo}>
                  <div className={styles.projectCategory}>
                    {project.category}
                  </div>
                  <div className={styles.projectTitle}>{project.title}</div>
                  <div className={styles.projectDesc}>{project.desc}</div>
                  <div className={styles.projectTags}>
                    {project.tags.map((tag) => (
                      <span className={styles.tag} key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.divider} />

      <section className={styles.gallerySection} id="gallery">
        <div className={styles.sectionWrap}>
          <div className={styles.sectionLabel}>Visual Journal</div>
          <h2 className={styles.sectionTitle} data-reveal="">
            Gallery & <span className={styles.goldText}>Moments</span>
          </h2>
          <p className={styles.sectionDesc} data-reveal="">
            A behind-the-scenes view of workspace energy, collaboration,
            milestones, and uploaded visuals.
          </p>

          <div className={styles.galleryFilters}>
            {[
              ["all", "All"],
              ["workspace", "Workspace"],
              ["meetings", "Client Meetings"],
              ["team", "Team Collaboration"],
              ["certs", "Certifications"],
              ["events", "Events"],
            ].map(([filter, label]) => (
              <button
                className={`${styles.galleryFilter} ${activeGalleryFilter === filter ? styles.galleryFilterActive : ""}`}
                key={filter}
                onClick={() => setActiveGalleryFilter(filter)}
                type="button"
              >
                {label}
              </button>
            ))}
          </div>

          <label className={styles.galleryUploadZone} htmlFor="galleryUpload">
            <div className={styles.uploadIcon}>📸</div>
            <p>
              Drop your images here or <span>click to browse</span>
            </p>
            <p className={styles.galleryUploadHint}>JPG, PNG, WebP supported</p>
          </label>
          <input
            accept="image/*"
            id="galleryUpload"
            multiple
            onChange={handleGalleryUpload}
            type="file"
            hidden
          />

          <div className={styles.masonry}>
            {filteredGallery.map((item, index) => (
              <div
                className={styles.masonryItem}
                data-cursor="hover"
                key={`${item.label}-${index}`}
                onClick={() =>
                  setLightbox({
                    content: item.src || item.emoji,
                    isImage: Boolean(item.src),
                    label: item.label,
                  })
                }
              >
                {item.src ? (
                  <img alt={item.label} src={item.src} />
                ) : (
                  <div
                    className={`${styles.masonryEmoji} ${item.tall ? styles.masonryEmojiTall : ""}`}
                  >
                    {item.emoji}
                  </div>
                )}
                <div className={styles.masonryOverlay}>
                  <span>🔍</span>
                  <span>{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.divider} />

      <section className={styles.experienceSection} id="experience">
        <div className={styles.sectionWrap}>
          <div className={styles.sectionLabel}>Work History</div>
          <h2 className={styles.sectionTitle} data-reveal="">
            Professional <span className={styles.goldText}>Experience</span>
          </h2>
          <p className={styles.sectionDesc} data-reveal="">
            A track record of building high-impact digital systems, from product
            delivery to automation and operational tooling.
          </p>

          <div className={styles.experienceGrid}>
            {experiences.map((experience) => (
              <div
                className={styles.experienceCard}
                data-reveal=""
                key={experience.title}
              >
                <div className={styles.experienceLogo}>{experience.icon}</div>
                <div className={styles.experienceInfo}>
                  <h3>{experience.title}</h3>
                  <div className={styles.experienceCompany}>
                    {experience.company}
                  </div>
                  <p>{experience.desc}</p>
                </div>
                <div className={styles.experiencePeriod}>
                  {experience.period}
                  {experience.current ? (
                    <div className={styles.currentPill}>Current</div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.divider} />

      <section className={styles.contactSection} id="contact">
        <div className={styles.sectionWrap}>
          <div className={styles.sectionLabel}>Get In Touch</div>
          <h2 className={styles.sectionTitle} data-reveal="">
            Let's <span className={styles.goldText}>Connect</span>
          </h2>
          <p className={styles.sectionDesc} data-reveal="">
            Ready to build something sharp, modern, and useful? Start the
            conversation here.
          </p>

          <div className={styles.contactWrap}>
            <div>
              <div className={styles.contactLinks}>
                {contactLinks.map((link) => (
                  <a
                    className={styles.contactLink}
                    href={link.href}
                    key={link.type}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                  >
                    <div className={styles.linkIcon}>{link.icon}</div>
                    <div className={styles.linkInfo}>
                      <div className={styles.linkType}>{link.type}</div>
                      <div className={styles.linkValue}>{link.value}</div>
                    </div>
                    <div className={styles.linkArrow}>{"->"}</div>
                  </a>
                ))}
              </div>

              <button
                className={styles.scheduleButton}
                onClick={() => showToast("Scheduling link coming soon")}
                type="button"
              >
                📅 Schedule a Meeting
              </button>
            </div>

            <form className={styles.contactForm} onSubmit={handleFormSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="contact-name">Your Name</label>
                  <input id="contact-name" placeholder="John Doe" type="text" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="contact-email">Email Address</label>
                  <input
                    id="contact-email"
                    placeholder="john@example.com"
                    type="email"
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="contact-subject">Subject</label>
                <select id="contact-subject" defaultValue="">
                  <option value="">Select a topic...</option>
                  <option>Project Inquiry</option>
                  <option>CRM Automation</option>
                  <option>AI Consulting</option>
                  <option>Full-Stack Development</option>
                  <option>Other</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button className={styles.btnPrimary} type="submit">
                Send Message ⚡
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>
          Designed & Built with AI · <span>© 2026 All Rights Reserved</span>
        </p>
      </footer>
    </main>
  );
}
