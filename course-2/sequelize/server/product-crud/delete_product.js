const Products = require("../models/product");

async function deleteProduct() {
  try {
    const removeproduct = await Products.destroy({
      where: { name: "Product 6" },
    });
    console.log("Product deleted:", removeproduct);
  } catch (error) {
    console.log(error);
  }
}

module.exports = deleteProduct;
