import clsx from "clsx";
import React from "react";
import type { JSX } from "react/jsx-runtime";
import styles from "./Divider.module.scss";
import type { DividerProps } from "./Divider.types";

export default function Divider<T extends keyof JSX.IntrinsicElements>({
  component,
  direction = "horinzotal",
  variant = "full",
  className,
}: DividerProps<T>) {
  const Component = component || "hr";

  return React.createElement(Component, {
    className: clsx(styles.default, {
      [styles.vertical]: direction !== "horinzotal",
      [styles.middle]: direction !== "vertical" && variant !== "full",
      [styles.vertical__middle]: variant !== "full",
      className,
    }),
  });
}
