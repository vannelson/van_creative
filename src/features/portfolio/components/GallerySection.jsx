import AddPhotoAlternateRoundedIcon from "@mui/icons-material/AddPhotoAlternateRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import styles from "@/components/TransferredPortfolio.module.css";
import IconMark from "./IconMark";
import SectionHeader from "./SectionHeader";

export default function GallerySection({
  activeFilter,
  content,
  filters,
  items,
  onFilterChange,
  onSelectItem,
  onUpload,
}) {
  return (
    <section className={styles.gallerySection} id="gallery">
      <div className={styles.sectionWrap}>
        <SectionHeader
          description={content.description}
          label={content.label}
          titleAccent={content.titleAccent}
          titleLead={content.title}
        />

        <div className={styles.galleryFilters}>
          {filters.map(([filter, label]) => (
            <button
              className={`${styles.galleryFilter} ${activeFilter === filter ? styles.galleryFilterActive : ""}`}
              key={filter}
              onClick={() => onFilterChange(filter)}
              type="button"
            >
              {label}
            </button>
          ))}
        </div>

        <label className={styles.galleryUploadZone} htmlFor="galleryUpload">
          <div className={styles.uploadIcon}>
            <IconMark
              Icon={AddPhotoAlternateRoundedIcon}
              className={styles.uploadIconSvg}
            />
          </div>
          <p>
            Drop your images here or <span>click to browse</span>
          </p>
          <p className={styles.galleryUploadHint}>{content.uploadHint}</p>
        </label>
        <input
          accept="image/*"
          hidden
          id="galleryUpload"
          multiple
          onChange={onUpload}
          type="file"
        />

        <div className={styles.masonry}>
          {items.map((item, index) => (
            <div
              className={styles.masonryItem}
              data-cursor="hover"
              key={`${item.label}-${index}`}
              onClick={() => onSelectItem(item)}
            >
              {item.src ? (
                <img alt={item.label} src={item.src} />
              ) : (
                <div
                  className={`${styles.masonryEmoji} ${item.tall ? styles.masonryEmojiTall : ""}`}
                >
                  <IconMark Icon={item.Icon} className={styles.masonryIconSvg} />
                </div>
              )}
              <div className={styles.masonryOverlay}>
                <IconMark Icon={SearchRoundedIcon} className={styles.overlayIconSvg} />
                <span>{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
