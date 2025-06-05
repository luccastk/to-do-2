import { FaPlus } from "react-icons/fa";
import BaseIcon from "../../Base/BaseIcon/BaseIcon";
import styles from "./ButtonCreate.module.scss";

type ButtonCreateProps = {
  label?: string;
  handleCreate: () => void;
};

const ButtonCreate = ({ label, handleCreate }: ButtonCreateProps) => {
  return (
    <button onClick={handleCreate} className={styles.container}>
      <div>
        <BaseIcon>
          <FaPlus />
        </BaseIcon>
      </div>
      <span className="ellipsis">{label}</span>
    </button>
  );
};

export default ButtonCreate;
