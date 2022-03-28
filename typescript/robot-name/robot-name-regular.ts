const validLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const validNumbers = "0123456789"

const randomLetters = (count: number): string =>
  new Array(count)
    .fill("")
    .map(() => validLetters[Math.floor(Math.random() * validLetters.length)])
    .join("")

const randomNumbers = (count: number): string =>
  new Array(count)
    .fill("")
    .map(() => validNumbers[Math.floor(Math.random() * validNumbers.length)])
    .join("")

const generateName = (): string =>
  [...randomLetters(2), ...randomNumbers(3)].join("")

const consumedNames = new Set<string>()
const generateUniqueName = (): string => {
  let name
  do {
    name = generateName()
  } while (consumedNames.has(name))
  consumedNames.add(name)
  return name
}

export class Robot {
  #_name: string
  constructor() {
    this.#_name = generateUniqueName()
  }

  public get name(): string {
    return this.#_name
  }

  public resetName(): void {
    this.#_name = generateUniqueName()
  }

  public static releaseNames(): void {
    consumedNames.clear()
  }
}
