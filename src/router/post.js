const express = require("express");

const postRouter = express.Router();

postRouter.get("/", (req, res, next) => {
  res.send("post");
});

module.exports = postRouter;
