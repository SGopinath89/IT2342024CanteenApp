const { request } = require("express");
const paymentmodel = require("../models/payment.model");

const pay = async (req, res) => {
    try {
      const orderid = req.params.id;
      const { cardnumber, paymenttype } = req.body;
      let status = "";
      if (!orderid || !cardnumber || !paymenttype) {
        status = "Payment Failed";
      } else {
        status = "Payment successful";
      }
  
      const order = await ordermodel.findById(orderid);
      const amount = order.payment;
      const newpayment = new paymentmodel({
        orderid,
        paymentamount: amount,
        cardnumber,
        paymenttype,
        paymentstatus: status,
      });
      await newpayment.save();
      res.status(200).json(newpayment);
      //await newpayment.save();
    } catch (err) {
      console.log(err);
    }
  };
  

  module.exports = {
    pay
    
  }