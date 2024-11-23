const sequelize = require("./db");
const Products = require("./models/product");
const createProduct = require("./product-crud/create_product");
const deleteProduct = require("./product-crud/delete_product");
const readProducts = require("./product-crud/read_products");
const updateProduct = require("./product-crud/update_product");

async function main() {
  try {
    await sequelize.authenticate();
    console.log("connection established");
    // await Products.sync();
    // console.log("table created");
    // await createProduct();
    // await readProducts();
    await updateProduct();
    await deleteProduct();
  } catch (error) {
    console.log(error);
  } finally {
    await sequelize.close();
  }
}

main();
