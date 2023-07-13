const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema(
  {
    from: { type: String, require: true },
    to: { type: String, require: true},
    text : { type: String, require: true}
  },
  { timestamps: true }
);

const Message = mongoose.model("messages", MessageSchema);
module.exports = Message;
