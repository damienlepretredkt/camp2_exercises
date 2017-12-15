const fetch = require("node-fetch");

function getProductInfo(productId) {
  return fetch(`https://decath-product-api.herokuapp.com/products/${productId}`)
    .then(response => response.json())
    .then(product => {
      const productAsObject = {title: product.title, brand: product.brand_id};
      return productAsObject;
    })
    .then(product => {
      return getBrandDetails(product.brand).then(
        brand => {
          product.brand = brand;
          return product;
        }
      );
    });
}


function getBrandDetails(brandId) {
  return fetch(`https://decath-product-api.herokuapp.com/brands/${brandId}`)
    .then(response => response.json())
    .then(brand => brand.title);
}

function displayProductInformations() {
  getProductInfo("efe288cb-fb63-4b23-b8df-529f04b8b02b").then(product => {
    console.log(product);
  });
}


module.exports = {
  getProductInfo: getProductInfo,
  getBrandDetails: getBrandDetails,
  displayProductInformations: displayProductInformations
};
