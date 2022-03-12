const resistance = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
};

type Color = keyof typeof resistance;

export const decodedValue = ([colorA, colorB]: [
  Color,
  Color,
  ...Color[]
]): number => parseInt(`${resistance[colorA]}${resistance[colorB]}`);
