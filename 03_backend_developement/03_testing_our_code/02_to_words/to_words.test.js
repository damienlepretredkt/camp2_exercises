const toWords = require("./to_words");


test("should split my sentence in an array of 2 words", () => {
  expect(toWords.toWords("Hello world")).toEqual(["Hello","world"]);
});


test("should split my sentence in an array 5 words", () => {
  expect(toWords.toWords("Hello world, how are you")).toEqual(["Hello","world","how","are","you"]);
});


test("should split with a ; in the sentence", () => {
  expect(toWords.toWords("Hello world; How are you")).toEqual(["Hello","world","How","are","you"]);
});
