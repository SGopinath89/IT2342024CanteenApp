const express = require("express");
const router = express.Router();
const {getallusers} = require("../services/user.services")


//admin

router.get("/",getallusers)


// update 


module.exports=router



