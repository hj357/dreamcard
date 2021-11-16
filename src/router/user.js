const express = require("express");
const UserEntity = require("../entities/user");

const userRouter = express.Router();

userRouter.get("/:userId", async (req, res) => {
  const { userId } = req.params;
  const userData = await UserEntity.findOne({ where: { Id: userId } });
  res.json(userData);
});

module.exports = userRouter;
