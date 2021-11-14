const express = require("express");

const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
  res.send("user");
});

module.exports = userRouter;
