const express = require("express");
const app = express();
const { PORT } = require("./utils/config");
const connectDB = require("./database/config");
const dotenv = require('dotenv');
const authroutes = require('./routes/auth.routes')
const userroutes = require('./routes/user.route')
const foodroutes = require('./routes/food.routes')
const canteenroutes = require('./routes/canteen.routes')
const orderroutes = require("./routes/order.routes")
const payamentroutes = require('./routes/payment.routes')
const {
  mainadminaccount,
  appliedadminaccount,
  bsadminaccount,
  boysadminaccount,
} = require("../seed");
const bodyParser = require("body-parser")
require('dotenv').config();

app.use(bodyParser.json())

dotenv.config();
connectDB();

mainadminaccount();
appliedadminaccount();
bsadminaccount();
boysadminaccount();

app.use("/api1/auth", authroutes);
app.use("/user",userroutes)
app.use("/foods",foodroutes)
app.use("/canteen",canteenroutes)
app.use("/orders",orderroutes)
app.use("/payments",payamentroutes)

app.listen(PORT, () => {
  console.log("API is running on port", PORT);
});
