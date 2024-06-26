const express = require("express");
const router = express.Router();
const {addfood,displayfoods} = require("../services/food.services")


router.post("/", addfood) 
router.get("/", displayfoods)

module.exports=router