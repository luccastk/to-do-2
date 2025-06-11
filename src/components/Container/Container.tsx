import type React from "react";
import type { ContainerProps } from "./Container.types";
import styles from "./Container.module.scss";
import clsx from "clsx";

export default function Container<T extends React.ElementType = "div">({
  component,
  children,
  ...rest
}: ContainerProps<T>) {
  const Component = component || "div";
  return (
    <Component className={clsx(styles.container)} {...rest}>
      {children}
    </Component>
  );
}
