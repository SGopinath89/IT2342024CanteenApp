const canteenmodel = require("../models/canteen.model");
const ordermodel = require("../models/order.model");
const mongoose = require("mongoose");

const placeorder = async (req, res) => {
  try {
    const { canteenid, foods, payment, buyer } = req.body;
    //validation
    if (!canteenid || !foods || !payment || !buyer) {
      return res.status(500).send({
        success: false,
        message: "Please food Cart",
      });
    }
    const neworder = new ordermodel({
      canteenid: new mongoose.Types.ObjectId(canteenid),
      foods,
      payment,
      buyer: new mongoose.Types.ObjectId(buyer),
    });
    await neworder.save();
    res
      .status(201)
      .send({ success: true, message: "Order Placed Successfully", neworder });
  } catch (err) {
    console.log(err);
  }
};

//Update Order
const updateorder = async (req, res) => {
  try {
    const orderid = req.params.id;
    if (!orderid) {
      return res
        .status(500)
        .send({ success: false, message: "Order id Not found" });
    }
    const findorder = ordermodel.findById(orderid);
    if (!findorder) {
      return res
        .status(500)
        .send({ success: false, message: "Order id Not found" });
    }
    const { canteenid, cart } = req.body;
    //validation
    if (!canteenid || !cart) {
      return res.status(500).send({
        success: false,
        message: "Please fill food Cart",
      });
    }
    let total = 0;
    //calculate
    cart.map((i) => {
      total = total + i.price * i.count;
    });

    const updateorder = await ordermodel.findByIdAndUpdate(
      orderid,
      {
        canteenid,
        foods: cart,
        payment: total,
        buyer: req.body.id,
      },
      { new: true }
    );

    res
      .status(201)
      .send({ success: true, message: "Order updated Successfully" });
  } catch (err) {
    console.log(err);
  }
};

//Delete Order
const deleteorder = async (req, res) => {
  try {
    const id = req.params.id;
    const findorder = await ordermodel.findByIdAndDelete(id);
    if (!findorder) {
      res.status(404).send({ success: false, message: "Order Not Found" });
    }
    res
      .status(404)
      .send({ success: false, message: "Order delete Successfully" });
  } catch (err) {
    console.log(err);
  }
};

const displayorders = async (req, res) => {
  try {
    // Convert string to ObjectId
    const canteen = await canteenmodel.aggregate([
      { $match: { adminid: new mongoose.Types.ObjectId(req.user.id) } },
    ]);
    const canteenId = canteen[0]._id;
    const orders = await ordermodel.aggregate([
      { $match: { canteenid: canteenId } },
    ]);

    if (!orders) {
      res.status(404).send({ success: true, message: "orders not found" });
    }
    res.status(200).json(orders);
  } catch (err) {
    console.log(err);
  }
};

const displayorder = async (req, res) => {
  const id = req.params.id;
  try {
    // Convert string to ObjectId
    const canteen = await canteenmodel.aggregate([
      { $match: { admin: req.user.id } },
    ]);
    const orders = await ordermodel.findById(id);
    if (!orders) {
      res.status(404).send({ success: true, message: "orders not found" });
    }
    res.status(200).json(orders);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  placeorder,
  updateorder,
  deleteorder,
  displayorders,
  displayorder,
};