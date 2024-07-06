const usermodel = require("../models/user.model.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { registrationnumber, username, password, telephone } = req.body;
    //validate
    if (!registrationnumber || !username || !password || !telephone) {
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
      usertype: "user",
    });

    const { password: pass, usertype, ...rest } = user;

    res
      .status(201)
      .send({ success: true, message: "Successfully Registered", rest });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send({ sucess: false, message: "error in registered API", err });
  }
};

const login = async (req, res) => {
  try {
    const { registrationnumber, password } = req.body;
    // Validate input
    if (!registrationnumber || !password) {
      return res.status(400).send({
        success: false,
        message: "Please provide registration number and password",
      });
    }

    // Check if user exists
    const user = await usermodel.findOne({ registrationnumber });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    // Check if password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Generate JWT
    const token = jwt.sign(
      { id: user._id, usertype: user.usertype },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.status(200).send({
      success: true,
      message: "Login successful",
      token,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      success: false,
      message: "Error in login API",
      err,
    });
  }
};

module.exports = {
  register,
  login,
};