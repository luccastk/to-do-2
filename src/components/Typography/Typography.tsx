import React from "react";
import styles from "./Typography.module.scss";
import type { TypographyProps } from "./Typography.types";

export default function Typography({
  text,
  variant = "default",
  component = "span",
  muted,
  className,
}: TypographyProps) {
  const classNames = [styles[variant]];

  if (variant !== "default") classNames.push(styles[`${variant}`]);
  if (muted) classNames.push(styles.muted);

  return React.createElement(
    component,
    {
      className: `text-ellipsis ${classNames.join(" ")} ${className ? className : ""}`,
    },
    text
  );
}
