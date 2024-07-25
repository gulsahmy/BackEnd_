"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
/*
    $ npm i express dotenv mongoose@latest express-async-errors
    $ npm i cookie-session
    $ npm i jsonwebtoken
*/

const express = require("express");
const { dbConnection, mongoose } = require("./src/configs/dbConnection");
const app = express();

/* ------------------------------------------------------- */

// continue from here...
// envVariables to process.env:
require("dotenv").config();
const PORT = process.env?.PORT || 8000;

// asyncErrors to errorHandler:
require("express-async-errors");

/* ------------------------------------------------------- */
//db connection
dbConnection();

//body parser
app.use(express.json());

//httpOnly:true XSS Cross Site Scripting
app.use(
  require("cookie-session")({
    secret: process.env.SECRET_KEY,
    // cookie: {
    //     secure: !(process.env.NODE_ENV=="development"),
    //     httpOnly: false,
    //     maxAge: 24 * 60 * 60 * 1000,
    //   }
  }),
);
/* ------------------------------------------------------------------- *

const morgan = require('morgan')

// app.use(morgan('tiny'))
// app.use(morgan('short'))
// app.use(morgan('dev'))
// app.use(morgan('common'))
// app.use(morgan('combined'))
// Custom Log:
// app.use(morgan('TIME=":date[iso]" - URL=":url" - Method=":method" - IP=":remote-addr" - Ref=":referrer" - Status=":status" - Sign=":user-agent" (:response-time[digits] ms)'))

// Write to File:
// const fs = require('node:fs')
// app.use(morgan('combined', {
//   stream: fs.createWriteStream('./access.log', { flags: 'a+' })
// }))


// Write to File: Day by day:
const fs = require('node:fs')
const now = new Date()
// console.log(now, typeof now)
const today = now.toISOString().split('T')[0]
console.log(today, typeof today)
app.use(morgan('combined', {
  stream: fs.createWriteStream(`./logs/${today}.log`, { flags: 'a+' })
}))


/* ------------------------------------------------------------------- */
// DOCUMENTATION:
// $ npm i swagger-autogen
// $ npm i swagger-ui-express
// $ npm i redoc-express





/* ------------------------------------------------------------------- */
// Morgan Logger:

app.use(require("./src/middlewares/logger"))

// Authentication Middleware:
app.use(require('./src/middlewares/authentication'))


// res.getModelList():
app.use(require("./src/middlewares/findSearchSortPage"));

// HomePath:
app.all("/", (req, res) => {
  res.send({
    error: false,
    message: "Welcome to PERSONNEL API",
    // session: req.session,
    // isLogin: req.isLogin,
    user: req.user
  });
});

// /auth
app.use('/auth', require('./src/routes/auth.router'));

// /tokens
app.use("/tokens", require("./src/routes/token.router"));

// /departments
app.use("/departments", require("./src/routes/department.router"));

// /personnels
app.use("/personnels", require("./src/routes/personnel.router"));

//not found routes
app.all("*", async (req, res) => {
  res.status(404).send({
    error: true,
    message: "Route not available",
  });
});

// errorHandler:
app.use(require("./src/middlewares/errorHandler"));

// RUN SERVER:
app.listen(PORT, () => console.log("http://127.0.0.1:" + PORT));

/* ------------------------------------------------------- */
// Syncronization (must be in commentLine):
// require('./src/helpers/sync')()

// if (process.env.NODE_ENV == "development") {
//   return;
//   require("./src/helpers/dataCreate")()
//     .then((res) => console.log("Data synched"))
//     .catch((err) => console.error("Data could not synched"));
// }

