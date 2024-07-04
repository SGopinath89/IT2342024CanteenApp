const express = require("express");
const router = express.Router();
const {pay,displaypayment,getpayments} = require("../services/payment.services")

router.post("/", pay)
router.get("/:id", displaypayment)
router.get("/", getpayments)

module.exports=router