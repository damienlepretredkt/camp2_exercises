const fetch = require("node-fetch");


function getProductsFromCategory(categoryId) {
  return fetch(`https://decath-product-api.herokuapp.com/categories/${categoryId}/products`)
    .then(response => response.json())
    .then(response => {
      return response.map((product => {
        product.image_path = "https://www.decathlon.fr/media/" + product.image_path;
        return product;
      }))
    })
    .catch(error => console.warn(error));
}

function getProduct(productId) {
  return fetch(`https://decath-product-api.herokuapp.com/products/${productId}`)
    .then(response => response.json())
    .then(product => {
      product.image_path = "https://www.decathlon.fr/media/" + product.image_path;
      product.rating_percent = Math.round(((product.rating / 5) * 100) / 10 ) * 10;
      return product;
    }

    )
    .catch(error => console.warn(error));
}


// const ratings = {
//   hotel_a : 2.8,
//   hotel_b : 3.3,
//   hotel_c : 1.9,
//   hotel_d : 4.3,
//   hotel_e : 4.74
// };

// total number of stars
// const starTotal = 5;
//
// for(const rating in ratings) {
//   const starPercentage = (ratings[rating] / starTotal) * 100;
//   const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
//   document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded;
// }




module.exports = {
  getProductsFromCategory: getProductsFromCategory,
  getProduct: getProduct
};
