const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { getUserName } = require("../controllers/userController");

router.get("/player", auth, getUserName);

module.exports = router;
