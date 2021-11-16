const express = require("express");
const postRouter = require("./router/post");
const reviewRouter = require("./router/review");
const userRouter = require("./router/user");
const PORT = 4000;
const syncDatabase = require("./entities/index");

const initServer = async () => {
  const app = express();

  try {
    await syncDatabase();
  } catch (e) {
    console.log("database error");
    console.log(e.message);
  }

  app.use("/user", userRouter);
  app.use("/review", reviewRouter);
  app.use("/post", postRouter);

  app.get("/", (req, res, next) => {
    res.send("hellow world");
  });

  app.listen(PORT, () => {
    console.log("listening in 4000!");
  });
};

initServer();
