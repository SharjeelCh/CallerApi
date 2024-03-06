const asyncHandler = require("express-async-handler");
const User = require("../Modals/userModal");
const bcrypt = require("bcrypt");

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Please fill all the fields");
  }
  const checkAlreadyUser = await User.findOne({ email });
  if (checkAlreadyUser) {
    res.status(400);
    throw new Error("User already exists");
  }
  const hashedPasswrod = await bcrypt.hash(password, 10); // for security purpose we are hashing the password
  const newUser = await User.create({
    username,
    email,
   password: hashedPasswrod,
  });
  if (newUser) {
    res
      .status(201)
      .json({
        _id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User logged in successfully" });
});

const getData = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User data retrieved successfully" });
});

module.exports = { registerUser, loginUser, getData };
