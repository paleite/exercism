type Roster = { [grade: number]: readonly string[] }

export class GradeSchool {
  #_roster: Roster = {}

  roster = (): Roster => JSON.parse(JSON.stringify(this.#_roster))

  add = (name: string, grade: number): void => {
    const roster = { ...this.#_roster, [grade]: this.#_roster[grade] ?? [] }
    this.#_roster = Object.entries(roster).reduce<Roster>(
      (acc, [curGrade, curNames]) => ({
        ...acc,
        [curGrade]: [...curNames, name]
          .filter((curName) => curName !== name || curGrade === `${grade}`)
          .sort(),
      }),
      {}
    )
  }

  grade = (grade: number): Roster[number] => this.roster()[grade] ?? []
}
