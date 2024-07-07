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

  const getuser = async (req, res) => {
    try {
      //find user
      const id = req.params.id;
      const user = await usermodel.findById(id);
      if (!user) {
        return res
          .status(404)
          .send({ success: false, message: "User Not Found" });
      }
      //hide password
      user.password = undefined;
      //response
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
  const updateuser = async (req, res) => {
    try {
      const userid = req.params.id;
      if (!userid) {
        return res.status(500).send({
          success: false,
          message: "No food id was found, Provide food id",
        });
      }
      const user = await foodmodel.findById(userid);
      if (!user) {
        return res
          .status(404)
          .send({ success: false, message: "User is Not Found" });
      }
      const { registrationnumber,username, telephone} = req.body;
  
     await foodmodel.findByIdAndUpdate(
        userid,
        { registrationnumber,username, telephone },
        { new: true }
      );
      res
        .status(200)
        .send({ success: true, message: " User was updated Successfully" });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteuser=async (req, res) => {
    try {
      await usermodel.findByIdAndDelete(req.params.id);
      return res
        .status(200)
        .send({ success: true, message: "Account Delete Successfully" });
    } catch (error) {
      res
        .status(500)
        .send({ success: false, message: "Error in Delete Profile", error });
    }
  };
  module.exports={
    getallusers,
    getuser,
    updateuser,
    deleteuser

  }