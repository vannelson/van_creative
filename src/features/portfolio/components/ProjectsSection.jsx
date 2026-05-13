import styles from "@/components/TransferredPortfolio.module.css";
import SectionHeader from "./SectionHeader";

export default function ProjectsSection({ content, onOpenImage, projects }) {
  return (
    <section className={styles.projectsSection} id="projects">
      <div className={styles.sectionWrap}>
        <SectionHeader
          description={content.description}
          label={content.label}
          titleAccent={content.titleAccent}
          titleLead={content.title}
        />

        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div
              className={styles.projectCard}
              data-cursor="hover"
              data-reveal=""
              key={project.title}
            >
              <button
                className={styles.projectImageButton}
                onClick={() => onOpenImage(project)}
                type="button"
              >
                <div className={styles.projectImage}>
                  <img
                    alt={`${project.title} preview`}
                    className={styles.projectPreviewImage}
                    src={project.preview}
                  />
                  <div className={styles.projectImageOverlay}>
                    <span className={styles.projectImageOverlayLabel}>View Preview</span>
                    <span className={styles.projectImageOverlayCount}>
                      {project.images.length} image{project.images.length > 1 ? "s" : ""}
                    </span>
                  </div>
                </div>
              </button>
              <div className={styles.projectInfo}>
                <div className={styles.projectCategory}>{project.category}</div>
                <div className={styles.projectTitle}>{project.title}</div>
                <div className={styles.projectDesc}>{project.desc}</div>
                <div className={styles.projectObjective}>
                  <span>Objective</span>
                  <p>{project.objective}</p>
                </div>
                <div className={styles.projectUrlRow}>
                  <span className={styles.projectUrlLabel}>URL</span>
                  {project.url === "local" ? (
                    <span className={styles.projectUrlValue}>Local / Private</span>
                  ) : (
                    <a
                      className={styles.projectUrlLink}
                      href={project.url}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {project.url}
                    </a>
                  )}
                </div>
                <div className={styles.projectTags}>
                  {project.tags.map((tag) => (
                    <span className={styles.tag} key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className={styles.projectActionRow}>
                  {project.url === "local" ? (
                    <span className={styles.projectLocalPill}>Local Project</span>
                  ) : (
                    <a
                      className={styles.projectVisitLink}
                      href={project.url}
                      rel="noreferrer"
                      target="_blank"
                    >
                      Visit Project
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
