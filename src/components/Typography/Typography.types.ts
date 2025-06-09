import type { JSX } from "react/jsx-runtime";
import type { TypographyClass } from "./typography";

type Color = "primary" | "secundary";

export type TypographyProps = {
  children?: React.ReactNode;
  variant?:   TypographyClass;
  color?: Color;
  muted?: boolean;
  component?: keyof JSX.IntrinsicElements;
  className?: string;
};
