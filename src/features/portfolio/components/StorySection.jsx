import styles from "@/components/TransferredPortfolio.module.css";
import SectionHeader from "./SectionHeader";

export default function StorySection({ content, items }) {
  return (
    <section className={styles.storySection} id="story">
      <div className={styles.sectionWrap}>
        <SectionHeader
          description={content.description}
          label={content.label}
          titleAccent={content.titleAccent}
          titleLead={content.title}
        />
        <div className={styles.timeline}>
          {items.map((item) => (
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
  );
}
