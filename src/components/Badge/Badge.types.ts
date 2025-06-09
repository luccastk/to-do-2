type Variant = "default" | "large";

export type BadgeProps = {
  badgeContent: string | number;
  variant?: Variant;
  backgrounColor?: string;
};