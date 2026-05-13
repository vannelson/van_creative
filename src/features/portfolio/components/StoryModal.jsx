import styles from "@/components/TransferredPortfolio.module.css";

export default function StoryModal({ content, isOpen, onClose }) {
  return (
    <div
      className={`${styles.storyModalBackdrop} ${isOpen ? styles.storyModalBackdropOpen : ""}`}
      onClick={onClose}
    >
      <div
        className={styles.storyModal}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.storyModalHeader}>
          <div>
            <div className={styles.storyModalKicker}>{content.kicker}</div>
            <h3>{content.title}</h3>
          </div>
          <button className={styles.storyModalClose} onClick={onClose} type="button">
            x
          </button>
        </div>

        <div className={styles.storyModalBody}>
          <div className={styles.storyNarrative}>
            <div className={styles.storyPullQuote}>"{content.quote}"</div>

            {content.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
