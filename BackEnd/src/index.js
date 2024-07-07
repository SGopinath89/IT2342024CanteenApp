const express = require("express");
const app = express();
const { PORT } = require("./utils/config");
const connectDB = require("./database/config");
const dotenv = require("dotenv");
const authroutes = require("./routes/auth.routes");
const userroutes = require("./routes/user.route");
const foodroutes = require("./routes/food.routes");
const canteenroutes = require("./routes/canteen.routes");
const orderroutes = require("./routes/order.routes");
const payamentroutes = require("./routes/payment.routes");
const cookieParser = require("cookie-parser");
const {
  mainadminaccount,
  appliedadminaccount,
  bsadminaccount,
  boysadminaccount,
} = require("../seed");
const bodyParser = require("body-parser");
require("dotenv").config();

app.use(bodyParser.json());
app.use(cookieParser());
dotenv.config();
connectDB();

mainadminaccount();
appliedadminaccount();
bsadminaccount();
boysadminaccount();

app.use("/api1/auth", authroutes);
app.use("/api1/user", userroutes);
app.use("/api1/foods", foodroutes);
app.use("/api1/canteen", canteenroutes);
app.use("/api1/orders", orderroutes);
app.use("/api1/payments", payamentroutes);

app.listen(PORT, () => {
  console.log("API is running on port", PORT);
});