import React from "react";

type TypographyProps = {
  text: string;
  component?: "h1" | "h2" | "h3" | "p";
};

export default function Typography({ text, component = "p" }: TypographyProps) {
  const styles = () => {
    switch (component) {
      case "h1":
        return "text-lg";
      case "h2":
        return "text-md";
      case "h3":
        return "t-sm";
      default:
        return "t-mds";
    }
  };

  return React.createElement(
    component,
    { className: `ellipsis ${styles}` },
    text
  );
}
