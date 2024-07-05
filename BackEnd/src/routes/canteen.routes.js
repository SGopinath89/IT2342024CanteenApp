const express = require("express");
const router = express.Router();
const {create,getcanteens,getcanteen,deletecanteen,updatecanteen} = require("../services/canteen.services")
const {verifyToken} = require("../middlewares/auth.middleware")

router.post("/",verifyToken, create)
router.get("/",verifyToken, getcanteens)
router.get("/:id",verifyToken,getcanteen)
router.delete("/:id",verifyToken,deletecanteen)
router.put("/:id",verifyToken,updatecanteen)

module.exports=router