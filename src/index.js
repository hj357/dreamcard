const express = require("express");
const postRouter = require("./router/post");
const reviewRouter = require("./router/review");
const userRouter = require("./router/user");

const app = express();
const port = 4000;

app.use("/user", userRouter);
app.use("/review", reviewRouter);
app.use("/post", postRouter);

app.get("/", (req, res, next) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log("listening in 4000!");
});
