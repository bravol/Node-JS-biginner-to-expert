const express = require("express");
const database = require("../utils/database");
const router = express.Router();

// getting data from database : REST API
router.get("/get-products", (req, res) => {
  database.execute("select * from products", (error, data) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(data);
    }
  });
});

// create product
router.post("/create-product", (req, res) => {
  database.execute(
    "insert into products (name, description, price, quantity) VALUES ('Laptop2', 'A high-performance laptop2', 2500.00, 20)",
    (error, data) => {
      if (error) {
        res.status(500).send(error);
      } else {
        res.send(data).status(201);
      }
    }
  );
});

//REST API for delete product
router.delete("/delete-product", (req, res) => {
  database.execute("delete from products where product_id=7", (error, rsh) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(rsh);
    }
  });
});

// Update product price by product_id
router.put("/update-product", (req, res) => {
  database.execute(
    "UPDATE products SET price = ? WHERE product_id = ?",
    [1000.0, 6],
    (error, result) => {
      if (error) {
        res.status(500).send(error);
      } else if (result.affectedRows === 0) {
        res.status(404).send({ message: "Product not found" });
      } else {
        res.status(200).send({ message: "Product updated successfully" });
      }
    }
  );
});

module.exports = router;

// api is a service/ a program / an interface through which the client side can communicate with the server.
// api for data sharing REST APIs.(Represnetational Transer)

// STATUS CODES

// 100-199 => information not fully processed
// 200-299 => success related messages
// 300-399 => redirectional messages
// 400 to 499 => client errors
// 500-599 => internal server error.

// app.put is used when an entire database is to be updated at once
// app.patch is used to edit the specific values only
