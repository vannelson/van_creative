import styles from "@/components/TransferredPortfolio.module.css";
import IconMark from "./IconMark";

export default function AboutSection({ cards, content, onOpenStory }) {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.sectionWrap}>
        <div className={styles.sectionLabel}>{content.label}</div>
        <div className={styles.aboutGrid} data-reveal="">
          <div className={styles.aboutText}>
            <h2 className={styles.sectionTitle}>
              {content.titleLead} <span className={styles.goldText}>{content.titleAccent}</span>{" "}
              {content.titleTail}
            </h2>
            {content.summary.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <div className={styles.aboutActions}>
              <button
                className={styles.aboutStoryButton}
                onClick={onOpenStory}
                type="button"
              >
                {content.ctaLabel}
              </button>
            </div>
          </div>
          <div className={styles.aboutCards}>
            {cards.map((card) => (
              <div className={styles.glassMini} key={card.title}>
                <div className={styles.glassMiniIcon}>
                  <IconMark Icon={card.Icon} className={styles.glassMiniIconSvg} />
                </div>
                <h4>{card.title}</h4>
                <p>{card.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
