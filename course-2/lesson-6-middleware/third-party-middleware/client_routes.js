const express = require("express");
const router = express.Router();

// middleware to check headers
const checkContentType = (req, res, next) => {
  if (req.headers["content-type"] !== "application/json") {
    res.send("INVALID REQUEST!");
  } else {
    next();
  }
};

// make sure to be called automatically
router.use(checkContentType);

router.get("/client", (req, res) => {
  res.send("Welcome to /client Route");
});
router.post("/brian", (req, res) => {
  res.send("Welcome to /client Route");
});

module.exports = router;
