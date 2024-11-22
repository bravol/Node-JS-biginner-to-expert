const express = require("express");
const database = require("./utils/database");
const router = require("./routes/product");
const app = express();
const PORT = 3000;

// get connection to database
database.getConnection((err, connection) => {
  if (err) {
    console.log(err.sqlMessage);
  } else {
    console.log("Connection Established");
  }
});
app.use("/", router);

const server = app.listen(PORT, () => {
  console.log("Server is running ...");
});
