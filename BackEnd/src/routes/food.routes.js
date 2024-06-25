const express = require("express");
const router = express.Router();
const {addfood} = require("../services/food.services")


router.post("/", addfood) 

module.exports=router