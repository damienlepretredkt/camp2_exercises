const express = require("express");
const retrieve_data = require("./retrieve_data");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", function (request, result) {
  result.send("Hello World!");
});


app.get("/admin/retrieve/brands", function (request, result) {
  retrieve_data.fetchBrands((error, success) => {
    if (error) {
      result.send(`An error occured during brands refreshing : ${error}`);
    } else {
      result.json(success);
    }
  });
});


app.listen(port, function () {
  console.log("Server listening on port:" + port);
});
