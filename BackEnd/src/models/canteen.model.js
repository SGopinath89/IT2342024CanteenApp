const mongoose = require("mongoose");

//schema
const canteenSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "canteen name required"],
    },
    opentime: {
      type: String,
    },
    closetime: {
      type: String,
    },
    description: {
      type: String,
    },
    oderid:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
  }],
    admin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
      required: true,
    },
  },
  { timestamps: true }
);

const canteenmodel = mongoose.model("canteen", canteenSchema);

module.exports = canteenmodel;
