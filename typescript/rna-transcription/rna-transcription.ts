const dnaToRna = {
  G: "C",
  C: "G",
  T: "A",
  A: "U",
};

function assertRna(x: string): asserts x is keyof typeof dnaToRna {
  if (!(x in dnaToRna)) {
    throw Error("Invalid input DNA.");
  }
}

export function toRna(x: string): string {
  return x
    .split("")
    .map((y) => (assertRna(y), dnaToRna[y]))
    .join("");
}
