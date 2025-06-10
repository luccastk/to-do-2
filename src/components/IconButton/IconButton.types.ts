import type { ButtonProps } from "../Button/Button.types";
import type { Position } from "../types";

export type IconButtonProps = {
  icon: React.ReactNode;
  position?: Extract<Position, "left" | "right">;
} & Omit<ButtonProps, "label" | "variant">;
