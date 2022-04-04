function dice(count: number): number {
  const d = new Array(count)
    .fill(0)
    .map(() => Math.floor(Math.random() * 6) + 1)
  d.sort()
  d.shift()
  return d.reduce((a, b) => a + b)
}

const throws = (count: number): number[] =>
  new Array(count).fill(0).map(() => dice(4))

export class DnDCharacter {
  hitpoints
  strength
  dexterity
  constitution
  intelligence
  wisdom
  charisma

  constructor() {
    const [strength, dexterity, constitution, intelligence, wisdom, charisma] =
      throws(6)

    this.hitpoints = 10 + DnDCharacter.getModifierFor(constitution)

    this.strength = strength
    this.dexterity = dexterity
    this.constitution = constitution
    this.intelligence = intelligence
    this.wisdom = wisdom
    this.charisma = charisma
  }

  public static generateAbilityScore(): number {
    return Math.random() * 15 + 3
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2)
  }
}
