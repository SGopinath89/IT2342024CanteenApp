const express = require("express");
const router = express.Router();
const {getallusers,getuser,updateuser} = require("../services/user.services")
const {verifyToken,checkUserType} = require("../middlewares/auth.middleware")

router.get("/",verifyToken,checkUserType('admin'),getallusers)
router.get("/:id",verifyToken,getuser)
router.get("/:id",verifyToken,updateuser)


module.exports=router



