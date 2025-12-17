const express = require("express");
const Player = require("../../models/Player");
const jwt = require("jsonwebtoken");
const sendEmail = require("../../config/nodeMailer");

async function login(req, res) {
  try {
    const { username, email, password } = req.body;

    // Require identifier and password
    if ((!email && !username) || !password) {
      return res.status(400).json({
        message: "Please provide email or username AND password",
      });
    }

    // Find player by email or username
    const query = [];
    if (email) query.push({ email });
    if (username) query.push({ username });

    const player = await Player.findOne({ $or: query }).select("+password");
    if (!player) {
      return res.status(404).json({ message: "Player not found" });
    }

    // OTP gate: must be verified
    if (!player.isVerified) {
      return res.status(403).json({
        message: "Account not verified. Please check your email for the OTP.",
      });
    }

    // Match password (uses your schema's matchPassword)
    const isMatch = await player.matchPassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Access token (short-lived)
    const accessToken = jwt.sign({ id: player._id }, process.env.JWT_SECRET, {
      expiresIn: "15m",
    });

    // Refresh token (httpOnly cookie)
    const refreshToken = jwt.sign(
      { id: player._id },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict", // change to 'lax' if your FE is on another domain
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.json({
      message: "Login successful",
      accessToken,
      // (optional) include minimal player info for FE convenience:
      // player: { id: player._id, username: player.username, email: player.email }
    });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ message: "Server error" });
  }
}

async function register(req, res) {
  try {
    const { username, email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    // Check if user already exists
    const existingPlayer = await Player.findOne({ email }) || await Player.findOne({ username });
    if (existingPlayer) {
      return res.status(400).json({ message: "Player already exists" });
    }

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Create new player with OTP
    const player = await Player.create({
      username: username || email.split("@")[0],
      email,
      password,
      otp,
      otpExpiry: Date.now() + 10 * 60 * 1000, // 10 minutes
    });

    // Send OTP email
    await sendEmail({
      to: email,
      subject: "Verify Your Game API Account 🎮",
      html: `
        <h2>Hi ${player.username},</h2>
        <p>Welcome to the Game API! Please verify your account using the OTP below:</p>
        <h1>${otp}</h1>
        <p>This OTP will expire in 10 minutes.</p>
      `,
    });

    res.status(201).json({
      message: "Player registered. Please check your email for the OTP.",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
}

async function logout(req, res) {
  try {
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // secure only in prod
      sameSite: "strict",
    });
    return res.json({ message: "Logged out successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
}

module.exports = { login, register, logout };
