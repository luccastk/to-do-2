import React from "react";
import { FaPlus } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import {
  Container,
  Divider,
  Drawer,
  Icon,
  Input,
  List,
  ListItem,
  Paper,
  Stack,
  Typography,
} from "../../components";
import IconButton from "../../components/IconButton/IconButton";
import TaskCheck from "../../components/Task/TaskCheck";
import styles from "./Home.module.scss";

export default function Home() {
  const [value, setValue] = React.useState("");
  const [open, setOpen] = React.useState(false);
  return (
    <Container
      component="section"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr auto"
      }}
    >
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Stack spacing="2rem">
          <Typography
            variant="h1"
            component="h1"
            aria-label="title"
            role="heading"
          >
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
          <ListItem
            role="button"
            onClick={() => setOpen((prev) => !prev)}
            style={{ paddingLeft: "1.125rem" }}
          >
            <TaskCheck
              value={
                "12313121231312123131212313121231312123131212313121231312123131212313121231312123131212313121231312123131212313121231312123131212313121231312123131212313121231312123131212313121231312123131212313121231312"
              }
              handleChange={() => console.log("alterou")}
            />
            <Icon icon={<IoIosArrowForward />} />
          </ListItem>
          <Divider />
        </List>
      </Container>
      <Drawer
        open={open}
        style={{
          marginLeft: "1.5rem",
        }} >
        <Stack
          style={{
            justifyContent: "space-between",
            marginBottom: "1rem",
          }}
        >
          <Typography variant="h3" component="h2">
            Tasks:
          </Typography>
          <IconButton
            icon={<IoClose size={"1.5rem"} />}
            onClick={() => setOpen((prev) => !prev)}
          />
        </Stack>
        <Input
          id={"update-task"}
          placeholder="Update Task"
          value={""}
          className={styles.input}
        />
        <Input
          id={"update-description"}
          placeholder="Description"
          value={""}
          className={styles.input}
        />
      </Drawer>
    </Container>
  );
}
