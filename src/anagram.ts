const sortAlphabetically = (word: string) => word.split("").sort().join("");

const hasSameLetters = (a: string, b: string) =>
  sortAlphabetically(a) === sortAlphabetically(b);

const isEqual = (targetWord: string, candidateWord: string) =>
  targetWord === candidateWord;

const isValidAnagram = (targetWord: string, candidateWord: string) =>
  !isEqual(targetWord, candidateWord) &&
  hasSameLetters(targetWord, candidateWord);

const isAnagramFor = (targetWord: string) => {
  const targetWordLower = targetWord.toLowerCase();

  return (candidateWord: string): boolean =>
    isValidAnagram(targetWordLower, candidateWord.toLowerCase());
};

const findAnagrams = (targetWord: string, candidateWords: string[]) =>
  candidateWords.filter(isAnagramFor(targetWord));

export { findAnagrams };
