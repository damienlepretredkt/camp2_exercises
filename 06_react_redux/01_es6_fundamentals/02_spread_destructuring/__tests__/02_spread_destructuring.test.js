const sd = require("../02_spread_destructuring.js");

test("should copyReplace", () => {
  expect(sd.copyReplace(["A","B","C","D"], 1, 2, ["E","F"])).toEqual(["A","E","F","C","D"]);
});


test("it should call console.log if all parameters", () => {
  const logSpy = jest.spyOn(console, "log").mockImplementation();
  const options = {speed: 5, enable: {hyperdrive: false, frobnifier: true}};

  sd.go(options);

  expect(logSpy).toHaveBeenCalledTimes(1);
  expect(logSpy).toHaveBeenCalledWith("speed=", 5 , "hyperdrive:", false, "frobnifier:", true);

  logSpy.mockRestore();
});

test("it should call console.log if only one parameter", () => {
  const logSpy = jest.spyOn(console, "log").mockImplementation();
  const options = {speed: 5};

  sd.go(options);

  expect(logSpy).toHaveBeenCalledTimes(1);
  expect(logSpy).toHaveBeenCalledWith("speed=", 5 , "hyperdrive:", true, "frobnifier:", true);

  logSpy.mockRestore();
});


test("it should return lastIndex (2) of an Array of 3 elements", () => {
  expect(sd.lastIndexOf([1, 2, 1, 2], 2, 6)).toBe(3);
  expect(sd.lastIndexOf([1, 2, 1, 2], 2, 2)).toBe(1);
  expect(sd.lastIndexOf([1, 2, 1, 2], 2)).toBe(1);
});


test("it should replace array values", () => {
  const testArray = [1, 2, 100, 100, 6];
  sd.replace(testArray, 2, 4, [3, 4, 5]);
  expect(testArray).toEqual([1, 2, 3, 4, 5, 6]);
});

// function replace(array, from, to, elements) {
//   array.splice.apply(array, [from, to - from].concat(elements));
// }
//
// let testArray = [1, 2, 100, 100, 6];
// replace(testArray, 2, 4, [3, 4, 5]);
// console.log(testArray);
