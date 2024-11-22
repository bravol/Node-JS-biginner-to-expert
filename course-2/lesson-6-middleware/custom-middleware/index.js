const express = require("express");
const routes = require("./routees");
const app = express();
const PORT = 3000;

app.use("/", routes);

app.get("/", (req, res) => {
  res.send("The root Route.");
});

app.listen(PORT, () => {
  console.log("Server is running..");
});
