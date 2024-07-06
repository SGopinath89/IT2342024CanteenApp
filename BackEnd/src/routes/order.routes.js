const express = require("express");
const router = express.Router();

const {placeorder,updateorder,deleteorder,displayorders,displayorder} = require("../services/order.services")
const {verifyToken,canteenAdminProtect} = require("../middlewares/auth.middleware")

router.post("/",verifyToken,placeorder)
router.put("/:id",verifyToken,updateorder)
router.delete("/:id",verifyToken,deleteorder)
router.get("/",verifyToken,canteenAdminProtect,displayorders)
router.get("/:id",verifyToken,displayorder)


module.exports=router  