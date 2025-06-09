interface Typography {
  h1: string;
  body: string;
  nowrap: string;
}

export type TypographyClassKey = keyof Typography;

export function generateUtilityClass(componentName: string, slot: string) {
  return `${componentName}-${slot}`;
}

export function generateUtilityClasses<T extends string>(
  componentName: string,
  slots: T[]
): Record<T, string> {
  const result: Record<string, string> = {};

  slots.forEach((slot) => {
    result[slot] = generateUtilityClass(componentName, slot);
  });

  return result;
}
