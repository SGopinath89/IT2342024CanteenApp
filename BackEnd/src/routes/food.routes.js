const express = require("express");
const router = express.Router();
const {addfood,displayfoods,displayfood,deletefood,updatefood} = require("../services/food.services")
const {verifyToken} = require("../middlewares/auth.middleware")

router.post("/",verifyToken, addfood) 
router.get("/",verifyToken, displayfoods)
router.get("/:id",verifyToken, displayfood)
router.delete("/:id",verifyToken, deletefood)
router.put("/:id",verifyToken, updatefood)

module.exports=router