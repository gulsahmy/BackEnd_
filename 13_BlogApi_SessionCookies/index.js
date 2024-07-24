"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
//Accept JSON:
app.use(express.json())

// DB CONNECTION:
// const dbConnection = require('./src/dbConnection')
// dbConnection()
require('./src/dbConnection')()

// Catch error from async:
require('express-async-errors')


app.all('/', (req, res) => {
    res.send('WELCOME TO BLOG API')
})
/* ------------------------------------------------------- */
// Routes:

app.use('/user', require('./src/routes/userRouter'))
app.use('/blog', require('./src/routes/blogRouter'))
app.use('/auth', require('./src/routes/authRouter'))

/* ------------------------------------------------------- */


// Catch Errors:
app.use(require('./src/errorHandler'))

/* ------------------------------------------------------- */

app.listen(PORT, () => console.log('Running: http://127.0.0.1:' + PORT))