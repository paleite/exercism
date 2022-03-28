export class Matrix {
  #_rows
  #_columns
  constructor(matrix: string) {
    this.#_rows = matrix.split("\n").map((row) => row.split(" ").map(Number))
    this.#_columns = this.#_rows.map((_, i) => this.#_rows.map((row) => row[i]))
  }
  get rows(): number[][] {
    return this.#_rows
  }
  get columns(): number[][] {
    return this.#_columns
  }
}
