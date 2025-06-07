import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Sidebar.module.scss";
import SidebarFooter from "./SidebarFooter/SidebarFooter";
import SidebarHeader from "./SidebarHeader/SidebarHeader";
import SidebarList from "./SidebarMain/SidebarList/SidebarList";
import SidebarNavigation from "./SidebarMain/SidebarNavigation/SidebarNavigation";

const Sidebar = () => {
  const [isCollapsed, setCollapsed] = React.useState(false);

  return (
    <aside
      className={`${styles.aside} ${
        isCollapsed ? styles["aside--collapsed"] : ""
      }`}
    >
      <SidebarHeader
        isCollapsed={isCollapsed}
        handleCollapsedBar={() => setCollapsed((prev) => !prev)}
      />
      <SearchBar isCollapsed={isCollapsed} />
      <SidebarNavigation isCollapsed={isCollapsed} />
      <SidebarList isCollapsed={isCollapsed} />
      <SidebarFooter />
    </aside>
  );
};

export default Sidebar;
