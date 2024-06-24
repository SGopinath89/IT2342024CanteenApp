const mongoose = require("mongoose");
const scheema = mongoose.Schema;

//schema for payment
const paymentschema = new mongoose.Schema(
  {
    orderid: {
      type: scheema.Types.ObjectId,
      ref: "order",
    },
    paymentamount: {
      type: Number,
      required: true,
    },
    paymentstatus: {
      type: String,
    },
  },
  { timestamps: true }
);

const paymentmodel = mongoose.model("payment", paymentschema);

module.exports = paymentmodel;