const express = require("express");
const router = express.Router();
const {pay} = require("../services/payment.services")

router.post("/", pay)


module.exports=router