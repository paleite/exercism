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
}

type Color = keyof typeof resistance

export const decodedResistorValue = ([colorA, colorB, colorC]: [
  Color,
  Color,
  Color
]): string =>
  `${resistance[colorA]}${resistance[colorB]}${"0".repeat(
    resistance[colorC]
  )} ohms`.replace("000 ", " kilo")
