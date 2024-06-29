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

const bodyParser = require("body-parser")
require('dotenv').config();

app.use(bodyParser.json())

dotenv.config();
connectDB();

app.use("/auth",authroutes)
app.use("/user",userroutes)
app.use("/foods",foodroutes)
app.use("/canteen",canteenroutes)
app.use("/orders",orderroutes)

app.listen(PORT, () => {
  console.log("API is running on port", PORT);
});
