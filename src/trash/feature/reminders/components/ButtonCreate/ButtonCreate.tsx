import { FaPlus } from "react-icons/fa";
import { BaseIcon } from "../../../../components/Base";

const ButtonCreate = () => {
  function handleCreate(e: React.MouseEvent) {
    e.stopPropagation();
    console.log("criou reminder");
  }

  return (
    <button onClick={handleCreate}>
      <BaseIcon>
        <FaPlus />
      </BaseIcon>
    </button>
  );
};

export default ButtonCreate;
