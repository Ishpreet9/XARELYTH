const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const Player = require("../models/Player");

// GET /lobby
router.get("/", auth, async (req, res) => {
  try {
    const player = await Player.findById(req.user.id).select("-password");
    if (!player.username)
      player.username= player.email.split("@")[0];
    res.json({
      message: `Welcome to your lobby, ${player.username}!`,
      player,
    });
  } catch (err) {
    console.log(req)
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
