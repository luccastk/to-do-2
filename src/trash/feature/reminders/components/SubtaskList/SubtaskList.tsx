import React from "react";
import { Checkbox } from "../../../../shared/components/Checkbox";
import styles from "./SubtaskList.module.scss";

const SubtaskList = () => {
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
        </li>
      </ul>
    </div>
  );
};

export default SubtaskList;
