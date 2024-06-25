const express = require("express");
const app = express();
const { PORT } = require("./utils/config");
const connectDB = require("./database/config");
const dotenv = require('dotenv');
const authroutes = require('./routes/auth.routes')

dotenv.config();
connectDB();

app.use("/auth",authroutes)

app.listen(PORT, () => {
  console.log("API is running on port", PORT);
});
