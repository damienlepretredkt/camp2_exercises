function toWords(sentence) {
  if(!sentence) {
    return "";
  } else {
    const allWords = sentence.split(/[.?!,; :]+/);

    return allWords.filter(word => word !== "");
  }
}

module.exports = {toWords: toWords};
