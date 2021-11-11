const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res, next) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log("listening in 4000!");
});
