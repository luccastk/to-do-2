import { Link } from "react-router-dom";
import { ButtonCreate } from "../../../Buttons";
import NavigationContainer from "../NavigationContainer/NavigationContainer";
import styles_main from "../SidebarNavs.module.scss";

type SidebarListProps = {
  isCollapsed: boolean;
};

type RemindersData = {
  id: number;
  href: string;
  label: string;
};

const SidebarList = ({ isCollapsed }: SidebarListProps) => {
  const reminders: RemindersData[] = [
    {
      id: 1,
      href: "/",
      label:
        "New reminderNew reminderNew reminderNew reminderNew reminderNew reminder",
    },
    {
      id: 2,
      href: "/",
      label: "New reminder",
    },
    {
      id: 3,
      href: "/",
      label: "New reminder",
    },
    {
      id: 4,
      href: "/",
      label:
        "New reminderNew reminderNew reminderNew reminderNew reminderNew reminder",
    },
    {
      id: 5,
      href: "/",
      label: "New reminder",
    },
    {
      id: 6,
      href: "/",
      label: "New reminder",
    },
    {
      id: 7,
      href: "/",
      label:
        "New reminderNew reminderNew reminderNew reminderNew reminderNew reminder",
    },
    {
      id: 8,
      href: "/",
      label: "New reminder",
    },
    {
      id: 9,
      href: "/",
      label: "New reminder",
    },
  ];

  return (
    <NavigationContainer title="LISTS" isCollapsed={isCollapsed}>
      <ul
        className={`${styles_main.list} ${
          isCollapsed ? styles_main["list--collapsed"] : ""
        }`}
      >
        {reminders.map((item) => (
          <li key={item.id}>
            <Link to={item.href} className={styles_main["list-item"]}>
              <div
                style={{
                  minHeight: "1rem",
                  minWidth: "1rem",
                  backgroundColor: "#000",
                  borderRadius: ".25rem",
                }}
              ></div>
              <span className="ellipsis">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
      <ButtonCreate
        label={"Add New Reminder"}
        handleCreate={() => console.log("oi")}
      />
    </NavigationContainer>
  );
};

export default SidebarList;
