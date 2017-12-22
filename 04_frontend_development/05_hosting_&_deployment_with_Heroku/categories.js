const fetch = require("node-fetch");


function getCategories() {
  return fetch("https://decath-product-api.herokuapp.com/categories")
    .then(response => response.json())
    .catch(error => console.log(error));
}

function getCategory(categoryId) {
  return fetch(`https://decath-product-api.herokuapp.com/categories/${categoryId}`)
    .then(response => response.json())
    .catch(error => console.log(error));
}


module.exports = {
  getCategories: getCategories,
  getCategory: getCategory
}
