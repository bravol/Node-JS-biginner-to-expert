const fs = require("fs");
const express = require("express");

const app = express();
//middle ware
app.use(express.json()); //stands btween in the middle of request and response

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

app.post("/api/v1/tours", (req, res) => {
  //   console.log(req.body);
  const newId = data[data.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  data.push(newTour);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(data),
    (err) => {
      if (err) return res.status(500).send("Error writing file");
      res.status(201).json({
        status: "success",
        data: newTour,
      });
    }
  );
});
//port
const port = 3000;
app.listen(port, () => {
  console.log("App running on port " + port);
});

// middleware
