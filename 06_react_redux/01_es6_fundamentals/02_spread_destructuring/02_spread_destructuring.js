
function go(options) {

  const {
    speed = 4,
    enable: { hyperdrive = true, frobnifier = true} = {}
  } = options;

  console.log("speed=", speed, "hyperdrive:", hyperdrive, "frobnifier:", frobnifier);
}

go({ speed: 5 });

function lastIndexOf(arr, elt, start = (arr.length -1)) {
  for (let i = start - 1; i >= 0; i--) {
    if (arr[i] === elt) {
      return i;
    }
  }

  return -1;
}

console.log(lastIndexOf([1, 2, 1, 2], 2));

function replace(array, from, to, elements) {
  const tmpArray = [array.splice(from, to - from)];
  tmpArray.splice(2, 0, 99);
  return tmpArray;
}

let testArray = [1, 2, 100, 100, 6];
replace(testArray, 2, 4, [3, 4, 5]);
console.log(testArray);

function copyReplace(array, from, to, elements) {
  return array.slice(0, from).concat(elements).concat(array.slice(to));
}

console.log(copyReplace([1, 2, 100, 200, 6], 2, 4, [3, 4, 5]));

module.exports = {
  go: go,
  lastIndexOf: lastIndexOf,
  replace: replace,
  copyReplace: copyReplace
};
