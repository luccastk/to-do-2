import React from "react";
import { FaPlus } from "react-icons/fa";
import { Button } from "../../components";
import Drawer from "../../components/Drawer/Drawer";

export default function Home() {
  const [collaped, setCollapsed] = React.useState(false);

  return (
    <div style={{ width: "100%" }}>
      <Drawer active={collaped} />

      <Button
        icon={<FaPlus />}
        handleClick={() => setCollapsed((prev) => !prev)}
      />
    </div>
  );
}
