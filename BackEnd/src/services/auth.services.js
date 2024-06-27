const usermodel = require("../models/user.model.js");
const bcrypt = require("bcryptjs");


const register = async (req, res) => {
  try {
    const { registrationnumber, username, password, telephone, usertype } =
      req.body;
    //validate
    if (
      !registrationnumber||
      !username ||
      !password ||
      !telephone ||
      !usertype
    ) {
      return res
        .status(500)
        .send({ success: false, message: "Please Provide All Fields" });
    }
    const checkexistsuser = await usermodel.findOne({ registrationnumber });
    if (checkexistsuser) {
      return res.status(500).send({
        success: false,
        message: "You are already registered please login",
      });
    }
    //hashing password
    var salt = bcrypt.genSaltSync(10);
    const hashpassword = await bcrypt.hash(password, salt);
    //create new user
    const user = await usermodel.create({
      registrationnumber,
      username,
      password: hashpassword,
      telephone,
      usertype,
    });

    res
      .status(201)
      .send({ success: true, message: "Successfully Registered", user });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send({ sucess: false, message: "error in registered API", err });
  }
};

module.exports = {
    register,
  };
  