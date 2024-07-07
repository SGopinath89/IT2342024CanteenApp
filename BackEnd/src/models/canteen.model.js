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
    oderid: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "order",
      },
    ],
    adminid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { timestamps: true }
);
const canteenmodel = mongoose.model("canteen", canteenSchema);
module.exports = canteenmodel;