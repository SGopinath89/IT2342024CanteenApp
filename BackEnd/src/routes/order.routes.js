const express = require("express");
const router = express.Router();

const {placeorder} = require("../services/order.services")


router.post("/",placeorder)

module.exports=router  