import ReminderInputCreate from "../ReminderInputCreate/ReminderInputCreate";
import HeadDrawer from "./HeadDrawer/HeadDrawer";

const ReminderDrawer = () => {
  return (
    <div>
      <HeadDrawer
        title={"Tasks"}
        closeDrawer={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
};

export default ReminderDrawer;
