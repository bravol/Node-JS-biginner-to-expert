const express = require("express");
const morgan = require("morgan");
const tourRouter = require("./routes/tourRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();
//1.middle wares
app.use(morgan("dev"));
app.use(express.json()); //stands btween in the middle of request and response
app.use(express.static(`${__dirname}/public`)); //to display pages

//creating our own middelwares
app.use((req, res, next) => {
  console.log("Logging middleware...");
  next();
});
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
