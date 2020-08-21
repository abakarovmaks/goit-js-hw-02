function findLongestWord(string = "") {
  let words = string.split(" ");
  let longestWord = words[0];

  for (const word of words) {
    const isLongest = word.length > longestWord.length;
    if (isLongest) {
      longestWord = word;
    }
  }
  return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

console.log(findLongestWord("Google do a roll"));

console.log(findLongestWord("May the force be with you"));
