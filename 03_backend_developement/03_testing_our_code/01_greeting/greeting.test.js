const greet = require("./greeting");

test("should return Hello Biloute", () => {
  expect(greet.greet("Biloute")).toBe("Hello BILOUTE!");
});

test("should return Hello World", () => {
  expect(greet.greet()).toBe("Hello WORLD!");
});
