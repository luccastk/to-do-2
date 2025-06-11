import type React from "react";

type Variants = "inherit" | "body" | "h1" | "h2" | "h3" | "h4" | "h5";

export type TypographyProps<T extends React.ElementType = "span"> = {
  component?: T;
  variant?: Variants;
  muted?: boolean;
  bold?: boolean;
  nowrap?: boolean;
  className?: string;
} & React.ComponentPropsWithoutRef<T>;
