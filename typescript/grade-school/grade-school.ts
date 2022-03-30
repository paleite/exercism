type Roster = { [grade: number]: readonly string[] }

const reduceRoster =
  (name: string, grade: number) =>
  (acc: Roster, [curGrade, curNames]: [string, readonly string[]]): Roster => ({
    ...acc,
    [curGrade]: [...curNames, name]
      .filter((curName) => curName !== name || grade === Number(curGrade))
      .sort(),
  })

export class GradeSchool {
  #_roster: Roster = {}

  constructor() {
    this.#_roster = {}
  }

  roster(): Roster {
    return JSON.parse(JSON.stringify(this.#_roster))
  }

  add(name: string, grade: number): void {
    this.#_roster[grade] = this.#_roster[grade] ?? []
    this.#_roster = Object.entries(this.#_roster).reduce<Roster>(
      reduceRoster(name, grade),
      {}
    )
  }

  grade(grade: number): string[] {
    return [...(this.#_roster[grade] ?? [])]
  }
}
