import React from "react";
import { FaStickyNote, FaTasks } from "react-icons/fa";
import { Link } from "react-router-dom";
import BaseIcon from "../../../Base/BaseIcon/BaseIcon";
import NavigationContainer from "../NavigationContainer/NavigationContainer";
import styles_main from "../SidebarNavs.module.scss";

type SidebarNavigationProps = {
  isCollapsed: boolean;
};

type SidebarNavData = {
  id: number;
  href: string;
  label: string;
  icon: React.ReactNode;
  notification: number | string;
};

const SidebarNavigation = ({ isCollapsed }: SidebarNavigationProps) => {
  const sideNav: SidebarNavData[] = [
    {
      id: 1,
      href: "/sticky-wall",
      label:
        " Sticky WallSticky WallSticky WallSticky WallSticky WallSticky Wall",
      icon: <FaStickyNote />,
      notification: 10,
    },
    {
      id: 2,
      href: "/reminders",
      label: "Reminders",
      icon: <FaTasks />,
      notification: 10,
    },
  ];

  return (
    <NavigationContainer title={"TASKS"} isCollapsed={isCollapsed}>
      <ul className={styles_main.list}>
        {sideNav.map((item) => (
          <li key={item.id}>
            <Link to={item.href} className={styles_main["list-item"]}>
              <div>
                <BaseIcon>{item.icon}</BaseIcon>
              </div>
              <span className="ellipsis">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </NavigationContainer>
  );
};

export default SidebarNavigation;
