import clsx from "clsx";
import React from "react";
import styles from "./Typography.module.scss";
import type { TypographyProps } from "./Typography.types";

export default function Typography<T extends React.ElementType = "span">({
  children,
  variant,
  component,
  muted,
  bold,
  nowrap,
  className,
  ...rest
}: TypographyProps<T>) {
  const Component = component || "span";
  return (
    <Component
      className={clsx(
        [styles[variant ?? "inherit"]],
        {
          [styles.muted]: muted,
          [styles.bold]: bold,
          [styles.nowrap]: nowrap,
        },
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}
