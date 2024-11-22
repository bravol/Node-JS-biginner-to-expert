const Products = require("../models/product");

async function createProduct() {
  try {
    const new_product = await Products.create({
      name: "product 4",
      price: 100,
      category: "3 product",
    });
    console.log(new_product.id, new_product.name, new_product.category);
  } catch (error) {
    console.error(error);
  }
}

module.exports = createProduct;
