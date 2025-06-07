import { IoClose } from "react-icons/io5";
import DescriptionTextarea from "../DescriptionTextarea/DescriptionTextarea";
import InlineForm from "../InlineForm/InlineForm";
import InputUpdate from "../InputUpdate/InputUpdate";
import SelectDate from "../SelectDate/SelectDate";
import SelectList from "../SelectList/SelectList";
import SelectTag from "../SelectTag/SelectTag";
import SubtaskList from "../SubtaskList/SubtaskList";
import styles from "./Drawer.module.scss";

const Drawer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>Tasks:</span>
        <button>
          <IoClose size={"1.5rem"} />
        </button>
      </div>
      <InputUpdate />
      <DescriptionTextarea />
      <SelectList />
      <SelectDate />
      <SelectTag />
      <div>
        <span>Subtasks:</span>
      </div>
      <InlineForm />
      <SubtaskList />
    </div>
  );
};

export default Drawer;
