import React from "react";
import styles from "./Typography.module.scss";
import type { TypographyProps } from "./Typography.types";
import {
  generateUtilityClass,
  generateUtilityClasses,
} from "../../utils/getStyles";

// interface Typography {
//   h1: string;
//   body: string;
//   nowrap: string;
// }

// type TypographyClassKey = keyof Typography;

// function getTypographyClass(slot: string) {
//   return generateUtilityClass("typography", slot);
// }

export default function Typography({
  children,
  variant = "root",
  component = "span",
  muted,
  className,
}: TypographyProps) {
  // const classes: Typography = generateUtilityClasses("typography", [
  //   "body",
  //   "h1",
  //   "nowrap",
  // ]);

  // console.log(getTypographyClass("h1"));

  return React.createElement(component, children);
}
