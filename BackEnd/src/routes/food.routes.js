const express = require("express");
const router = express.Router();
const {addfood,displayfoods,displayfood,deletefood,updatefood} = require("../services/food.services")


router.post("/", addfood) 
router.get("/", displayfoods)
router.get("/:id", displayfood)
router.delete("/:id", deletefood)
router.put("/:id", updatefood)

module.exports=router