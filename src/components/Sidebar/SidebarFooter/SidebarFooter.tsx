import { PiSignOutFill } from "react-icons/pi";
import { VscSettings } from "react-icons/vsc";
import BaseIcon from "../../Base/BaseIcon/BaseIcon";
import styles from "./SidebarFooter.module.scss";

type SidebarFooterData = {
  id: number;
  label: string;
  icon: React.ReactNode;
};

const SidebarFooter = () => {
  const footerItems: SidebarFooterData[] = [
    {
      id: 1,
      label: "Settings",
      icon: <VscSettings />,
    },
    {
      id: 2,
      label: "Sign out",
      icon: <PiSignOutFill />,
    },
  ];

  return (
    <div className={styles.container}>
      {footerItems.map((item) => (
        <div key={item.id} className={styles["icon-label"]}>
          <div>
            <BaseIcon>{item.icon}</BaseIcon>
          </div>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default SidebarFooter;
