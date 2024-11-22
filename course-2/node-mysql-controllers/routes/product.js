const express = require("express");
const database = require("../utils/database");
const productController = require("../controllers/product_controller");
const router = express.Router();

// getting data from database : REST API
router.get("/get-products", productController.getProducts);
// create product
router.post("/create-product", productController.createProduct);
//REST API for delete product
router.delete("/delete-product", productController.deleteProduct);
// Update product price by product_id
router.put("/update-product", productController.updateProduct);

module.exports = router;
