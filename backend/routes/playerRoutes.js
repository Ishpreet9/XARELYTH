const express = require("express");
const {
  getUsers,
  selectCharacter,
} = require("../controllers/playerController");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/users", getUsers); // GET /api/users
router.post("/select-character", auth, selectCharacter); // POST /api/select-character

module.exports = router;
