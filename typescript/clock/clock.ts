const leftPad = (x: number): string => {
  return `${x}`.padStart(2, "0")
}

export class Clock {
  #_hour
  #_minute
  constructor(hour: number, minute?: number) {
    this.#_hour = hour
    this.#_minute = minute ?? 0
  }

  public toString(): unknown {
    const r = Math.floor(this.#_minute / 60)
    const sign = this.#_minute >= 0 ? 1 : -1
    const hour = this.#_hour + sign * r
    const minute = this.#_minute

    return `${leftPad(((hour % 24) + 24) % 24)}:${leftPad(
      ((minute % 60) + 60) % 60
    )}`
  }

  public plus(minutes: unknown): Clock {
    throw new Error("Remove this statement and implement this function")
  }

  public minus(minutes: unknown): Clock {
    throw new Error("Remove this statement and implement this function")
  }

  public equals(other: unknown): unknown {
    throw new Error("Remove this statement and implement this function")
  }
}
