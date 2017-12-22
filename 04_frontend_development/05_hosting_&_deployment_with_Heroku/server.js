const express = require("express");
const nunjucks = require("nunjucks");
const categoryService = require("./categories");
const productsService = require("./products");

const app = express();

const port = process.env.PORT || 3000;

nunjucks.configure("views", {
  autoescape: true,
  express: app
});

app.use(express.static('css'));
app.use(express.static('img'));

app.set("views", __dirname + "/views");
app.set("view engine", "njk");


app.get("/", function (request, result) {
  const myContent = "nunjunks !!"
  result.render("home", {content: myContent});
});

app.get("/categories", function (request, result) {
  categoryService.getCategories()
    .then(
      categories => result.render("categories", {categories: categories})
    )
    .catch(error => console.warn(error));
});


app.get("/categories/:categoryId", function (request, result) {
  productsService.getProductsFromCategory(request.params.categoryId)
    .then( products => {
      categoryService.getCategory(request.params.categoryId)
        .then(
          category => result.render("category", {products: products, category: category})
        )
        .catch(error => console.warn(error))
    })
    .catch(error => console.warn(error))

});

app.get("/products/:productId", function (request, result) {
  console.log(request.query.categoryId);
  productsService.getProduct(request.params.productId)
    .then(product => {
      categoryService.getCategory(request.query.categoryId)
        .then(
          category => result.render("product", {product: product, category: category})
        )
        .catch(error => console.warn(error))
    })

    .catch(error => console.warn(error))

});


app.listen(port, function () {
  console.log("Server listening on port:" + port);
});
