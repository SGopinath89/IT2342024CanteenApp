const express = require("express");
const router = express.Router();

const {placeorder,updateorder,deleteorder,displayorders,displayorder} = require("../services/order.services")


router.post("/",placeorder)
router.put("/:id",updateorder)
router.delete("/:id",deleteorder)
router.get("/",displayorders)
router.get("/:id",displayorder)

module.exports=router  