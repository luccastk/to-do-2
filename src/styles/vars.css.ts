import {
  createGlobalTheme,
  createTheme,
  createThemeContract,
} from "@vanilla-extract/css";

const root = createGlobalTheme("#root", {});

const colors = createThemeContract({
  primary: null,
  secundary: null,
});

export const light = createTheme(colors, {
  primary: "yellow",
  secundary: "orange",
});

export const dark = createTheme(colors, {
  primary: "green",
  secundary: "red",
});

export const vars = { ...root, colors };
