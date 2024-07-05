const express = require("express");
const router = express.Router();
const {pay,displaypayment,getpayments} = require("../services/payment.services")
const {verifyToken} = require("../middlewares/auth.middleware")

router.post("/",verifyToken, pay)
router.get("/:id",verifyToken, displaypayment)
router.get("/",verifyToken, getpayments)

module.exports=router