const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const authRoutes= require("./routes/authRoutes")
const lobbyRoutes = require("./routes/lobby");
const profileRoutes = require("./routes/profile");
const selectCharacterRoute = require("./routes/selectCharacter");

dotenv.config();

connectDB();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Game API" });
});

app.use("/lobby", lobbyRoutes);
app.use("/profile", profileRoutes);
app.use("/select-character", selectCharacterRoute);
app.use('/',authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
