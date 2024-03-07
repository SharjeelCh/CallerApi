const asyncHandler = require("express-async-handler");
const User = require("../Modals/userModal");
const bcrypt = require("bcrypt");
const jwt =require("jsonwebtoken")

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
    res.status(201).json({
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
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("Please fill all the fields");
  }
  const currentUser = await User.findOne({ email });
  if (currentUser && (await bcrypt.compare(password, currentUser.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: currentUser.username,
          email: currentUser.email,
          id: currentUser._id,
        },
      },
      process.env.TOKEN_SECRET,
      { expiresIn: "20m" }
    );
    res.status(200).json({ accessToken });
  } else {
    res.status(400);
    throw new Error("Invalid email or password");
  }
});

const getData = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

module.exports = { registerUser, loginUser, getData };
