const express = require("express");
const router = express.Router();

router.get("/brian", (req, res) => {
  res.send("Hello there" + req.url + "!");
});

module.exports = router;
