import { InputContainer } from "../../../feature/reminders/components/Base";
import { PageContainer, PageHeader } from "../../../shared/components";

const Reminder = () => {
  return (
    <PageContainer>
      <PageHeader
        title={
          "New ReminderNew ReminderNew ReminderNew ReminderNew ReminderNew Reminder"
        }
      />
      <InputContainer>
        <input type="text" placeholder="gatuno"/>
      </InputContainer>
    </PageContainer>
  );
};

export default Reminder;
