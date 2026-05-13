import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import styles from "@/components/TransferredPortfolio.module.css";
import IconMark from "./IconMark";

function renderStars(total) {
  return Array.from({ length: 5 }, (_, index) => index < total);
}

export default function StarRating({ total }) {
  return (
    <div className={styles.stars}>
      {renderStars(total).map((filled, index) => (
        <IconMark
          key={index}
          Icon={filled ? StarRoundedIcon : StarBorderRoundedIcon}
          className={`${styles.starIcon} ${filled ? styles.starFilled : styles.starEmpty}`}
        />
      ))}
    </div>
  );
}
