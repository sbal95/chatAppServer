const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const logger = require("morgan");
const port = process.env.PORT || 5000;

// routes
const userRoute = require("./routes/users.js");
const messageRoute = require("./routes/message.js");


dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    throw error;
  }
};

// middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(cors());

app.use("/api/users", userRoute);
app.use("/api/messages", messageRoute);

app.listen(port, () => {
  connect();
  console.log(`Example app listening on port ${port}`);
});
