import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Drawer from "../Drawer/Drawer";
import IconButton from "../IconButton/IconButton";
import Stack from "../Stack/Stack";
import Typography from "../Typography/Typography";
import styles from "./Sidebar.module.scss";
import clsx from "clsx";
import List from "../List/List";
import ListItem from "../List/ListItem/ListItem";
import Icon from "../Icon/Icon";
import { FaStickyNote } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [open, setOpen] = React.useState(true);
  return (
    <Drawer
      open={open}
      style={{ marginRight: "1rem" }}
      className={clsx(styles.sidebar, {
        [styles["sidebar--collapsed"]]: open,
      })}
    >
      <Stack style={{ justifyContent: "space-between" }}>
        <Typography
          className={clsx({
            [styles.collapsed]: open,
          })}
        >
          Menu
        </Typography>
        <IconButton
          icon={<GiHamburgerMenu />}
          onClick={() => setOpen((prev) => !prev)}
        />
      </Stack>
      <Stack
        style={{ flexDirection: "column", marginTop: "1rem", gap: ".25rem" }}
      >
        <Typography
          variant="h5"
          className={clsx({
            [styles.collapsed]: open,
          })}
        >
          TASKS
        </Typography>
        <List style={{ marginLeft: ".5rem" }}>
          <ListItem>
            <Link to={"/"}>
              <Icon icon={<FaStickyNote />} />
              <Typography
                nowrap
                className={clsx({
                  [styles.collapsed]: open,
                })}
              >
                Stick Wall
              </Typography>
            </Link>
          </ListItem>
        </List>
      </Stack>
      <Stack style={{ marginTop: "auto" }}></Stack>
    </Drawer>
  );
}
