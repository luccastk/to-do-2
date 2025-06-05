import ReminderListItem from "../ReminderListItem/ReminderListItem";

type ReminderListProps = {
  handleClick: () => void;
};

const ReminderList = ({ handleClick }: ReminderListProps) => {
  return (
    <ul>
      <ReminderListItem
        task={"ReminderReminderReminderReminderReminder"}
        handleClick={handleClick}
      />
    </ul>
  );
};

export default ReminderList;
