const express = require("express");

const reviewRouter = express.Router();

reviewRouter.get("/", (req, res, next) => {
  res.send("review");
});

module.exports = reviewRouter;
