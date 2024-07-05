const jwt = require('jsonwebtoken');
const usermodule = require("../models/user.model");

const verifyToken = async (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).send('Access denied. No token provided.');
  }

  try {
    const decoded = jwt.verify(token.split(' ')[1], "myjwtsecreat");

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
        return res.status(403).send('Access denied. Insufficient permissions.');
      }
      next();
    });
  };
};

module.exports = {
  verifyToken,
  checkUserType
};