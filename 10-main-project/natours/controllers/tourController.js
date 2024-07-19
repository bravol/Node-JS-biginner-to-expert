const fs = require("fs");

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

// a middle ware to check for id
exports.checkID = (req, res, next, val) => {
  console.log(`Tour id is: ${val}`);

  const id = req.params.id * 1;
  const tourIndex = tours.findIndex((el) => el.id === id);
  if (tourIndex === -1) {
    return res.status(404).json({
      status: "failed",
      message: "Tour not found",
    });
  }
  next();
};

// a middleware to check the boady
exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: "fail",
      message: "Missing name or price",
    });
  }
  next();
};

exports.getAllTours = (req, res) => {
  console.log(req.requestTime);

  res.status(200).json({
    status: "success",
    requestedAt: req.requestTime,
    results: tours.length,
    data: {
      tours,
    },
  });
};

exports.getTour = (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1;
  const tourIndex = tours.findIndex((el) => el.id === id);
  const tour = tours[tourIndex];

  res.status(200).json({
    status: "success",
    data: {
      tour,
    },
  });
};

exports.createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: "success",
        data: {
          tour: newTour,
        },
      });
    }
  );
};

exports.updateTour = (req, res) => {
  const id = req.params.id * 1;
  const tourIndex = tours.findIndex((el) => el.id === id);
  // Merge updated fields from req.body into the existing tour object
  const updatedTour = { ...tours[tourIndex], ...req.body };
  // Update the tour in your data store or database (assuming `data` is your store)
  tours[tourIndex] = updatedTour;
  res.status(200).json({
    status: "success",
    message: "Tour updated successfully",
    data: {
      tour: updatedTour,
    },
  });
};

//delete tour
exports.deleteTour = (req, res) => {
  const id = req.params.id * 1;
  const tourIndex = tours.findIndex((el) => el.id === id);
  // Remove the tour from your data store or database
  const deletedTour = tours.splice(tourIndex, 1)[0];
  res.status(204).json({
    status: "success",
    message: "This Tour is deleted successfully",
    data: {
      tour: deletedTour,
    },
  });
};
