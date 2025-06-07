import { Checkbox } from "../../Checkbox";
import styles from "./ListItemTask.module.scss";

export default function ListItemTask({ children }) {
  return (
    <li>
      <div>
        <Checkbox
          handleChange={function (checked: boolean): void {
            throw new Error("Function not implemented.");
          }}
        />
      </div>
    </li>
  );
}
