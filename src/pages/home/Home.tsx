import React from "react";
import { FaPlus } from "react-icons/fa";
import { GiHamburger } from "react-icons/gi";
import { Button, Input } from "../../components";
import Typography from "../../components/Typography/Typography";
import styles from "./Home.module.scss";

export default function Home() {
  const [collaped, setCollapsed] = React.useState(false);
  const [value, setValue] = React.useState("");
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      {/* <Button
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
      </Drawer> */}
      <Typography text={"muitogrande"} variant="title" />
      <Typography text={"muitogrande"} variant="subtitle" />
      <Typography text={"muitogrande"} />
      <Typography text={"muitogrande"} muted variant="title" />
      <Typography text={"muitogrande"} muted variant="subtitle" />
      <Typography
        text={
          "muitograndemuitograndemuitograndemuitograndemuitograndemuitograndemuitograndemuitograndemuitograndemuitograndemuitograndemuitograndemuitograndemuitograndemuitograndemuitograndemuitograndemuitograndemuitograndemuitograndemuitogrande"
        }
        muted
        variant="title"
        className={styles.ellipsis}
      />
      <div style={{ display: "flex" }}>
        <Button
          icon={<FaPlus color="#7c7c7c" />}
          onClick={() => setCollapsed((prev) => !prev)}
        >
          <Typography text={"Add New Task"} />
        </Button>
        <Button
          icon={<GiHamburger />}
          onClick={() => console.log("cliclou")}
          position="left"
          className={`${styles.newButton} ${collaped ? styles.efeito : ""}`}
        />
      </div>
      <Input
        id={"name"}
        placeholder="name"
        value={value}
        className={""}
        onChange={(e) => setValue(e.currentTarget.value)}
      />
    </div>
  );
}
