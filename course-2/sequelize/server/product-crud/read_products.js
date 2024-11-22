const Products = require("../models/product");

const readProducts = async () => {
  try {
    const products = await Products.findAll();
    console.log(
      "displaying all the products",
      JSON.stringify(products, null, 2)
    );
  } catch (error) {
    console.log(err);
  }
};

module.exports = readProducts;
