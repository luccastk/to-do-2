import clsx from "clsx";
import React from "react";
import type { JSX } from "react/jsx-runtime";
import styles from "./Typography.module.scss";
import type { TypographyProps } from "./Typography.types";

export default function Typography<T extends keyof JSX.IntrinsicElements>({
  children,
  variant,
  as,
  muted,
  bold,
  nowrap,
  className,
  ...rest
}: React.PropsWithChildren<TypographyProps<T>>) {
  const Component = as || "span";
  return React.createElement(
    Component,
    {
      className: clsx(
        [styles[variant ?? "inherit"]],
        {
          [styles.muted]: muted,
          [styles.bold]: bold,
          [styles.nowrap]: nowrap,
        },
        className
      ),
      ...rest,
    },
    children
  );
}
