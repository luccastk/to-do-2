import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import BaseIcon from "../../Base/BaseIcon/BaseIcon";
import styles from "./SidebarHeader.module.scss";

type SidebarHeaderProps = {
  isCollapsed: boolean;
  handleCollapsedBar: () => void;
};

const SidebarHeader = ({
  isCollapsed,
  handleCollapsedBar,
}: SidebarHeaderProps) => {
  return (
    <div className={styles.container}>
      <div
        className={`${styles.logo} ${
          isCollapsed ? styles["logo--collapsed"] : ""
        }`}
      >
        <Link to={"/"}>Menu</Link>
      </div>
      <button onClick={handleCollapsedBar} className={styles.button}>
        <BaseIcon>
          <GiHamburgerMenu />
        </BaseIcon>
      </button>
    </div>
  );
};

export default SidebarHeader;
