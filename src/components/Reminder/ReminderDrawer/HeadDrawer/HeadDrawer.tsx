import { IoClose } from "react-icons/io5";
import { BaseIcon } from "../../../Base";
import styles from "./HeadDrawer.module.scss";

type HeadDrawerProps = {
  title: string;
  closeDrawer: () => void;
};

const HeadDrawer = ({ title, closeDrawer }: HeadDrawerProps) => {
  return (
    <div className={styles.container}>
      <span>{title}</span>
      <button className={styles.button} onClick={closeDrawer}>
        <BaseIcon>
          <IoClose size={"1.5rem"} />
        </BaseIcon>
      </button>
    </div>
  );
};

export default HeadDrawer;
