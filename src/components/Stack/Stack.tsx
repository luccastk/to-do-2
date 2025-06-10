import clsx from "clsx";
import React from "react";
import type { JSX } from "react/jsx-runtime";
import styles from "./Stack.module.scss";
import type { StackProps } from "./Stack.types";

export default function Stack<T extends keyof JSX.IntrinsicElements>({
  component,
  spacing,
  children,
}: React.PropsWithChildren<StackProps<T>>) {
  const Component = component || "div";
  const classNames = clsx(styles.default, {});
  return React.createElement(
    Component,
    { className: classNames, style: { gap: spacing } },
    children
  );
}
