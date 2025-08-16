const express = require("express");
const Player = require("../models/Player");
const jwt = require("jsonwebtoken");
const verifyOtp = require("../controllers/auth/verifyOtpController");
const authController = require("../controllers/auth/authController");

const router = express.Router();

router.post("/verify-otp", verifyOtp);
router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/logout", authController.logout);
router.post("/refresh-token", (req, res) => {
  const token = req.cookies.refreshToken;
  if (!token) return res.status(401).json({ message: "No refresh token" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET);

    const newAccessToken = jwt.sign(
      { id: decoded.id },
      process.env.JWT_SECRET,
      { expiresIn: "15m" }
    );

    res.json({ accessToken: newAccessToken });
  } catch (err) {
    return res
      .status(403)
      .json({ message: "Invalid or expired refresh token" });
  }
});

module.exports = router;
