const express = require("express");
const router = express.Router();
const {create} = require("../services/canteen.services")


router.post("/", create)


module.exports=router