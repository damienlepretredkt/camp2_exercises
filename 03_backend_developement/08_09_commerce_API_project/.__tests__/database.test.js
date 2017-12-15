const database = require("../database");


//const PG = require("./__mocks__/PG");
jest.setMock("pg", {
  Client: () => {
    return {
      connect: () => {},
      query: (query, params, myStoreBrand) => {
        // connection database
        // execute query
        // end query
        myStoreBrand(null, { rowCount: 1 });
      },
      end: () => {}
    }
  }
});

test("it should works", () => {
  expect(true).toBeTruthy();
})


test("storeBrands should work", done => {
  const brand = { id: "e9b08852-1132-4e92-b062-866d1ce44833", title: "ABUS"}

  const callbackStoreBrand = (rowCount) => {
    expect(rowCount).toEqual(1);
    done();
  }
  database.storeBrand(brand, callbackStoreBrand)
})
