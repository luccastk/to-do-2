import { FaPlus } from "react-icons/fa";
import {
  Container,
  Icon,
  Input,
  List,
  ListItem,
  Paper,
  Stack,
  Typography,
} from "../../components";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function Home() {
  const [value, setValue] = React.useState("");
  return (
    <Container>
      <Stack direction="column" spacing="2rem">
        <Typography variant="h1" as="h1" aria-label="title" role="heading">
          Today
        </Typography>
        <Paper>
          <Typography variant="h2">5</Typography>
        </Paper>
      </Stack>
      <Input
        id={"task"}
        value={value}
        icon={<FaPlus color="#ebebeb" />}
        placeholder="Add New Task"
        onChange={(e) => setValue(e.currentTarget.value)}
      />
      <List>
        <ListItem>
          <Stack style={{justifyContent: "space-between"}}>
            <Typography nowrap>titulo</Typography>
            <Icon icon={<IoIosArrowForward />} />
          </Stack>
        </ListItem>
      </List>
    </Container>
  );
}
