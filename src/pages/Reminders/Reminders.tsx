import React from "react";
import { FaPlus } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import BaseIcon from "../../components/Base/BaseIcon/BaseIcon";
import { PageTitle } from "../../components/Page";
import { ReminderInputCreate, ReminderList } from "../../components/Reminder";
import styles from "./Reminders.module.scss";

const Reminders = () => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <PageTitle
          title={"New ReminderNew ReminderNew ReminderNew ReminderNew Reminder"}
        >
          <span className={styles.header__notification}>10</span>
        </PageTitle>
        <div>
          <ReminderInputCreate variant="withButton" />
          <ReminderList handleClick={() => setShowModal((prev) => !prev)} />
        </div>
      </div>
      <div
        className={`${styles.reminder__drawer} ${
          showModal ? styles["reminder__drawer--active"] : ""
        }`}
      >
        <div className={styles["reminder__drawer-header"]}>
          <span>Task:</span>
          <button
            className={styles["reminder__drawer-header__button"]}
            onClick={() => setShowModal((prev) => !prev)}
          >
            <BaseIcon>
              <IoClose size={"1.5rem"} />
            </BaseIcon>
          </button>
        </div>
        <div className={styles.reminder__input}>
          <input type="text" value="Reminder - 1" />
        </div>
        <textarea
          name=""
          id=""
          placeholder="Description"
          className={styles.reminder__textarea}
        />
        <div>
          <div className={styles.drawer__items}>
            <span>list</span>
            <div>
              <select name="" id="">
                <option value="1">Personal</option>
                <option value="2">Option 2</option>
                <option value="3">option 3</option>
              </select>
            </div>
          </div>
          <div className={styles.drawer__items}>
            <span>Due Date</span>
            <div>
              <select name="" id="">
                <option value="1">11-03-22</option>
                <option value="2">Option 2</option>
                <option value="3">option 3</option>
              </select>
            </div>
          </div>
          <div className={styles.drawer__items}>
            <span>Tags</span>
            <div style={{ display: "flex" }}>
              <ul>
                <li>tag</li>
              </ul>
              <button>
                <BaseIcon>
                  <FaPlus size={".75rem"} />
                </BaseIcon>
                <span>Add Tag</span>
              </button>
            </div>
          </div>
        </div>
        <div>
          <span>SubTasks:</span>
          <div className={styles.reminder__input}>
            <button>
              <BaseIcon>
                <FaPlus />
              </BaseIcon>
            </button>
            <input type="text" placeholder="Add New SubTask" />
          </div>
          <ul>
            <li>
              <div
                onClick={() => setShowModal((prev) => !prev)}
                className={styles.reminder__button}
              >
                <div style={{ display: "flex", gap: "1rem" }}>
                  <input type="checkbox" />
                  <span>Reminder - 1</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className={styles["reminder__drawer-footer"]}>
          <button className={styles["reminder__drawer-button_delete"]}>
            Delete Task
          </button>
          <button className={styles["reminder__drawer-button_save"]}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reminders;
