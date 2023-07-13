const Message = require("../models/Message.js");
const express = require("express");
const router = express.Router();

//! get all Message
router.get("/get-all", async (req, res) => {
  try {
    const messages = await Message.find();
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json(error);
  }
});

//! create
router.post("/add-message", async (req, res) => {
  try {
    const newMessage = new Message(req.body);
    await newMessage.save();
    res.status(200).json("Item added successfully.");
  } catch (error) {
    res.status(500).json(error);
  }
});



module.exports = router;
