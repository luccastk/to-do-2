import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { fontSize, lineHeight } from "./font.css";
import { fontWeight } from "./font.css";
import { colors } from "./colors.css";

export const baseTypography = style({
  fontSize: fontSize.sm,
  fontWeight: fontWeight.normal,
  lineHeight: lineHeight.sm,
  color: colors.neutral[950],
});

export const typography = recipe({
  base: baseTypography,
  variants: {
    variant: {
      heading__primary: {
        fontSize: fontSize.xl,
        fontWeight: fontWeight.semibold,
        lineHeight: lineHeight.xl,
        color: colors.neutral[900],
      },
      heading__secondary: {
        fontSize: fontSize.xs,
        fontWeight: fontWeight.semibold,
        lineHeight: lineHeight.xs,
        color: colors.neutral[950],
      },
      heading__stick: {
        fontSize: fontSize.md,
        fontWeight: fontWeight.semibold,
        lineHeight: lineHeight.md,
        color: colors.neutral[900],
      },
      subtitle: {
        fontSize: fontSize.md,
        fontWeight: fontWeight.semibold,
        lineHeight: lineHeight.md,
        color: colors.neutral[950],
      },
      text__primary: {
        fontSize: fontSize.sm,
        fontWeight: fontWeight.normal,
        lineHeight: lineHeight.sm,
        color: colors.neutral[950],
      },
      text__secondary: {
        fontSize: fontSize.xs,
        fontWeight: fontWeight.semibold,
        lineHeight: lineHeight.xs,
        color: colors.neutral[950],
      },
    },
  },
  defaultVariants: {
    variant: "text__primary",
  },
});
