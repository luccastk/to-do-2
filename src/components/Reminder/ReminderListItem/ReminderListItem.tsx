import { IoIosArrowForward } from "react-icons/io";
import { BaseIcon } from "../../Base";
import { Checkbox } from "../../Checkbox";
import styles from "./ReminderListItem.module.scss";

type ReminderListItemProps = {
  task: string;
  handleClick: () => void;
};

const ReminderListItem = ({ task, handleClick }: ReminderListItemProps) => {
  return (
    <li className={styles.container}>
      <button onClick={handleClick} className={styles.content}>
        <div className={styles.content__label}>
          <Checkbox />
          <span className="ellipsis">{task}</span>
        </div>
        <BaseIcon>
          <IoIosArrowForward />
        </BaseIcon>
      </button>
    </li>
  );
};

export default ReminderListItem;
