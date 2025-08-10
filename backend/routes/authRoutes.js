const express = require("express");
const Player = require("../models/Player");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const {username, email, password } = req.body;
    const existingPlayer = await Player.findOne({ email });
    if (existingPlayer) {
      return res.status(400).json({ message: "Player already exists" });
    }

    const player = await Player.create({username, email, password });

    const token = jwt.sign({ id: player._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(201).json({
      message: "Player registered successfully",
      token,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

//Login existing player ....@route   POST /api/auth/login
router.post("/login", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Ensure at least one of email/username is provided
    if (!email && !username) {
      return res
        .status(400)
        .json({ message: "Please provide email or username" });
    }

    // Find player by email or username
    let player;
    if (email) {
      player = await Player.findOne({ email });
    } else {
      player = await Player.findOne({ username });
    }

    if (!player) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Match password
    const isMatch = await player.matchPassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT
    const token = jwt.sign({ id: player._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({
      message: "Login successful",
      token,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});


module.exports = router;
