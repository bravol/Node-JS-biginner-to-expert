const fs = require("fs");
const express = require("express");

const app = express();
const port = 3000;

const data = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);
// routes
app.get("/api/v1/tours", (req, res) => {
  res.status(200).json({
    status: "success",
    results: data.length,
    data: {
      tours: data,
    },
  });
});
app.listen(port, () => {
  console.log("App running on port " + port);
});

// middleware
