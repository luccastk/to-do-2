import React from "react";
import { BaseIcon } from "../../../../components/Base";
import { FaPlus } from "react-icons/fa";

const InlineForm = () => {
  const { createReminder } = useReminder();

  function handleCreate(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      console.log("criar reminder");
    }
  }

  return (
    <div>
      <button>
        <BaseIcon>
          <FaPlus />
        </BaseIcon>
      </button>
      <input
        type="text"
        onKeyDown={handleCreate}
        autoFocus
        className={styles.container}
      />
    </div>
  );
};

export default InlineForm;
