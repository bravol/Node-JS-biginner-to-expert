const express = require("express");
const router = express.Router();

router.get("/brian", (req, res) => {
  res.send("Hello there" + req.url + "!");
});

router.get("/user/:userId/:userName", (req, res) => {
  res.send(req.params);
});

module.exports = router;
