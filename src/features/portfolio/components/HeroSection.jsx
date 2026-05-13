import styles from "@/components/TransferredPortfolio.module.css";
import IconMark from "./IconMark";

export default function HeroSection({
  content,
  orbitIcons,
  onOpenResume,
  socialLinks,
  stats,
  statValues,
  statsRef,
}) {
  return (
    <section className={styles.heroSection} id="home">
      <div className={styles.heroLeft}>
        <div className={styles.heroBadge}>{content.badge}</div>

        <h1 className={styles.heroTitle}>
          {content.titleLead}{" "}
          <span className={styles.goldText}>{content.titleAccent}</span>{" "}
          {content.titleTail}
        </h1>

        <p className={styles.heroSub}>
          <span>{content.subtitle[0]}</span> / {content.subtitle[1]} /{" "}
          <span>{content.subtitle[2]}</span>
        </p>
        <div className={styles.heroButtons}>
          <a className={styles.btnPrimary} href="#projects">
            View Projects
          </a>
          <a className={styles.btnOutline} href="#contact">
            Contact Me
          </a>
          <button className={styles.btnGhost} onClick={onOpenResume} type="button">
            {content.resumeButtonLabel}
          </button>
        </div>
        <div className={styles.heroSocials}>
          {socialLinks.map((link) => (
            <a
              className={styles.heroSocialLink}
              href={link.href}
              key={link.label}
              rel="noreferrer"
              target="_blank"
            >
              <IconMark Icon={link.Icon} className={styles.heroSocialIcon} />
              <span className={styles.heroSocialLabel}>{link.label}</span>
              <span className={styles.heroSocialValue}>{link.value}</span>
            </a>
          ))}
        </div>
        <div className={styles.heroStats} ref={statsRef}>
          {stats.map((stat, index) => (
            <div className={styles.stat} key={stat.label}>
              <div className={styles.statNumber}>{statValues[index]}+</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.heroRight}>
        <div className={styles.heroAvatarWrap}>
          <div className={styles.heroAvatarRingOuter} />
          <div className={styles.heroAvatarRing} />
          <div className={styles.heroAvatar}>
            <img
              alt="Hero portrait"
              className={styles.heroAvatarImage}
              src={content.imageSrc}
            />
          </div>
          {orbitIcons.map((Icon, index) => (
            <div className={styles.floatIcon} key={`orbit-${index}`}>
              <IconMark Icon={Icon} className={styles.floatIconSvg} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
