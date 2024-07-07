const express = require("express");
const router = express.Router();
const {
  addfood,
  displayfoods,
  displayfood,
  deletefood,
  updatefood,
  displayfoodsByCanteenId,
} = require("../services/food.services");
const {
  verifyToken,
  checkUserType,
  canteenAdminProtect,
} = require("../middlewares/auth.middleware");

router.post("/", verifyToken, canteenAdminProtect, addfood);
router.get("/", verifyToken, displayfoods);
router.get("/:id", verifyToken, displayfood);
router.get("/canteen/:id", verifyToken, displayfoodsByCanteenId);
router.delete("/:id", verifyToken, canteenAdminProtect, deletefood);
router.put("/:id", verifyToken, canteenAdminProtect, updatefood);

module.exports = router;