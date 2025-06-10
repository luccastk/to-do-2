import type { PaperProps } from "./Paper.types";

export default function Paper({
  background,
  children,
}: React.PropsWithChildren<PaperProps>) {
  return <div style={{ backgroundColor: background }}>{children}</div>;
}
