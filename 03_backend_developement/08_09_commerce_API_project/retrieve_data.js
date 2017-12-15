const database = require("./database");

function fetchBrands(callback) {
  // const message = {message: "trop cool"};
  const brands = [{
    id: "cbe1c32e-faa9-4911-ad8e-4422f2b627c9",
    title: "8C+"
  },
  {
    id: "e9b08852-1132-4e92-b062-866d1ce44833",
    title: "ABUS"
  },
  {
    id: "0619b6a7-ddd2-45d1-a86f-d045ab3d8a53",
    title: "ABUS FRANCE SAS"
  }];

  const brandsImported = brands.map((brand) => database.storeBrand(brand, (insertion) => {
    return insertion;
  }));

  console.log(brandsImported);

  if (brandsImported) {
    callback(null, `We ve imported : ${brandsImported.length}`);
  } else {
    callback("An issue occured during import", null);
  }
}


module.exports = {
  fetchBrands: fetchBrands
};
