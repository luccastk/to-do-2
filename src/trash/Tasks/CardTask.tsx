import { LuClipboardList } from "react-icons/lu";
import CardContainer from "./CardContainer/CardContainer";
import styles from "./CardTask.module.scss";

type RemindersData = {
  id: number;
  href: string;
  label: string;
};

const CardTask = () => {
  const reminders: RemindersData[] = [
    {
      id: 1,
      href: "/",
      label:
        "New reminderNew reminderNew reminderNew reminderNew reminderNew reminder",
    },
    {
      id: 2,
      href: "/",
      label: "New reminder",
    },
    {
      id: 3,
      href: "/",
      label: "New reminder",
    },
    {
      id: 4,
      href: "/",
      label:
        "New reminderNew reminderNew reminderNew reminderNew reminderNew reminder",
    },
    {
      id: 5,
      href: "/",
      label: "New reminder",
    },
    {
      id: 6,
      href: "/",
      label: "New reminder",
    },
    {
      id: 7,
      href: "/",
      label:
        "New reminderNew reminderNew reminderNew reminderNew reminderNew reminderreminderNew reminderreminderNew reminderreminderNew reminderreminderNew reminderreminderNew reminderreminderNew reminder",
    },
    {
      id: 8,
      href: "/",
      label: "New reminder",
    },
    {
      id: 9,
      href: "/",
      label: "New reminder",
    },
    {
      id: 10,
      href: "/",
      label:
        "New reminderNew reminderNew reminderNew reminderNew reminderNew reminderreminderNew reminderreminderNew reminderreminderNew reminderreminderNew reminderreminderNew reminderreminderNew reminder",
    },
    {
      id: 11,
      href: "/",
      label: "New reminder",
    },
    {
      id: 12,
      href: "/",
      label: "New reminder",
    },
    {
      id: 13,
      href: "/",
      label:
        "New reminderNew reminderNew reminderNew reminderNew reminderNew reminderreminderNew reminderreminderNew reminderreminderNew reminderreminderNew reminderreminderNew reminderreminderNew reminder",
    },
    {
      id: 14,
      href: "/",
      label: "New reminder",
    },
    {
      id: 15,
      href: "/",
      label: "New reminder",
    },
  ];
  return (
    <CardContainer
      variant="withButton"
      title={"To-Do"}
      icon={<LuClipboardList size={"2rem"} />}
    >
      <ul className={styles.list}>
        {reminders.map((item) => (
          <li key={item.id} className="ellipsis">
            {item.label}
          </li>
        ))}
      </ul>
    </CardContainer>
  );
};

export default CardTask;
