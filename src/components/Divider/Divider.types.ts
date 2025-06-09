import type { JSX } from "react/jsx-runtime";

type Direction = "default" | "vertical";

type Variant = "full" | "middle";

export type DividerProps = {
  direction?: Direction;
  component?: keyof JSX.IntrinsicElements;
  variant?: Variant;
  className?: string;
};
