import { FaPlus } from "react-icons/fa";
import { LuClipboardCheck, LuClipboardPen } from "react-icons/lu";
import BaseIcon from "../../components/Base/BaseIcon";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>Welcome back, Luccas 👋</span>
      </div>
      <div className={styles.main}>
        <div className={styles.card}>
          <div className={styles.card__header}>
            <BaseIcon>
              <LuClipboardPen size={"2rem"} />
            </BaseIcon>
            <span>To-Do</span>
            <button className={styles["card__header-button"]}>
              <BaseIcon>
                <FaPlus />
              </BaseIcon>
              <span>Add task</span>
            </button>
          </div>
          <div>
            <ul>
              <li>Reminders - 1</li>
              <li>Reminders - 2</li>
              <li>Reminders - 3</li>
              <li>Reminders - 4</li>
              <li>Reminders - 3</li>
              <li>Reminders - 4</li>
              <li>Reminders - 3</li>
              <li>Reminders - 4</li>
            </ul>
          </div>
        </div>
        <div className={styles.tasks}>
          <div className={styles.card}>
            <div className={styles.card__header}>
              <BaseIcon>
                <LuClipboardCheck size={"2rem"} />
                <span>Task status</span>
              </BaseIcon>
            </div>
            <div className={styles.card__status}>
              <div className={styles["card__status-container"]}>
                <div className={styles.doughnut}></div>
                <div className={styles.doughnut__center}></div>
                <div className={styles.doughnut__label}>25%</div>
                <span className={styles["card__status-label"]}>Completed</span>
              </div>
              <div className={styles["card__status-container"]}>
                <div className={styles.doughnut}></div>
                <div className={styles.doughnut__center}></div>
                <div className={styles.doughnut__label}>25%</div>
                <span className={styles["card__status-label"]}>
                  In Progress
                </span>
              </div>
              <div className={styles["card__status-container"]}>
                <div className={styles.doughnut}></div>
                <div className={styles.doughnut__center}></div>
                <div className={styles.doughnut__label}>25%</div>
                <span className={styles["card__status-label"]}>
                  Not Started
                </span>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.card__header}>
              <BaseIcon>
                <LuClipboardCheck size={"2rem"} />
                <span>Task status</span>
              </BaseIcon>
            </div>
            <div className={styles.card__main}>
              <ul>
                <li>reminder completed</li>
                <li>reminder completed</li>
                <li>reminder completed</li>
                <li>reminder completed</li>
                <li>reminder completed</li>
                <li>reminder completed</li>
                <li>reminder completed</li>
                <li>reminder completed</li>
                <li>reminder completed</li>
                <li>reminder completed</li>
                <li>reminder completed</li>
                <li>reminder completed</li>
                <li>reminder completed</li>
                <li>reminder completed</li>
                <li>reminder completed</li>
                <li>reminder completed</li>
                <li>reminder completed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
