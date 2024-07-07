const express = require("express");
const router = express.Router();
const {pay,displaypayment,getpayments} = require("../services/payment.services")
const {verifyToken,canteenAdminProtect} = require("../middlewares/auth.middleware")

router.post("/",verifyToken, pay)
router.get("/:id",verifyToken, displaypayment)
router.get("/",verifyToken,canteenAdminProtect,getpayments)

module.exports=router