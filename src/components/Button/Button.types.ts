type Variant = "default" | "save";

export type ButtonProps = {
  label: string;
  loading?: boolean;
  variant?: Variant;
  className?: string;
  onClick: () => void;
} & React.ComponentProps<"button">;
