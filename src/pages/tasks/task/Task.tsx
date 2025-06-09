import { FaPlus } from "react-icons/fa";
import {
  Badge,
  Button,
  Checkbox,
  Drawer,
  Icon,
  Input,
} from "../../../components";
import Typography from "../../../components/Typography/Typography";
import React from "react";
import ListItem from "../../../components/List/ListItem/ListItem";
import List from "../../../components/List/List";
import { IoIosArrowForward } from "react-icons/io";

export default function Task() {
  const [value, setValue] = React.useState("");
  const [checked, setChecked] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  function handleClickListItem(e: React.MouseEvent) {
    e.stopPropagation();
    setOpen((prev) => !prev);
  }

  return (
    <div style={{ width: "100%", display: "flex" }}>
      <div
        style={{
          flex: "1",
          minWidth: "0",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          paddingRight: "1rem",
        }}
      >
        <div style={{ display: "flex", gap: "1rem" }}>
          <Typography children={"Today"} variant="primary" />
          <Badge badgeContent={"10"} variant="large" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: ".5rem",
            minHeight: "0",
          }}
        >
          <Input
            icon={<FaPlus color="#7c7c7c" />}
            id={"new-task"}
            placeholder="Add New Task"
            variant="outlined"
            value={value}
            handleChange={(e) => setValue(e)}
          />
          <List>
            <ListItem onClick={handleClickListItem}>
              <Checkbox
                handleChange={() => setChecked((prev) => !prev)}
                value={checked ? 1 : 0}
              >
                <Typography children={value} />
              </Checkbox>
              <Icon icon={<IoIosArrowForward />} />
            </ListItem>
          </List>
        </div>
      </div>
      <Drawer active={open} width="medium" />
    </div>
  );
}
