const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateUserToken = asyncHandler(
  asyncHandler(async (req, res, next) => {
    let token;
    let header;
    header = req.headers.Authorization || req.headers.authorization;
    if (header && header.startsWith("Bearer")) {
      token = header.split(" ")[1];
      jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
        if (err) {
          res.status(401);
          throw new Error("Not authorized, token failed");
        }
        req.user = decoded;
        next();
      });
    }
    if (!token) {
      res.status(401);
      throw new Error("Not authorized, no token");
    }
  })
);

module.exports=validateUserToken;
