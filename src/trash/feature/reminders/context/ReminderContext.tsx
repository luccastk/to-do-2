import React from "react";
import { useLocalStorage } from "../../../shared/hooks";
import { randomColorMenu } from "../../../shared/functions/utils/random-color";

export type TaskData = {
  id: string;
  task: string;
  active: boolean;
};

export type ReminderData = {
  id: string;
  title: string;
  tasks: TaskData[];
  color: string;
};

type ReminderProps = {
  initialValue?: string;
  children: React.ReactNode;
};

type ReminderContextProps = {
  initialValue: string;
  reminders: ReminderData[];
  setReminders: React.Dispatch<React.SetStateAction<ReminderData[]>>;
  updateReminderTitle: (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => void;
  createReminder: () => void;
  deleteReminder: (id: string) => void;
  createTask: (reminderId: string) => void;
  deleteTask: (reminderId: string, taskId: string) => void;
  updateTask: (
    reminderId: string,
    taskId: string,
    newValue: Partial<TaskData>
  ) => void;
};

const ReminderContext = React.createContext<ReminderContextProps | null>(null);

export const useReminder = () => {
  const context = React.useContext(ReminderContext);
  if (context === null)
    throw new Error("useReminder must be used within ReminderContextProvider");
  return context;
};

export const ReminderContextProvider = ({
  initialValue = "New Reminder",
  children,
}: ReminderProps) => {
  const [reminders, setReminders] = useLocalStorage<ReminderData[]>(
    "reminders",
    []
  );
  const [task, setTask] = React.useState("'");

  function updateReminderTitle(
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) {
    const title = e.currentTarget.value;
    setReminders((prev) =>
      prev.map((item) => (item.id === id ? { ...item, title: title } : item))
    );
  }

  function createReminder() {
    const id = crypto.randomUUID();
    const newReminder: ReminderData = {
      id: id,
      title: initialValue,
      tasks: [],
      color: randomColorMenu(),
    };
    setReminders((prev) => [...prev, newReminder]);
  }

  function deleteReminder(id: string) {
    setReminders((prev) => prev.filter((item) => item.id !== id));
  }

  function createTask(reminderId: string) {
    const idTask = crypto.randomUUID();

    if (task === "") return;

    const newTask: TaskData = {
      id: idTask,
      task,
      active: true,
    };

    setReminders((prev) =>
      prev.map((item) =>
        item.id === reminderId
          ? { ...item, tasks: [...item.tasks, newTask] }
          : item
      )
    );

    setTask("");
  }

  function deleteTask(reminderId: string, taskId: string) {
    setReminders((prev) =>
      prev.map((item) =>
        item.id === reminderId
          ? {
              ...item,
              tasks: item.tasks.filter((t) => t.id !== taskId),
            }
          : item
      )
    );
  }

  function updateTask(
    reminderId: string,
    taskId: string,
    newValue: Partial<TaskData>
  ) {
    setReminders((prev) =>
      prev.map((item) =>
        item.id === reminderId
          ? {
              ...item,
              tasks: item.tasks.map((t) =>
                t.id === taskId ? { ...t, ...newValue } : t
              ),
            }
          : item
      )
    );
  }

  return (
    <ReminderContext.Provider
      value={{
        reminders,
        setReminders,
        updateReminderTitle,
        createReminder,
        deleteReminder,
        initialValue,
        createTask,
        updateTask,
        deleteTask,
      }}
    >
      {children}
    </ReminderContext.Provider>
  );
};

export default ReminderContextProvider;
