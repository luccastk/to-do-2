import type React from "react";

type Direction = "row" | "column";

export type StackProps<T extends React.ElementType> = {
  component?: T;
  direction?: Direction;
  divider?: React.ReactNode;
  spacing?: string;
} & React.ComponentPropsWithoutRef<T>;
