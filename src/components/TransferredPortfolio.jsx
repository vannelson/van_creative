"use client";

import { useMemo, useRef, useState } from "react";
import {
  aboutCards,
  aboutContent,
  contactContent,
  contactLinks,
  defaultGallery,
  experienceContent,
  experiences,
  footerContent,
  galleryContent,
  galleryFilters,
  heroContent,
  heroOrbitIcons,
  heroStats,
  navItems,
  projects,
  projectsContent,
  skillCategoryLabels,
  skills,
  storyModalContent,
  techStackContent,
} from "@/features/portfolio/data/content";
import AboutSection from "@/features/portfolio/components/AboutSection";
import ContactSection from "@/features/portfolio/components/ContactSection";
import ExperienceSection from "@/features/portfolio/components/ExperienceSection";
import GallerySection from "@/features/portfolio/components/GallerySection";
import HeroSection from "@/features/portfolio/components/HeroSection";
import Lightbox from "@/features/portfolio/components/Lightbox";
import PortfolioNav from "@/features/portfolio/components/PortfolioNav";
import ProjectsSection from "@/features/portfolio/components/ProjectsSection";
import StoryModal from "@/features/portfolio/components/StoryModal";
import TechStackSection from "@/features/portfolio/components/TechStackSection";
import useBodyScrollLock from "@/features/portfolio/hooks/useBodyScrollLock";
import useCursorFx from "@/features/portfolio/hooks/useCursorFx";
import useParticleCanvas from "@/features/portfolio/hooks/useParticleCanvas";
import useRevealOnScroll from "@/features/portfolio/hooks/useRevealOnScroll";
import useScrollSpy from "@/features/portfolio/hooks/useScrollSpy";
import useStatsCounter from "@/features/portfolio/hooks/useStatsCounter";
import useToast from "@/features/portfolio/hooks/useToast";
import styles from "./TransferredPortfolio.module.css";

export default function TransferredPortfolio() {
  const pageRef = useRef(null);
  const canvasRef = useRef(null);
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  const [activeSkillCat, setActiveSkillCat] = useState("frontend");
  const [activeGalleryFilter, setActiveGalleryFilter] = useState("all");
  const [uploadedImages, setUploadedImages] = useState([]);
  const [lightbox, setLightbox] = useState(null);
  const [storyModalOpen, setStoryModalOpen] = useState(false);

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

  const { activeSection, navScrolled, scrollProgress } = useScrollSpy(navItems);
  const { statValues, statsRef } = useStatsCounter(heroStats);
  const { toastMessage, showToast } = useToast();

  useBodyScrollLock(Boolean(lightbox || storyModalOpen));
  useRevealOnScroll(pageRef, `${activeSkillCat}:${filteredGallery.length}`);
  useParticleCanvas(canvasRef);
  useCursorFx(pageRef, cursorRef, ringRef);

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

  const handleGallerySelect = (item) => {
    setLightbox({
      content: item.src,
      Icon: item.Icon,
      isImage: Boolean(item.src),
      label: item.label,
    });
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

      <Lightbox lightbox={lightbox} onClose={() => setLightbox(null)} />
      <StoryModal
        content={storyModalContent}
        isOpen={storyModalOpen}
        onClose={() => setStoryModalOpen(false)}
      />

      <div
        className={`${styles.toast} ${toastMessage ? styles.toastVisible : ""}`}
      >
        {toastMessage ? `+ ${toastMessage}` : ""}
      </div>

      <PortfolioNav
        activeSection={activeSection}
        navItems={navItems}
        navScrolled={navScrolled}
        scrollProgress={scrollProgress}
      />

      <HeroSection
        content={heroContent}
        onDownloadCv={() => showToast("CV download coming soon")}
        orbitIcons={heroOrbitIcons}
        stats={heroStats}
        statValues={statValues}
        statsRef={statsRef}
      />

      <div className={styles.divider} />

      <AboutSection
        cards={aboutCards}
        content={aboutContent}
        onOpenStory={() => setStoryModalOpen(true)}
      />

      <div className={styles.divider} />

      <ExperienceSection content={experienceContent} experiences={experiences} />

      <div className={styles.divider} />

      <ProjectsSection content={projectsContent} projects={projects} />

      <div className={styles.divider} />

      <TechStackSection
        activeCategory={activeSkillCat}
        categoryLabels={skillCategoryLabels}
        content={techStackContent}
        onCategoryChange={setActiveSkillCat}
        skills={skills}
      />

      <div className={styles.divider} />

      <GallerySection
        activeFilter={activeGalleryFilter}
        content={galleryContent}
        filters={galleryFilters}
        items={filteredGallery}
        onFilterChange={setActiveGalleryFilter}
        onSelectItem={handleGallerySelect}
        onUpload={handleGalleryUpload}
      />

      <div className={styles.divider} />

      <ContactSection
        content={contactContent}
        links={contactLinks}
        onSchedule={() => showToast("Scheduling link coming soon")}
        onSubmit={handleFormSubmit}
      />

      <footer className={styles.footer}>
        <p>
          {footerContent.lead} / <span>{footerContent.trail}</span>
        </p>
      </footer>
    </main>
  );
}
