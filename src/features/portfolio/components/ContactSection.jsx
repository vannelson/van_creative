import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import styles from "@/components/TransferredPortfolio.module.css";
import IconMark from "./IconMark";
import SectionHeader from "./SectionHeader";

export default function ContactSection({
  content,
  links,
  onSchedule,
  onSubmit,
  onWhatsApp,
}) {
  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.sectionWrap}>
        <SectionHeader
          description={content.description}
          label={content.label}
          titleAccent={content.titleAccent}
          titleLead={content.title}
        />

        <div className={styles.contactWrap}>
          <div>
            <div className={styles.contactLinks}>
              {links.map((link) => (
                <a
                  className={styles.contactLink}
                  href={link.href}
                  key={link.type}
                  rel="noreferrer"
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                >
                  <div className={styles.linkIcon}>
                    <IconMark Icon={link.Icon} className={styles.linkIconSvg} />
                  </div>
                  <div className={styles.linkInfo}>
                    <div className={styles.linkType}>{link.type}</div>
                    <div className={styles.linkValue}>{link.value}</div>
                  </div>
                  <div className={styles.linkArrow}>{"->"}</div>
                </a>
              ))}
            </div>

            <div className={styles.contactQuickActions}>
              <button className={styles.scheduleButton} onClick={onSchedule} type="button">
                <IconMark Icon={CalendarMonthRoundedIcon} className={styles.buttonIcon} />
                {content.scheduleLabel}
              </button>
              <button className={styles.whatsAppButton} onClick={onWhatsApp} type="button">
                <IconMark Icon={WhatsAppIcon} className={styles.buttonIcon} />
                {content.whatsappLabel}
              </button>
            </div>
          </div>

          <form className={styles.contactForm} onSubmit={onSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="contact-name">Your Name</label>
                <input
                  autoComplete="name"
                  id="contact-name"
                  name="name"
                  placeholder="John Doe"
                  required
                  type="text"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="contact-email">Email Address</label>
                <input
                  autoComplete="email"
                  id="contact-email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  type="email"
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="contact-subject">Subject</label>
              <select defaultValue="" id="contact-subject" name="subject" required>
                <option value="">Select a topic...</option>
                {content.formTopics.map((topic) => (
                  <option key={topic}>{topic}</option>
                ))}
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell me about your project..."
                required
              />
            </div>

            <button className={styles.btnPrimary} type="submit">
              Send Message
              <IconMark Icon={SendRoundedIcon} className={styles.buttonIcon} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
