const express = require("express");
const router = express.Router();
const {pay,displaypayment} = require("../services/payment.services")

router.post("/", pay)
router.get("/:id", displaypayment)

module.exports=router