import React from "react";

export function onKeyDownHandler<T>(
  e: React.KeyboardEvent<T>,
  onEnter: () => void,
  onEscape: () => void,
  onTab?: () => void
) {
  switch (e.key) {
    case "Enter":
      onEnter();
      break;
    case "Escape":
      onEscape();
      break;
    case "Tab":
      e.preventDefault();
      onTab?.();
      break;
  }
}
