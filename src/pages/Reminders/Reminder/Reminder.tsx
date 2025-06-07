import React from "react";
import Input from "../../../components/Input/Input";
import Typography from "../../../components/Typography/Typography";
import Icon from "../../../components/Icon/Icon";
import { FaPlus } from "react-icons/fa";
import styles from "./Reminder.module.scss";
import { Checkbox } from "../../../components/Checkbox";
import { IoIosArrowForward } from "react-icons/io";

const Reminder = () => {
  const [value, setValue] = React.useState("1231");
  const [checked, setChecked] = React.useState(false);

  const items = () => {
    let i = 0;
    const list = [];
    for (; i < 200; i++) {
      list.push(
        <li key={i} className={styles["list-task__item"]}>
          <div className={styles["list-task__status"]}>
            <Checkbox handleChange={(e) => setChecked(e)} />
            <Typography text={value} />
          </div>
          <Icon icon={<IoIosArrowForward />} />
        </li>
      );
    }
    return list;
  };

  console.log(checked);
  return (
    <div className={styles.container}>
      <div>
        <Typography text={"New Reminder"} component="h1" />
      </div>
      <div className={styles["new-task"]}>
        <Icon icon={<FaPlus />} />
        <Input
          id={"new-task"}
          placeholder="Name"
          value={value}
          handleChange={(e) => setValue(e.currentTarget.value)}
        />
      </div>
      <div className={styles.task}>
        <ul className={styles["list-task"]}>{items()}</ul>
      </div>
    </div>
  );
};

export default Reminder;
