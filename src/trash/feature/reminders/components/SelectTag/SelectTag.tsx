import React from "react";
import { SelectContainer } from "../Base";

const SelectTag = () => {
  return (
    <SelectContainer>
      <span>Tags</span>
      <div>
        <ul style={{ display: "flex", gap: ".5rem" }}>
          <li>tags</li>
          <li>tags</li>
          <li>tags</li>
        </ul>
        <button>add new tag</button>
      </div>
    </SelectContainer>
  );
};

export default SelectTag;
