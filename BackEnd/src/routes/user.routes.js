const express = require("express");
const router = express.Router();
const {getallusers,getuser,updateuser,deleteuser} = require("../services/user.services")
const {verifyToken,checkUserType} = require("../middlewares/auth.middleware")

router.get("/",verifyToken,checkUserType('admin'),getallusers)
router.get("/:id",verifyToken,getuser)
router.put("/:id", verifyToken, updateuser);
router.delete("/:id", verifyToken, deleteuser);


module.exports=router



