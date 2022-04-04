const NOT_SCREAMING = "NOT_SCREAMING" as const
const SCREAMING = "SCREAMING" as const
const NOT_ASKING = "NOT_ASKING" as const
const ASKING = "ASKING" as const

const response = {
  [NOT_SCREAMING]: {
    [NOT_ASKING]: "Whatever.",
    [ASKING]: "Sure.",
  },
  [SCREAMING]: {
    [NOT_ASKING]: "Whoa, chill out!",
    [ASKING]: "Calm down, I know what I'm doing!",
  },
} as const

const hey = (input: string): string => {
  const request = input.trim()

  const hasRequest = request !== ""
  const isAsking = request.slice(-1) === "?" ? ASKING : NOT_ASKING
  const isScreaming =
    request === request.toUpperCase() && request != request.toLowerCase()
      ? SCREAMING
      : NOT_SCREAMING

  return hasRequest ? response[isScreaming][isAsking] : "Fine. Be that way!"
}

export { hey }
