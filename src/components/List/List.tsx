export default function List({
  children,
  ...rest
}: React.ComponentProps<"ul">) {
  return <ul {...rest}>{children}</ul>;
}
