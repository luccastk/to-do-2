import React from "react";
import { FaPlus } from "react-icons/fa";
import { Button, Icon, Input } from "../../components";
import Drawer from "../../components/Drawer/Drawer";

export default function Home() {
  const [collaped, setCollapsed] = React.useState(false);
  const [value, setValue] = React.useState("")
  return (
    <div style={{ width: "100%", display: "flex" }}>
      <Button
        icon={<FaPlus />}
        handleClick={() => setCollapsed((prev) => !prev)}
      />
      <Input
        id={"name"}
        placeholder="oie"
        value={value}
        handleChange={(e) => setValue(e)}
      />
      <Drawer active={collaped} width="medium">
        <Icon icon={<FaPlus />} />
      </Drawer>
    </div>
  );
}
