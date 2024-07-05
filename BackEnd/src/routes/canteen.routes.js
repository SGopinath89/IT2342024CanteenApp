const express = require("express");
const router = express.Router();
const { create, getcanteens, getcanteen, deletecanteen, updatecanteen } = require("../services/canteen.services")
const { verifyToken, checkUserType } = require("../middlewares/auth.middleware")

router.post("/", verifyToken, checkUserType('admin'), create)
router.get("/", verifyToken, checkUserType(['admin', 'staff', 'student']), getcanteens)
router.get("/:id", verifyToken, checkUserType(['admin', 'staff', 'student']), getcanteen)
router.delete("/:id", verifyToken, checkUserType('admin'), deletecanteen)
router.put("/:id", verifyToken, checkUserType('admin'), updatecanteen)

module.exports = router