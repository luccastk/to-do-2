import { LuClipboardPen } from "react-icons/lu";
import DonutChart from "../../DonutChart/DonutChart";
import CardContainer from "../CardContainer/CardContainer";
import styles from "./CardStatus.module.scss";

type StatusData = {
  id: number;
  label: string;
  value: number;
};

const CardStatus = () => {
  const status: StatusData[] = [
    {
      id: 1,
      label: "Completed",
      value: 75,
    },
    {
      id: 2,
      label: "In Progress",
      value: 75,
    },
    {
      id: 3,
      label: "Not Started",
      value: 75,
    },
  ];

  return (
    <CardContainer title={"Task Status"} icon={<LuClipboardPen size={"2rem"}/>}>
      <div className={styles.container}>
        {status.map((item) => (
          <div style={{ display: "grid", gap: "1rem", justifyItems: "center" }}>
            <DonutChart value={item.value} />
            <span className={styles.label}>{item.label}</span>
          </div>
        ))}
      </div>
    </CardContainer>
  );
};

export default CardStatus;
