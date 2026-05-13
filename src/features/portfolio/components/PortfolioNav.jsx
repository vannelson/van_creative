import styles from "@/components/TransferredPortfolio.module.css";

export default function PortfolioNav({
  activeSection,
  navItems,
  navScrolled,
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
          <div className={styles.navLogoMark}>AI</div>
          <div className={styles.navLogoText}>
            Portfolio
            <span>IT Specialist</span>
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
          <a href="#contact">Hire Me {"->"}</a>
        </div>
      </nav>
    </>
  );
}
