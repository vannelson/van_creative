import styles from "@/components/TransferredPortfolio.module.css";

export default function PortfolioNav({
  activeSection,
  brand,
  navItems,
  navScrolled,
  onOpenResume,
  resumeLabel,
  scrollProgress,
}) {
  return (
    <>
      <div
        className={styles.navProgress}
        style={{ width: `${scrollProgress}%` }}
      />

      <nav
        className={`${styles.navbar} ${navScrolled ? styles.navbarScrolled : ""}`}
      >
        <a className={styles.navLogo} href="#home">
          <div className={styles.navLogoMark}>{brand.mark}</div>
          <div className={styles.navLogoText}>
            {brand.name}
            <span>{brand.role}</span>
          </div>
        </a>

        <div className={styles.navLinks}>
          {navItems.map((item) => (
            <a
              key={item.id}
              className={activeSection === item.id ? styles.navActive : ""}
              href={`#${item.id}`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className={styles.navCta}>
          <button onClick={onOpenResume} type="button">
            {resumeLabel} {"->"}
          </button>
        </div>
      </nav>
    </>
  );
}
