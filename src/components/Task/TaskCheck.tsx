import { Checkbox } from "../Checkbox";
import Stack from "../Stack/Stack";
import Typography from "../Typography/Typography";
import type { TaskCheckProps } from "./TaskCheck.types";

export default function TaskCheck({ value, handleChange }: TaskCheckProps) {
  return (
    <Stack>
      <Checkbox handleChange={handleChange} />
      <Typography nowrap>{value}</Typography>
    </Stack>
  );
}
