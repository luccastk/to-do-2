import { FaPlus } from "react-icons/fa";
import { BaseIcon } from "../../../components/Base";
import Input from "../../../components/Input/Input";
import { InputContainer } from "../../../feature/reminders/components/Base";
import { PageContainer, PageHeader } from "../../../shared/components";
import React from "react";
import Typography from "../../../components/Typography/Typography";
import Badge from "../../../components/Badge/Badge";
import { CiMail } from "react-icons/ci";

const Reminder = () => {
  const [value, setValue] = React.useState("");

  return (
    <PageContainer>
      <PageHeader
        title={
          "New ReminderNew ReminderNew ReminderNew ReminderNew ReminderNew Reminder"
        }
      />
      <InputContainer>
        <input type="text" placeholder="gatuno" />
      </InputContainer>
      <Badge badgeContent={"1"} variant="dot" icon={<CiMail size={"1.5rem"}/>}/>
    </PageContainer>
  );
};

export default Reminder;
