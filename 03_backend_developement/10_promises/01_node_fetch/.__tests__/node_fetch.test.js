const node_fetch = require("../node_fetch");

test("getBrandDetails: should return QUECHUA as brand title", () => {
  expect.assertions(1);

  return node_fetch.getBrandDetails("9dffa1e1-59db-4401-b878-618746c0b58f")
    .then(brandTitle => {
      expect(brandTitle).toBe("QUECHUA");
    }
    )
})


test("getProductInfo: should return Product (Polaire HIKE 200 garçon rouge, QUECHUA)", () => {
  expect.assertions(2);

  return node_fetch.getProductInfo("efe288cb-fb63-4b23-b8df-529f04b8b02b")
    .then(product => {
      expect(product.title).toBe("Polaire HIKE 200 garçon rouge");
      expect(product.brand).toBe("QUECHUA");
    }
    )
})
