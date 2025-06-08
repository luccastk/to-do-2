import React from "react";
import styles from "./Typography.module.scss";

type Variant = "default" | "primary" | "secundary";
type Size = "default" | "small" | "medium";
type Weight = "400" | "600" | "700";
type LineHeight = "xs" | "lg";
type Component = "span" | "h1" | "h2" | "h3" | "p";

type TypographyProps = {
  text: string;
  component?: Component;
  variant?: Variant;
  size?: Size;
  weight?: Weight;
  lineHeight?: LineHeight;
  muted?: boolean;
  className?: string;
};

export default function Typography({
  text,
  component = "span",
  variant = "default",
  size = "default",
  weight = "400",
  lineHeight,
  muted = false,
  className,
}: TypographyProps) {
  const classNames = [styles[variant]];

  if (size !== "default") classNames.push(styles[`${size}`]);
  if (lineHeight) classNames.push(styles[`lh-${lineHeight}`]);
  if (weight) classNames.push(styles[`weight-${weight}`]);
  if (muted) classNames.push(styles["muted"]);

  return React.createElement(
    component,
    { className: `text-ellipsis ${classNames.join(" ")} ${className}` },
    text
  );
}
