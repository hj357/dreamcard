const express = require("express");
const PostEntity = require("../entities/post");

const postRouter = express.Router();

postRouter.get("/:postId", async (req, res) => {
  const { postId } = req.params;
  const postData = await PostEntity.findOne({ where: { Id: postId } });
  res.json(postData);
});

module.exports = postRouter;
