const jwt = require("jsonwebtoken");
const Player = require("../../models/Player");

async function verifyOtp(req, res) {
  try {
    const { email, otp } = req.body;

    const player = await Player.findOne({ email });
    if (!player) {
      return res.status(400).json({ message: "Player not found" });
    }

    if (player.isVerified) {
      return res.status(400).json({ message: "Player already verified" });
    }

    if (player.otp !== otp || player.otpExpiry < Date.now()) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    // Mark as verified
    player.isVerified = true;
    player.otp = undefined;
    player.otpExpiry = undefined;
    await player.save();

    // Issue token
    const token = jwt.sign({ id: player._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({
      message: "Account verified successfully",
      token,
      player: {
        id: player._id,
        username: player.username,
        email: player.email,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
}

module.exports = verifyOtp;
