type Variant = "default" | "title" | "subtitle";
type Component = "span" | "h1" | "h2" | "h3" | "p";

export type TypographyProps = {
  text: string;
  component?: Component;
  variant?: Variant;
  muted?: boolean;
  className?: string;
} & React.ComponentProps<"input">;
