// ~/exercism/javascript/anagram/anagram.js
const s = (x: string) => x.split("").sort().join("")

const z = (x: string) =>
  ((x: string) =>
    (
      (x: string) => (y: string) => (z: string) =>
        (
          (x: string) => (y: string) => (z: string) =>
            x !== z && y === s(z)
        )(x)(y)(z.toLowerCase())
    )(x)(s(x)))(x.toLowerCase())

export const findAnagrams = (x: string, y: string[]) => y.filter(z(x))
