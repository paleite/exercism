const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
] as const;

const colorCode = (x: typeof COLORS[number]): number => COLORS.indexOf(x);

export { colorCode, COLORS };
