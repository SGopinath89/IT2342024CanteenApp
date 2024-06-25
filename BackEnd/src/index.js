const express = require("express");
const app = express();
const { PORT } = require("./utils/config");
const connectDB = require("./database/config");
const dotenv = require('dotenv');
const foodroutes = require('./routes/food.routes')
const orderroutes = require("./routes/order.routes")
const canteenroutes = require('./routes/canteen.routes')

dotenv.config();

connectDB();

app.use("/canteen",canteenroutes)
app.use("/foods",foodroutes)
app.use("/orders",orderroutes)

app.listen(PORT, () => {
  console.log("API is running on port", PORT);
});
