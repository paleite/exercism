export class Matrix {
  rows: number[][]
  columns: number[][]
  constructor(matrix: string) {
    this.rows = matrix.split("\n").map((row) => row.split(" ").map(Number))
    this.columns = this.rows.map((_, i) => this.rows.map((row) => row[i]))
  }
}
