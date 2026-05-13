import styles from "@/components/TransferredPortfolio.module.css";

export default function ResumeModal({ content, isOpen, onClose }) {
  return (
    <div
      className={`${styles.resumeModalBackdrop} ${isOpen ? styles.resumeModalBackdropOpen : ""}`}
      onClick={onClose}
    >
      <div
        className={styles.resumeModal}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.resumeModalHeader}>
          <div>
            <div className={styles.resumeModalKicker}>Professional Profile</div>
            <h3>{content.title}</h3>
            <p>{content.description}</p>
          </div>
          <button className={styles.resumeModalClose} onClick={onClose} type="button">
            x
          </button>
        </div>

        <div className={styles.resumeModalActions}>
          <a
            className={styles.resumeModalPrimaryAction}
            download={content.fileName}
            href={content.filePath}
          >
            {content.downloadLabel}
          </a>
          <a
            className={styles.resumeModalSecondaryAction}
            href="#contact"
            onClick={onClose}
          >
            {content.contactLabel}
          </a>
          <a
            className={styles.resumeModalTertiaryAction}
            href={content.filePath}
            rel="noreferrer"
            target="_blank"
          >
            {content.openLabel}
          </a>
        </div>

        <div className={styles.resumeFrameWrap}>
          <iframe
            className={styles.resumeFrame}
            src={`${content.filePath}#toolbar=0&navpanes=0&scrollbar=1`}
            title={content.title}
          />
        </div>
      </div>
    </div>
  );
}
