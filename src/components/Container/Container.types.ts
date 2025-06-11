import type React from "react";

export type ContainerProps<T extends React.ElementType> = {
  component?: T;
} & React.ComponentPropsWithoutRef<T>;
