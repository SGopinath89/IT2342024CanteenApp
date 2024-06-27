const express = require("express");
const router = express.Router();
const {getallusers} = require("../services/user.services")



router.get("/",getallusers)


module.exports=router



