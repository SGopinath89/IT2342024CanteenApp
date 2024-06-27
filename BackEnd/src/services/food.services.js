const foodmodel = require("../models/food.model");

const addfood = async(req,res) => {
    try {
      const { foodname, price, availableTime, imageurl } = req.body;
      const canteenid = req.params.id;
      //const applied = await canteenmodel.findById(canteenid);
      //const appliedcanteenid = applied._id;
      //validation part
      if (!foodname || !price || !availableTime){
        return res
          .status(500)
          .send({ success: false, message: "Please Provide Fields" });
      }
  
      const newfood = new foodmodel({
        foodname,
        price,
        Canteenid: canteenid,
        availableTime,
        imageurl,
      });
  
      await newfood.save();
  
      res.status(200).send({
        success: true,
        message: "Food Added Applied Canteen Successfully",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const displayfoods = async (req, res) => {
    try {
      const food = await foodmodel.find();
      if (!food) {
        res.status(404).send({ success: false, message: "foods not found" });
      }
      res.status(200).json(food);
    } catch (err) {
      console.log(err);
    }
  };

  module.exports={
    addfood,
    displayfoods
  };