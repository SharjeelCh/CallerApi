const express = require("express");
const { registerUser, loginUser, getData } = require("../Controllers/userController");
const Router = express.Router();
const validateToken=require("../validateUserToken")
Router.post("/register",registerUser);
Router.post("/login", loginUser);
Router.get("/current",validateToken,getData);

module.exports=Router;