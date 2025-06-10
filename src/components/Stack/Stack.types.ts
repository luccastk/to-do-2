import type React from "react";
import type { JSX } from "react/jsx-runtime";

type Direction = "row" | "column";

export type StackProps<T extends keyof JSX.IntrinsicElements> = {
  component?: T;
  direction?: Direction;
  divider?: React.ReactNode;
  spacing?: string;
} & React.ComponentProps<T>;
