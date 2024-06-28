const express = require("express");
const router = express.Router();
const {getallusers,getuser,updateuser} = require("../services/user.services")



router.get("/",getallusers)
router.get("/:id",getuser)
router.get("/:id",updateuser)


module.exports=router



