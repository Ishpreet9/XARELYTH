const express = require("express");
const { getLobby } = require("../controllers/lobbyController");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", auth, getLobby); // GET /api/lobby

module.exports = router;
