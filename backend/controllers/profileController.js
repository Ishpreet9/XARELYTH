const Player = require("../models/Player");

// GET /api/profile
const getProfile = async (req, res) => {
  try {
    const player = await Player.findById(req.user.id).select("-password");
    res.json(player);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getProfile };
