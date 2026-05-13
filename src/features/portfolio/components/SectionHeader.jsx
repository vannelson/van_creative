import styles from "@/components/TransferredPortfolio.module.css";

export default function SectionHeader({
  label,
  titleLead,
  titleAccent,
  titleTail = "",
  description,
}) {
  return (
    <>
      <div className={styles.sectionLabel}>{label}</div>
      <h2 className={styles.sectionTitle} data-reveal="">
        {titleLead} <span className={styles.goldText}>{titleAccent}</span>
        {titleTail ? ` ${titleTail}` : ""}
      </h2>
      {description ? (
        <p className={styles.sectionDesc} data-reveal="">
          {description}
        </p>
      ) : null}
    </>
  );
}
