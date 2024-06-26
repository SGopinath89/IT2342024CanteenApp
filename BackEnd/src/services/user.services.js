const usermodel = require("../models/user.model");

  const getallusers = async (req, res) => {
    try {
      const user = await usermodel.find();
      if (!user) {
        return res
          .status(404)
          .send({ success: false, message: "User Not Found" });
      }
      user.password = undefined;
      res
        .status(200)
        .send({ success: true, message: "User Data Get Successfully", user });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error in get user API",
      });
    }
  };


  module.exports={
    getallusers

  }