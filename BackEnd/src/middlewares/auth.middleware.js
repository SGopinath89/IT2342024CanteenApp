const jwt = require("jsonwebtoken");
const usermodule = require("../models/user.model");
const canteenservices = require("../services/canteen.services");

const verifyToken = async (req, res, next) => {
 
  const token = req.cookies["authorization"];

  if (!token) {
    return res.status(403).send("Access denied. No token provided.");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await usermodule.findById(decoded.id);

    req.user = user;
    next();
  } catch (err) {
    res.status(401).send(err);
  }
};
const checkUserType = (requiredTypes) => {
  return (req, res, next) => {
    verifyToken(req, res, () => {
      if (!requiredTypes.includes(req.user.usertype)) {
        return res.status(403).send("Access denied. Insufficient permissions.");
      }
      next();
    });
  };
};
const canteenAdminProtect = async (req, res, next) => {
  if (!req.user.usertype || req.user.usertype !== "staff") {
    return res.status(403).json({
      user: {
        id: req.user._id,
        usertype: req.user.usertype,
      },
      message:
        "You have to be an admin of the canteeen to access this resource",
    });
  }
  const { Canteenid } = req.body;
  console.log(req.body);
  const userId = req.user._id;
  const isCanteenAdmin = await canteenservices.checkAdmin(Canteenid, userId);
  if (!isCanteenAdmin) {
    return res.status(403).json({
      user: {
        id: req.user._id,
        usertype: req.user.usertype,
      },
      message:
        "You have to be an admin of the canteeen to access this resource",
    });
  }
  next();
};
module.exports = {
  verifyToken,
  checkUserType,
  canteenAdminProtect,
};