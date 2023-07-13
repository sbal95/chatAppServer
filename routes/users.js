const User = require("../models/User.js");
const express = require("express");
const router = express.Router();

//! get all User
router.get("/get-all", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

//! create
router.post("/add-user", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(200).json("Item added successfully.");
  } catch (error) {
    res.status(500).json(error);
  }
});

//! update
router.put("/update-user", async (req, res) => {
  try {
    await User.findOneAndUpdate({ _id: req.body.userId }, req.body);
    res.status(200).json("Item updated successfully.");
  } catch (error) {
    res.status(500).json(error);
  }
});

//! delete
router.delete("/delete-user", async (req, res) => {
  try {
    await User.findOneAndDelete({ _id: req.body.UserId });
    res.status(200).json("Item deleted successfully.");
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
