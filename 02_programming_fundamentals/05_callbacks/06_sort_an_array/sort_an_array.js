// Your task is to create a function that will sort every number contained in a given array.
//
// For example:
//
// sort([24, 7, 9, 72, -8]) === [-8, 7, 9, 24, 72]
//
// Note: You should not use Array.sort()

function sort(unsortedArray) {
  // Your code here
  let sortedArray = [];
  for (let i = 0; i < unsortedArray.length; i++) {
    if (sortedArray.length === 0) {
      sortedArray.push(unsortedArray[i]);
    } else {
      sortedArray.splice(findPositionToPush(unsortedArray[i], sortedArray), 0, unsortedArray[i]);
    }
  }  
  return sortedArray;
}

function findPositionToPush(number, sortedArray) {
  for (let i = 0; i < sortedArray.length; i++) {
    if (number < sortedArray[i]) {
      return i;
    }
  }
  return sortedArray.length;
}

// pour chaque élément du tableau
// on prend le premier item et on l'insère dans un tableau
// pour le deuxième on le compare au dernier du tableau// si supérieur
// on push ans le tableau
// si inférieur on test numéro précédent

// [24, 7, 9, 72, -8]
// tab est vide je met le fichier
// tab pas vide
//    tant que ma valeur est supérieur ou = j'itère
//    si supérieur ou = j'insère à l'indice + 1

// [1, 3 ,5]

// 4
// [1,3,5]


// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = sort;
