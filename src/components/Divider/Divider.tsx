import React from "react";
import type { DividerProps } from "./Divider.types";
import styles from "./Divider.module.scss";

export default function Divider({
  component = "hr",
  direction = "default",
  variant = "full",
  className,
}: DividerProps) {
  const classNames: string[] = [];

  if (direction !== "default") classNames.push(styles.vertical);
  if (variant !== "full" && direction !== "vertical") {
    classNames.push(styles.middle);
  } else if (variant !== "full") {
    classNames.push(styles.vertical__middle);
  }
  if (className) classNames.push(className);

  return React.createElement(component, {
    className: `${styles.default} ${classNames.join(" ")}`,
  });
}
