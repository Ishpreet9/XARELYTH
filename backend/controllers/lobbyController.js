const Player = require("../models/Player");

// GET /api/lobby
const getLobby = async (req, res) => {
  try {
    const player = await Player.findById(req.user.id).select("-password");
    if (!player.username) {
      player.username = player.email.split("@")[0];
    }

    res.json({
      message: `Welcome to your lobby, ${player.username}!`,
      player,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getLobby };
