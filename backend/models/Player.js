const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const PlayerSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    trim: true,
    minlength: 3,
    maxlength: 15,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    select: false, // Don't return password in queries
    },
  createdAt: {
    type: Date,
    default: Date.now,
  },

    isVerified: {
    type: Boolean,
    default: false,
  },
  otp: String,
  otpExpiry: Date,
});

PlayerSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

PlayerSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("Player", PlayerSchema);
