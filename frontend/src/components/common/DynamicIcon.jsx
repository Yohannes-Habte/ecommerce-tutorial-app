
import { header, boxContainer } from "../../styles/uiConfig";

const DynamicIcon = ({
  icon: Icon,
  size = 12,
  count = 0,
  ariaLabel = "Icon",
  className = "",
  relative = false,
}) => {
  if (!Icon) return null;

  return (
    <div className={`${boxContainer.base} ${relative ? "relative" : ""}`}>
      <Icon
        size={size}
        className={`${header.reactIcon} ${className}`}
        aria-label={ariaLabel}
      />
      {count > 0 && <span className={header.badgeBase}>{count}</span>}
    </div>
  );
};

export default DynamicIcon;
