const express = require("express");
const userController = require("./../controllers/userController");

const router = express.Router();

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;

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
