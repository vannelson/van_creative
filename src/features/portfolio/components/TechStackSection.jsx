import styles from "@/components/TransferredPortfolio.module.css";
import IconMark from "./IconMark";
import SectionHeader from "./SectionHeader";
import StarRating from "./StarRating";

export default function TechStackSection({
  activeCategory,
  categoryLabels,
  content,
  onCategoryChange,
  skills,
}) {
  return (
    <section className={styles.techSection} id="techstack">
      <div className={styles.sectionWrap}>
        <SectionHeader
          description={content.description}
          label={content.label}
          titleAccent={content.titleAccent}
          titleLead={content.title}
        />

        <div className={styles.stackTabs}>
          {Object.keys(skills).map((category) => (
            <button
              className={`${styles.stackTab} ${activeCategory === category ? styles.stackTabActive : ""}`}
              key={category}
              onClick={() => onCategoryChange(category)}
              type="button"
            >
              {categoryLabels[category] || category}
            </button>
          ))}
        </div>

        <div className={styles.stackGrid}>
          {skills[activeCategory].map((skill) => (
            <div
              className={styles.skillCard}
              data-cursor="hover"
              data-reveal=""
              key={skill.name}
            >
              <div className={styles.skillIcon}>
                <IconMark Icon={skill.Icon} className={styles.skillIconSvg} />
              </div>
              <div className={styles.skillName}>{skill.name}</div>
              <StarRating total={skill.stars} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
