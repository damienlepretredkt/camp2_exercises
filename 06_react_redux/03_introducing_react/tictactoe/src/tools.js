function flattenArray(arrayOfArray) {
  return arrayOfArray.reduce((newArray, array) => newArray.concat(array), []);
}


function isNotNull(value) {
  return value !== null;
}


export default flattenArray
export {isNotNull, flattenArray}
