const sortAlphabetically = (word: string) => word.split("").sort().join("");

const findAnagrams = (targetWord: string, candidateWords: string[]) => {
  const targetWordLower = targetWord.toLowerCase();
  const targetWordComparable = sortAlphabetically(targetWordLower);

  return candidateWords.filter((candidateWord) => {
    const candidateWordLower = candidateWord.toLowerCase();
    const candidateWordComparable = sortAlphabetically(candidateWordLower);
    if (targetWordLower === candidateWordLower) {
      return false;
    }
    if (targetWordComparable === candidateWordComparable) {
      return true;
    }
    return false;
  });
};

export { findAnagrams };
