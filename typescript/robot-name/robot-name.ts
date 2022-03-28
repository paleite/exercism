const append = (appendage: string[], input: string): string[] =>
  appendage.map((x) => `${input}${x}`)

const shuffle = <T>(array: T[]): T[] => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

function* generateNames(): Generator<string, void, unknown> {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
  const numbers = "0123456789".split("")

  const appendLetter = (input: string): string[] => append(letters, input)
  const appendNumber = (input: string): string[] => append(numbers, input)

  const names = [""]
    .flatMap(appendLetter)
    .flatMap(appendLetter)
    .flatMap(appendNumber)
    .flatMap(appendNumber)
    .flatMap(appendNumber)

  const shuffledNames = shuffle(names)
  const nameCount = shuffledNames.length

  let i = 0
  while (true) {
    yield shuffledNames[i]
    i = (i + 1) % nameCount
  }
}

const names = generateNames()
const getNextName = (): string => names.next().value ?? ""

export class Robot {
  #_name: string
  constructor() {
    this.#_name = getNextName()
  }

  public get name(): string {
    return this.#_name
  }

  public resetName(): void {
    this.#_name = getNextName()
  }

  public static releaseNames(): void {
    return
  }
}
