import React from "react";
import { FaPlus, FaStickyNote, FaTasks } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { PiSignOutFill } from "react-icons/pi";
import { VscSettings } from "react-icons/vsc";
import { Link } from "react-router-dom";
import BaseIcon from "../Base/BaseIcon";
import styles from "./Sidebar.module.scss";
import { IoSearch } from "react-icons/io5";

const Sidebar = () => {
  const [isCollapsed, setCollapsed] = React.useState(false);

  return (
    <aside
      className={`${styles.aside} ${
        isCollapsed ? styles["aside--collapsed"] : ""
      }`}
    >
      <div className={styles.header}>
        <div className={`${isCollapsed ? styles["logo--collapsed"] : ""}`}>
          <Link to={"/"}>Menu</Link>
        </div>
        <button
          onClick={() => setCollapsed((prev) => !prev)}
          className={styles.header__button}
        >
          <BaseIcon>
            <GiHamburgerMenu />
          </BaseIcon>
        </button>
      </div>
      <div
        className={`${styles.search} ${
          isCollapsed ? styles["search--collapsed"] : ""
        }`}
      >
        <div>
          <BaseIcon>
            <IoSearch />
          </BaseIcon>
        </div>
        <input type="search" placeholder="Search" />
      </div>
      <div className={styles.nav}>
        <span
          className={`${styles.title} ${
            isCollapsed ? styles["title--collapsed"] : ""
          }`}
        >
          Tasks
        </span>
        <nav>
          <ul className={styles.main__list}>
            <li style={{ display: "flex" }}>
              <Link to={"/sticky-wall"} className={styles.main__link}>
                <div>
                  <BaseIcon>
                    <FaStickyNote />
                  </BaseIcon>
                </div>
                <span className={styles.ellipsis}>
                  Sticky WallSticky WallSticky WallSticky WallSticky WallSticky
                  Wall
                </span>
                <span>10</span>
              </Link>
            </li>
            <li style={{ display: "flex" }}>
              <Link to={"/reminders"} className={styles.main__link}>
                <div>
                  <BaseIcon>
                    <FaTasks />
                  </BaseIcon>
                </div>
                <span className={styles.ellipsis}>Reminders</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.nav}>
          <span>Lists</span>
          <div className={styles.nav}>
            <ul className={styles.main__list}>
              <li style={{ display: "flex" }}>
                <Link to={"/"} className={styles.main__link}>
                  <div
                    style={{
                      minHeight: "1rem",
                      minWidth: "1rem",
                      backgroundColor: "#000",
                      borderRadius: ".25rem",
                    }}
                  ></div>
                  <span className={styles.ellipsis}>list - 1</span>
                </Link>
              </li>
              <li style={{ display: "flex" }}>
                <Link to={"/"} className={styles.main__link}>
                  <div
                    style={{
                      minHeight: "1rem",
                      minWidth: "1rem",
                      backgroundColor: "#000",
                      borderRadius: ".25rem",
                    }}
                  ></div>
                  <span className={styles.ellipsis}>list - 2</span>
                </Link>
              </li>
              <li style={{ display: "flex" }}>
                <Link to={"/"} className={styles.main__link}>
                  <div
                    style={{
                      minHeight: "1rem",
                      minWidth: "1rem",
                      backgroundColor: "#000",
                      borderRadius: ".25rem",
                    }}
                  ></div>
                  <span className={styles.ellipsis}>list - 3</span>
                </Link>
              </li>
            </ul>
            <button className={styles.main__link}>
              <BaseIcon>
                <FaPlus />
              </BaseIcon>
              <span>Add New List</span>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footer__content}>
          <BaseIcon>
            <VscSettings />
          </BaseIcon>
          <span>Settings</span>
        </div>
        <div className={styles.footer__content}>
          <BaseIcon>
            <PiSignOutFill />
          </BaseIcon>
          <span>Sign out</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
