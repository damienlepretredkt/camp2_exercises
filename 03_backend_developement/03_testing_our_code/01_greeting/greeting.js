function greet(name) {
  let greetingName = name;

  if (!name) {
    greetingName = "World";
  }

  return `Hello ${greetingName.toUpperCase()}!`;
}

module.exports = {
  greet: greet
};
