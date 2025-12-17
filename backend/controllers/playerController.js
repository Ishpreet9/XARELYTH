const Player = require("../models/Player");

// GET /api/users
const getUsers = async (req, res) => {
  try {
    const players = await Player.find({}, "username email");
    res.json(players);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

const selectCharacter = async (req, res) => {
  try {
    res.json({ message: "Select your character!" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getUsers, selectCharacter };
