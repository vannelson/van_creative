import PhotoCameraRoundedIcon from "@mui/icons-material/PhotoCameraRounded";
import styles from "@/components/TransferredPortfolio.module.css";
import IconMark from "./IconMark";

export default function Lightbox({ lightbox, onClose, onNext, onPrev }) {
  const LightboxIcon = lightbox?.Icon || PhotoCameraRoundedIcon;
  const hasMultipleImages = Boolean(lightbox?.images?.length > 1);
  const activeImage =
    lightbox?.isImage && lightbox?.images?.length
      ? lightbox.images[lightbox.currentIndex || 0]
      : lightbox?.content;

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
        {hasMultipleImages ? (
          <button
            className={`${styles.lightboxNav} ${styles.lightboxNavPrev}`}
            onClick={onPrev}
            type="button"
          >
            Prev
          </button>
        ) : null}
        {hasMultipleImages ? (
          <button
            className={`${styles.lightboxNav} ${styles.lightboxNavNext}`}
            onClick={onNext}
            type="button"
          >
            Next
          </button>
        ) : null}
        <div className={styles.lightboxBody}>
          {lightbox?.isImage ? (
            <img alt={lightbox.label || "Gallery item"} src={activeImage} />
          ) : (
            <div className={styles.lightboxEmoji}>
              <IconMark Icon={LightboxIcon} className={styles.lightboxIconSvg} />
            </div>
          )}
        </div>
        {hasMultipleImages ? (
          <div className={styles.lightboxMeta}>
            <span>{lightbox.label}</span>
            <span>
              {(lightbox.currentIndex || 0) + 1} / {lightbox.images.length}
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
}
