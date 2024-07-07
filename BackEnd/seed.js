const express = require("express");
const bcrypt = require("bcrypt");
const usermodel = require("./src/models/user.model.js");
async function mainadminaccount() {
  try {
    const username = await usermodel.findOne({ username: "admin" });
    if (!username) {
      var salt = bcrypt.genSaltSync(10);
      const hashpassword = await bcrypt.hash("admin", salt);
      const user = await usermodel.create({
        registrationnumber: "admin",
        username: "admin",
        password: hashpassword,
        telephone: "0147258456",
        usertype: "admin",
      });
      await user.save();
      console.log("Admin account created");
    } else {
      console.log("Admin account Already Exists");
    }
  } catch (err) {
    console.log("error");
  }
}
async function appliedadminaccount() {
  try {
    const username = await usermodel.findOne({ username: "appliedadmin" });
    if (!username) {
      var salt = bcrypt.genSaltSync(10);
      const hashpassword = await bcrypt.hash("appliedadmin", salt);
      const user = await usermodel.create({
        registrationnumber: "appliedadmin",
        username: "appliedadmin",
        password: hashpassword,
        telephone: "0147258456",
        usertype: "staff",
      });
      await user.save();
      console.log("Applied admin account created");
    } else {
      console.log("Applied admin account Already Exists");
    }
  } catch (err) {
    console.log("error");
  }
}
async function bsadminaccount() {
  try {
    const username = await usermodel.findOne({ username: "bsadmin" });
    if (!username) {
      var salt = bcrypt.genSaltSync(10);
      const hashpassword = await bcrypt.hash("bsadmin", salt);
      const user = await usermodel.create({
        registrationnumber: "bsadmin",
        username: "bsadmin",
        password: hashpassword,
        telephone: "0147258456",
        usertype: "staff",
      });
      await user.save();
      console.log("BS admin account created");
    } else {
      console.log("BS admin account Already Exists");
    }
  } catch (err) {
    console.log("error");
  }
}
async function boysadminaccount() {
  try {
    const username = await usermodel.findOne({ username: "boysadmin" });
    if (!username) {
      var salt = bcrypt.genSaltSync(10);
      const hashpassword = await bcrypt.hash("boysadmin", salt);
      const user = await usermodel.create({
        registrationnumber: "boysadmin",
        username: "boysadmin",
        password: hashpassword,
        telephone: "0147258456",
        usertype: "staff",
      });
      await user.save();
      console.log("Boys admin account created");
    } else {
      console.log("Boys admin account Already Exists");
    }
  } catch (err) {
    console.log(err);
  }
}
module.exports = {
  mainadminaccount,
  appliedadminaccount,
  bsadminaccount,
  boysadminaccount,
};