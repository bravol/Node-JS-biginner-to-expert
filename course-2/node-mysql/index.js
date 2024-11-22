const express = require("express");
const mysql = require("mysql2");
const app = express();
const PORT = 3000;
// configure a database
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "nodemysql",
  port: 3306,
  multipleStatements: true,
});

pool.getConnection((err, connection) => {
  if (err) {
    console.log(err.sqlMessage);
  } else {
    console.log("Connection Established");
  }
});

app.listen(PORT, () => {
  console.log("Server is running ...");
});
