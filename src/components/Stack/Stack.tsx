import clsx from "clsx";
import React from "react";
import styles from "./Stack.module.scss";
import type { StackProps } from "./Stack.types";

export default function Stack<T extends React.ElementType = "div">({
  component,
  direction,
  divider,
  spacing = "1rem",
  children,
  ...rest
}: StackProps<T>) {
  const Component = component || "div";
  return (
    <Component
      className={clsx(styles.default, {
        [styles.column]: direction === "column",
      })}
      style={{ gap: spacing }}
      {...rest}
    >
      {children}
      {divider ? divider : ""}
    </Component>
  );
}
