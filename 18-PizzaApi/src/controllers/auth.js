"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// Authentication Controller:

const Token = require("../models/token");
const User = require("../models/user");
const passwordEncrypt = require("../helpers/passwordEncrypt");

module.exports = {
  login: async (req, res) => {
    /*
            #swagger.tags = ["Authentication"]
            #swagger.summary = "Login"
            #swagger.description = 'Login with username (or email) and password for get simpleToken and JWT'
            #swagger.parameters["body"] = {
                in: "body",
                required: true,
                schema: {
                    "username": "test",
                    "password": "aA?123456",
                }
            }
        */
    const { username, email, password } = req.body;
    if (!((username || email) && password)) {
      res.errorStatusCode = 401;
      throw new Error("username/email and password are required");
    }
    const user = await User.findOne({ $or: [{ username }, { email }] });
    if (user?.password !== passwordEncrypt(password)) {
      res.errorStatusCode = 401;
      throw new Error("incorrect username/email or password.");
    }
    if (!user.isActive) {
      res.errorStatusCode = 401;
      throw new Error("This account is not active.");
    }

    let tokenData = await Token.findOne({ userId: user.id });
    if (!tokenData) {
      tokenData = await Token.create({
        userId: user.id,
        token: passwordEncrypt(user.id + Date.now()),
      });
    }
    res.send({
      error: false,
      token: tokenData.token,
      user,
    });
  },

  // CRUD:

  logout: async (req, res) => {
    /*
            #swagger.tags = ["Tokens"]
            #swagger.summary = "Create Token"
        */

    const auth = req.headers?.authorization; //"Token token"
    const tokenKey = auth ? auth.split(" ") : null; // [ "Token", tokenKey]
    const result = await Token.deleteOne({ token: tokenKey });

    res.send({
      error: false,
      message: "Token deleted. Logout was OK.",
      result,
    });
  },
};

