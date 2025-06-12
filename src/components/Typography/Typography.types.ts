import type { RecipeVariants } from "@vanilla-extract/recipes";
import type React from "react";
import { typography } from "../../styles/typography.css";

type TypographyVariants = RecipeVariants<typeof typography>;

export type TypographyProps<T extends React.ElementType = "span"> = {
  component?: T;
  variant?: TypographyVariants["variant"];
  color: TypographyVariants["color"];
  muted?: boolean;
  bold?: boolean;
  nowrap?: boolean;
  className?: string;
} & React.ComponentPropsWithoutRef<T>;