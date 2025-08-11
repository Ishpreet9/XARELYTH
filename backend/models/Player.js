const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const PlayerSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    minlength: 3,
    maxlength: 15,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    select: true, // Don't return password in queries
    },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

PlayerSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Compare password for login
PlayerSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("Player", PlayerSchema);
