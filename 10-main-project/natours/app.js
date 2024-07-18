const fs = require("fs");
const express = require("express");

const app = express();
//middle ware
app.use(express.json()); //stands btween in the middle of request and response

const data = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

const getAllTours = (req, res) => {
  res.status(200).json({
    status: "success",
    results: data.length,
    data: {
      tours: data,
    },
  });
};
const getTour = (req, res) => {
  const id = req.params.id * 1; // Convert id to number
  const tour = data.find((el) => el.id === id);
  if (!tour) {
    return res.status(404).json({
      status: "fail",
      message: "Tour not found",
    });
  }
  res.status(200).json({
    status: "success",
    data: {
      tour: tour,
    },
  });
};

const createTour = (req, res) => {
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
};

const updateTour = (req, res) => {
  const id = req.params.id * 1;
  const tourIndex = data.findIndex((el) => el.id === id);
  if (tourIndex === -1) {
    return res.status(404).json({
      status: "fail",
      message: "Tour not found",
    });
  }
  // Merge updated fields from req.body into the existing tour object
  const updatedTour = { ...data[tourIndex], ...req.body };
  // Update the tour in your data store or database (assuming `data` is your store)
  data[tourIndex] = updatedTour;
  res.status(200).json({
    status: "success",
    message: "Tour updated successfully",
    data: {
      tour: updatedTour,
    },
  });
};

const deleteTour = (req, res) => {
  const id = req.params.id * 1;
  const tourIndex = data.findIndex((el) => el.id === id);

  if (tourIndex === -1) {
    return res.status(404).json({
      status: "fail",
      message: "Tour not found to be deleted",
    });
  }
  // Remove the tour from your data store or database
  const deletedTour = data.splice(tourIndex, 1)[0];
  res.status(204).json({
    status: "success",
    message: "This Tour deleted successfully",
    data: {
      tour: deletedTour,
    },
  });
};

// routes
//get al tours
// app.get("/api/v1/tours", getAllTours);

//create tour
// app.post("/api/v1/tours", createTour);

//buiding api for getting one tour
// app.get("/api/v1/tours/:id", getTour);

//building patch request api
// app.patch("/api/v1/tours/:id", updateTour);

//building delete request api
// app.delete("/api/v1/tours/:id", deleteTour);

//improved api
//combined route for getting all tours and creating  tour
app.route("/api/v1/tours").get(getAllTours).post(createTour);

//combined for get tour, update tour and delete tour
app
  .route("/api/v1/tours/:id")
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour);

//port
const port = 3000;
app.listen(port, () => {
  console.log("App running on port " + port);
});

// middleware
