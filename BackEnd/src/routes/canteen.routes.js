const express = require("express");
const router = express.Router();
const {create,getcanteens,getcanteen} = require("../services/canteen.services")


router.post("/", create)
router.get("/", getcanteens)
router.get("/:id",getcanteen)


module.exports=router