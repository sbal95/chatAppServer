const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    username: { type: String, require: true },
    isOnline: { type: Boolean, require: true}
  },
  { timestamps: true }
);

const User = mongoose.model("users", UserSchema);
module.exports = User;
