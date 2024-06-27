const express = require("express");
const router = express.Router();

const {placeorder,updateorder} = require("../services/order.services")


router.post("/",placeorder)
router.put("/:id",updateorder)

module.exports=router  