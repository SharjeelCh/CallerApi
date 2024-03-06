const express = require("express");
const { registerUser, loginUser, getData } = require("../Controllers/userController");
const Router = express.Router();

Router.post("/register",registerUser);
Router.post("/login", loginUser);
Router.get("/current",getData);

module.exports=Router;