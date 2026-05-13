import styles from "@/components/TransferredPortfolio.module.css";
import IconMark from "./IconMark";
import SectionHeader from "./SectionHeader";

export default function ExperienceSection({ content, experiences, onOpenPreview }) {
  return (
    <section className={styles.experienceSection} id="experience">
      <div className={styles.sectionWrap}>
        <SectionHeader
          description={content.description}
          label={content.label}
          titleAccent={content.titleAccent}
          titleLead={content.title}
        />

        <div className={styles.timeline}>
          {experiences.map((experience) => (
            <div
              className={styles.timelineItem}
              data-reveal=""
              key={`${experience.company}-${experience.title}`}
            >
              <div className={styles.timelineDot} />
              <div className={styles.timelineYear}>{experience.period}</div>
              <div className={styles.experienceTimelineHead}>
                <div>
                  <h3 className={styles.timelineTitle}>{experience.title}</h3>
                  <div className={styles.experienceCompany}>{experience.company}</div>
                </div>
                <div className={styles.experienceTimelineIcon}>
                  {experience.logo ? (
                    <img
                      alt={`${experience.company} logo`}
                      className={styles.experienceLogoImage}
                      src={experience.logo}
                    />
                  ) : (
                    <IconMark
                      Icon={experience.Icon}
                      className={styles.experienceIconSvg}
                    />
                  )}
                </div>
              </div>
              <div className={styles.timelineDesc}>{experience.desc}</div>
              <ul className={styles.experienceHighlights}>
                {experience.highlights?.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              {experience.previews?.length ? (
                <div className={styles.experiencePreviewRow}>
                  {experience.previews.map((image, index) => (
                    <button
                      aria-label={`Open ${experience.company} preview ${index + 1}`}
                      className={styles.experiencePreviewButton}
                      key={image}
                      onClick={() => onOpenPreview(experience, index)}
                      type="button"
                    >
                      <img
                        alt={`${experience.company} preview ${index + 1}`}
                        className={styles.experiencePreviewImage}
                        src={image}
                      />
                    </button>
                  ))}
                </div>
              ) : null}
              <div className={styles.experienceTagRow}>
                {experience.tags?.map((tag) => (
                  <span className={styles.timelineTag} key={tag}>
                    {tag}
                  </span>
                ))}
                {experience.current ? (
                  <span className={styles.currentPill}>Current</span>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
