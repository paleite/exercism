type Planet = keyof typeof orbitalPeriod;

const orbitalPeriod = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1.0,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
} as const;

export const age = (planet: Planet, seconds: number): number =>
  Math.round((seconds / orbitalPeriod[planet] / 31557600) * 100) / 100;
