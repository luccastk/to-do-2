import { LuClipboardCheck } from "react-icons/lu";
import CardContainer from "../CardContainer/CardContainer";

const CardCompleted = () => {
  return (
    <CardContainer title={"Completed Tasks"} icon={<LuClipboardCheck size={"2rem"}/>}>
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
    </CardContainer>
  );
};

export default CardCompleted;
