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


app.all('/', (req, res) => {
    res.send('WELCOME TO BLOG API')
})
/* ------------------------------------------------------- */





/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */

// continue from here...

// Catch Errors:
app.use(require('./src/errorHandler'))

/* ------------------------------------------------------- */

app.listen(PORT, () => console.log('Running: http://127.0.0.1:' + PORT))