const ordermodel = require("../models/order.model");

const placeorder =async (req, res) => {
    try {
      const { canteenid, cart } = req.body;
      //validation
      if (!canteenid || !cart) {
        return res.status(500).send({
          success: false,
          message: "Please food Cart",
        });
      }
      let total = 0;
      //calculate
      cart.map((i) => {
        total = total + i.price * i.count;
      });
  
      const neworder = new ordermodel({
        canteenid,
        foods: cart,
        payment: total,
        buyer: req.body.id,
      });
      await neworder.save();
      res
        .status(201)
        .send({ success: true, message: "Order Placed Successfully", neworder });
    } catch (err) {
      console.log(err);
    }
  };

  module.exports={
    placeorder,
  }