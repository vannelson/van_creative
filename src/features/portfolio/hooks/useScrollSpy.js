import { useEffect, useState } from "react";

export default function useScrollSpy(navItems) {
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [navScrolled, setNavScrolled] = useState(false);

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
  }, [navItems]);

  return { activeSection, navScrolled, scrollProgress };
}
