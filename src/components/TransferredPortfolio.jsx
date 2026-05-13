"use client";

import { useRef, useState } from "react";
import {
  aboutCards,
  aboutContent,
  contactContent,
  contactLinks,
  contactTargets,
  experienceContent,
  experiences,
  footerContent,
  heroContent,
  heroOrbitIcons,
  heroSocialLinks,
  heroStats,
  navItems,
  navBrand,
  projects,
  projectsContent,
  resumePreviewContent,
  skillCategoryLabels,
  skills,
  storyModalContent,
  techStackContent,
} from "@/features/portfolio/data/content";
import AboutSection from "@/features/portfolio/components/AboutSection";
import ContactSection from "@/features/portfolio/components/ContactSection";
import ExperienceSection from "@/features/portfolio/components/ExperienceSection";
import HeroSection from "@/features/portfolio/components/HeroSection";
import Lightbox from "@/features/portfolio/components/Lightbox";
import PortfolioNav from "@/features/portfolio/components/PortfolioNav";
import ProjectsSection from "@/features/portfolio/components/ProjectsSection";
import ResumeModal from "@/features/portfolio/components/ResumeModal";
import StoryModal from "@/features/portfolio/components/StoryModal";
import TechStackSection from "@/features/portfolio/components/TechStackSection";
import useBodyScrollLock from "@/features/portfolio/hooks/useBodyScrollLock";
import useCursorFx from "@/features/portfolio/hooks/useCursorFx";
import useParticleCanvas from "@/features/portfolio/hooks/useParticleCanvas";
import useRevealOnScroll from "@/features/portfolio/hooks/useRevealOnScroll";
import useScrollSpy from "@/features/portfolio/hooks/useScrollSpy";
import useStatsCounter from "@/features/portfolio/hooks/useStatsCounter";
import useToast from "@/features/portfolio/hooks/useToast";
import { buildMailtoUrl, buildWhatsAppUrl, sanitizeDigits } from "@/lib/contactLinks";
import styles from "./TransferredPortfolio.module.css";

export default function TransferredPortfolio() {
  const pageRef = useRef(null);
  const canvasRef = useRef(null);
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  const [activeSkillCat, setActiveSkillCat] = useState("frontend");
  const [lightbox, setLightbox] = useState(null);
  const [storyModalOpen, setStoryModalOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  const { activeSection, navScrolled, scrollProgress } = useScrollSpy(navItems);
  const { statValues, statsRef } = useStatsCounter(heroStats);
  const { toastMessage, showToast } = useToast();
  const whatsappDigits = sanitizeDigits(contactTargets.whatsapp);
  const whatsappIntl =
    whatsappDigits.length === 11 && whatsappDigits.startsWith("0")
      ? `63${whatsappDigits.slice(1)}`
      : whatsappDigits;
  const whatsAppHref = buildWhatsAppUrl(
    whatsappIntl,
    "Hi Van, I would like to discuss a project with you."
  );
  const resolvedContactLinks = contactLinks.map((link) =>
    link.type === "WhatsApp" ? { ...link, href: whatsAppHref } : link
  );

  useBodyScrollLock(Boolean(lightbox || storyModalOpen || resumeModalOpen));
  useRevealOnScroll(pageRef, activeSkillCat);
  useParticleCanvas(canvasRef);
  useCursorFx(pageRef, cursorRef, ringRef);

  const handleProjectPreview = (project) => {
    setLightbox({
      content: project.preview,
      images: project.images,
      currentIndex: 0,
      isImage: true,
      label: project.title,
    });
  };

  const handleExperiencePreview = (experience, index) => {
    if (!experience.previews?.length) {
      return;
    }

    setLightbox({
      content: experience.previews[index],
      images: experience.previews,
      currentIndex: index,
      isImage: true,
      label: experience.company,
    });
  };

  const handleLightboxNavigate = (direction) => {
    setLightbox((previous) => {
      if (!previous?.images?.length || previous.images.length < 2) {
        return previous;
      }

      const nextIndex =
        direction === "next"
          ? (previous.currentIndex + 1) % previous.images.length
          : (previous.currentIndex - 1 + previous.images.length) % previous.images.length;

      return {
        ...previous,
        currentIndex: nextIndex,
        content: previous.images[nextIndex],
      };
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const mailto = buildMailtoUrl(contactTargets.email, {
      subject: `${subject} / ${name || "Portfolio Inquiry"}`,
      body: [
        "Hi Van,",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    showToast("Opening your email client...");
    event.currentTarget.reset();
    window.location.href = mailto;
  };

  const handleRequestMeeting = () => {
    const meetingMailto = buildMailtoUrl(contactTargets.email, {
      subject: "Meeting Request",
      body: [
        "Hi Van,",
        "",
        "I would like to schedule a meeting with you.",
        "",
        "Preferred date/time:",
        "Timezone:",
        "Project details:",
      ].join("\n"),
    });

    showToast("Opening your email client...");
    window.location.href = meetingMailto;
  };

  const handleWhatsApp = () => {
    showToast("Opening WhatsApp...");
    window.open(whatsAppHref, "_blank", "noopener,noreferrer");
  };

  return (
    <main className={styles.page} ref={pageRef}>
      <div className={styles.cursor} ref={cursorRef} />
      <div className={styles.cursorRing} ref={ringRef} />

      <div className={`${styles.ambient} ${styles.ambientOne}`} />
      <div className={`${styles.ambient} ${styles.ambientTwo}`} />
      <div className={`${styles.ambient} ${styles.ambientThree}`} />

      <canvas className={styles.particles} ref={canvasRef} />

      <Lightbox
        lightbox={lightbox}
        onClose={() => setLightbox(null)}
        onNext={() => handleLightboxNavigate("next")}
        onPrev={() => handleLightboxNavigate("prev")}
      />
      <StoryModal
        content={storyModalContent}
        isOpen={storyModalOpen}
        onClose={() => setStoryModalOpen(false)}
      />
      <ResumeModal
        content={resumePreviewContent}
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      <div
        className={`${styles.toast} ${toastMessage ? styles.toastVisible : ""}`}
      >
        {toastMessage ? `+ ${toastMessage}` : ""}
      </div>

      <PortfolioNav
        activeSection={activeSection}
        brand={navBrand}
        navItems={navItems}
        navScrolled={navScrolled}
        onOpenResume={() => setResumeModalOpen(true)}
        resumeLabel={resumePreviewContent.triggerLabel}
        scrollProgress={scrollProgress}
      />

      <HeroSection
        content={heroContent}
        onOpenResume={() => setResumeModalOpen(true)}
        orbitIcons={heroOrbitIcons}
        socialLinks={heroSocialLinks}
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

      <ExperienceSection
        content={experienceContent}
        experiences={experiences}
        onOpenPreview={handleExperiencePreview}
      />

      <div className={styles.divider} />

      <ProjectsSection
        content={projectsContent}
        onOpenImage={handleProjectPreview}
        projects={projects}
      />

      <div className={styles.divider} />

      <TechStackSection
        activeCategory={activeSkillCat}
        categoryLabels={skillCategoryLabels}
        content={techStackContent}
        onCategoryChange={setActiveSkillCat}
        skills={skills}
      />

      <div className={styles.divider} />

      <ContactSection
        content={contactContent}
        links={resolvedContactLinks}
        onSchedule={handleRequestMeeting}
        onSubmit={handleFormSubmit}
        onWhatsApp={handleWhatsApp}
      />

      <footer className={styles.footer}>
        <p>
          {footerContent.lead} / <span>{footerContent.trail}</span>
        </p>
      </footer>
    </main>
  );
}
