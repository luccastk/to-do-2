import { IoSearch } from "react-icons/io5";
import BaseIcon from "../Base/BaseIcon/BaseIcon";
import styles from "./SearchBar.module.scss";

type SearchBarProps = {
  isCollapsed: boolean;
};

const SearchBar = ({ isCollapsed }: SearchBarProps) => {
  return (
    <div
      className={`${styles.container} ${
        isCollapsed ? styles["container--collapsed"] : ""
      }`}
    >
      <div>
        <BaseIcon>
          <IoSearch />
        </BaseIcon>
      </div>
      <input type="search" placeholder="Search" />
    </div>
  );
};

export default SearchBar;
