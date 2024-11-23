const Products = require("../models/product");

async function updateProduct() {
  try {
    const updatedProduct = await Products.update(
      { price: 42 },
      { where: { id: 3 } }
    );
    console.log("product updated", updatedProduct);
  } catch (error) {
    console.log(error);
  }
}
module.exports = updateProduct;
