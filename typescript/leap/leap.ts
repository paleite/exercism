const divisibleBy =
  (x: number) =>
  (n: number): boolean =>
    Number.isInteger(n / x)

const divisibleBy4 = divisibleBy(4)
const divisibleBy100 = divisibleBy(100)
const divisibleBy400 = divisibleBy(400)

export const isLeap = (x: number): boolean =>
  (divisibleBy4(x) && !divisibleBy100(x)) || divisibleBy400(x)
