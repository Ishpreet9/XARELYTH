// routes/profile.js
const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const Player = require("../models/Player");

// GET /profile
router.get("/", auth, async (req, res) => {
  try {
    const player = await Player.findById(req.user.id).select("-password");
    res.json(player);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
