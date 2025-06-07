import React from "react";
import { Checkbox } from "../../../../shared/components/Checkbox";
import { BaseIcon } from "../../../../components/Base";
import { IoIosArrowForward } from "react-icons/io";
import styles from "./TaskList.module.scss";

const TaskList = () => {
  return (
    <div>
      <ul>
        <li className={styles.container}>
          <div className={styles.content}>
            <Checkbox />
            <span className="t-ellipsis" onClick={() => console.log("abriu")}>
              task - 1task - 1task - 1task - 1task - 1task - 1task - 1task -
              1task - 1task - 1task - 1task - 1task - 1task - 1task - 1task -
              1task - 1task - 1task - 1task - 1task - 1task - 1task - 1task -
              1task - 1task - 1task - 1task - 1task - 1
            </span>
          </div>
          <BaseIcon>
            <IoIosArrowForward />
          </BaseIcon>
        </li>
      </ul>
    </div>
  );
};

export default TaskList;
