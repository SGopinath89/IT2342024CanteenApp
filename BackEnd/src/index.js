const express = require("express");
const app = express();
const { PORT } = require("./utils/config");
const connectDB = require("./database/config");
const dotenv = require('dotenv');
const authroutes = require('./routes/auth.routes')
const userroutes = require('./routes/user.route')
const foodroutes = require('./routes/food.routes')

const bodyParser = require("body-parser")

app.use(bodyParser.json())

dotenv.config();
connectDB();

app.use("/auth",authroutes)
app.use("/user",userroutes)
app.use("/foods",foodroutes)

app.listen(PORT, () => {
  console.log("API is running on port", PORT);
});
