import PhotoCameraRoundedIcon from "@mui/icons-material/PhotoCameraRounded";
import styles from "@/components/TransferredPortfolio.module.css";
import IconMark from "./IconMark";

export default function Lightbox({ lightbox, onClose }) {
  const LightboxIcon = lightbox?.Icon || PhotoCameraRoundedIcon;

  return (
    <div
      className={`${styles.lightbox} ${lightbox ? styles.lightboxOpen : ""}`}
      onClick={onClose}
    >
      <div
        className={styles.lightboxContent}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className={styles.lightboxClose}
          onClick={onClose}
          type="button"
        >
          x
        </button>
        <div className={styles.lightboxBody}>
          {lightbox?.isImage ? (
            <img alt={lightbox.label || "Gallery item"} src={lightbox.content} />
          ) : (
            <div className={styles.lightboxEmoji}>
              <IconMark Icon={LightboxIcon} className={styles.lightboxIconSvg} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
