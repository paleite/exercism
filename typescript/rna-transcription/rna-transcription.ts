type Dna = keyof typeof dnaToRnaMapping;

const dnaToRnaMapping = {
  G: "C",
  C: "G",
  T: "A",
  A: "U",
} as const;

function assertDna(dna: string): asserts dna is Dna {
  if (!(dna in dnaToRnaMapping)) {
    throw Error("Invalid input DNA.");
  }
}

const toRna = (dna: string): "C" | "G" | "A" | "U" => {
  assertDna(dna);
  return dnaToRnaMapping[dna];
};

const toRnaAll = (dna: string): string => dna.split("").map(toRna).join("");

export { toRnaAll as toRna };
