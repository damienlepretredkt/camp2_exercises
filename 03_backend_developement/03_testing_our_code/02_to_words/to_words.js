function toWords(sentence) {
  const allWords = sentence.split(/[.?!,; :]+/);

  return allWords.filter(word => word !== "");
}

module.exports = {toWords: toWords};
