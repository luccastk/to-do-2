import React from "react";
import Drawer from "../Drawer/Drawer";
import IconButton from "../IconButton/IconButton";
import { FaHamburger } from "react-icons/fa";

export default function Sidebar() {
  const [open, setOpen] = React.useState(false);
  return (
    <Drawer open={open} style={{width: "2rem"}}>
      <IconButton
        icon={<FaHamburger />}
        onClick={() => setOpen((prev) => !prev)}
      />
    </Drawer>
  );
}
