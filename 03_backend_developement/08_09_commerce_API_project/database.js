const PG = require("pg");


function storeBrand(brand, callback) {
  // TODO: TRUNCATE BEFORE INSERT (or UPDATE ???)
  const client = new PG.Client();
  client.connect();

  client.query(
    "INSERT INTO brands(id, title) VALUES ($1::uuid, $2::text)",
    [brand.id, brand.title],
    function myStoreBrand(error, result) {
      if (error) {
        console.warn(error);
        client.end();
        callback(0);
      } else {
        console.log(result);
        client.end();
        callback(result.rowCount);
      }
    }
  );
}

module.exports = {
  storeBrand: storeBrand
};
