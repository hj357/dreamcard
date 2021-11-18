const express = require("express");
const RestaurantEntity = require("../entities/restaurant");

const restaurantRouter = express.Router();

restaurantRouter.get("/:restaurantId", async (req, res) => {
  const { restaurantId } = req.params;
  const restaurantData = await RestaurantEntity.findOne({
    where: { Id: restaurantId },
  });
  res.json(restaurantData);
});

module.exports = restaurantRouter;
