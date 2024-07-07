const express = require("express");
const router = express.Router();
const {
  create,
  getcanteens,
  getcanteen,
  deletecanteen,
  updatecanteen,
  getcanteenByStaff,
} = require("../services/canteen.services");
const {
  verifyToken,
  checkUserType,
} = require("../middlewears/auth.middlewear");

router.post("/", verifyToken, checkUserType("admin"), create);
router.get("/", verifyToken, getcanteens);
router.get("/staff/:id", verifyToken, getcanteenByStaff);
router.get("/:id", verifyToken, getcanteen);
router.delete("/:id", verifyToken, checkUserType("admin"), deletecanteen);
router.put("/:id", verifyToken, checkUserType("admin"), updatecanteen);
module.exports = router;