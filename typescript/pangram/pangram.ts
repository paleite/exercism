const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")

const includesLetter =
  (arr: string[]) =>
  (letter: string): boolean =>
    arr.includes(letter)

const getLetters = (input: string): string[] =>
  input.replace(/\W+/giu, "").toLowerCase().split("")

const alphabetsEvery = (letterIsIncluded: (arg0: string) => boolean): boolean =>
  alphabet.every(letterIsIncluded)

const isPangram = (input: string): boolean => {
  const letterIsIncludedInInput = includesLetter(getLetters(input))

  return alphabetsEvery(letterIsIncludedInInput)
}

export { isPangram }
