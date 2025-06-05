import React from "react";

export default function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [state, setState] = React.useState<T>(() => {
    try {
      const local = window.localStorage.getItem(key);
      return local ? (JSON.parse(local) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  React.useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(state));
    } catch (err) {
      console.log((err as Error).message);
    }
  }, [key, state]);

  return [state, setState];
}