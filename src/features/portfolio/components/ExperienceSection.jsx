import styles from "@/components/TransferredPortfolio.module.css";
import IconMark from "./IconMark";
import SectionHeader from "./SectionHeader";

export default function ExperienceSection({ content, experiences }) {
  return (
    <section className={styles.experienceSection} id="experience">
      <div className={styles.sectionWrap}>
        <SectionHeader
          description={content.description}
          label={content.label}
          titleAccent={content.titleAccent}
          titleLead={content.title}
        />

        <div className={styles.experienceGrid}>
          {experiences.map((experience) => (
            <div
              className={styles.experienceCard}
              data-reveal=""
              key={experience.title}
            >
              <div className={styles.experienceLogo}>
                <IconMark
                  Icon={experience.Icon}
                  className={styles.experienceIconSvg}
                />
              </div>
              <div className={styles.experienceInfo}>
                <h3>{experience.title}</h3>
                <div className={styles.experienceCompany}>{experience.company}</div>
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
  );
}
