import styles from "@/components/TransferredPortfolio.module.css";
import IconMark from "./IconMark";
import SectionHeader from "./SectionHeader";

export default function ProjectsSection({ content, projects }) {
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
              <div className={styles.projectImage}>
                <IconMark Icon={project.Icon} className={styles.projectIconSvg} />
              </div>
              <div className={styles.projectInfo}>
                <div className={styles.projectCategory}>{project.category}</div>
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
  );
}
