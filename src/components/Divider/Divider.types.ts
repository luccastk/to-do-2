import type { JSX } from "react/jsx-runtime";

type Direction = "horinzotal" | "vertical";

type Variant = "full" | "middle";

export type DividerProps<T extends keyof JSX.IntrinsicElements> = {
  direction?: Direction;
  component?: T;
  variant?: Variant;
  className?: string;
} & React.ComponentProps<T>;
