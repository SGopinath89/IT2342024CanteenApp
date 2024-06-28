const express = require("express");
const router = express.Router();
const {getallusers,getuser} = require("../services/user.services")



router.get("/",getallusers)
router.get("/:id",getuser)


module.exports=router



