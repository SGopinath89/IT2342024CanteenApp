const express = require("express");
const app = express();
const { PORT } = require("./utils/config");
const connectDB = require("./database/config");
const dotenv = require('dotenv');

dotenv.config();

connectDB();

app.listen(PORT, () => {
  console.log("API is running on port", PORT);
});
