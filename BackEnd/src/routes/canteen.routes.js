const express = require("express");
const router = express.Router();
const {create,getcanteens,getcanteen,deletecanteen} = require("../services/canteen.services")


router.post("/", create)
router.get("/", getcanteens)
router.get("/:id",getcanteen)
router.delete("/:id",deletecanteen)

module.exports=router