const express = require("express");
const routes = require("./client_routes");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded()); //middleware
app.use("/user", routes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log("Server is running..");
});
