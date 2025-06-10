import type { JSX } from "react/jsx-runtime";

type Variants = "inherit" | "body" | "h1" | "h2" | "h3" | "h4" | "h5";

export type TypographyProps<T extends keyof JSX.IntrinsicElements> = {
  as?: T;
  variant?: Variants;
  muted?: boolean;
  bold?: boolean;
  nowrap?: boolean;
  className?: string;
} & React.ComponentProps<T>;
