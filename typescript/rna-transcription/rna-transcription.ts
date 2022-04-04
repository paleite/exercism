type Dna = keyof typeof dnaToRnaMapping
type Rna = typeof dnaToRnaMapping[Dna]

const dnaToRnaMapping = {
  G: "C",
  C: "G",
  T: "A",
  A: "U",
} as const

function assertDna(dna: string): asserts dna is Dna {
  if (!(dna in dnaToRnaMapping)) {
    throw Error("Invalid input DNA.")
  }
}

const toRna = (dna: string): Rna => {
  assertDna(dna)
  return dnaToRnaMapping[dna]
}

const toRnaAll = (dna: string): string => dna.split("").map(toRna).join("")

export { toRnaAll as toRna }
