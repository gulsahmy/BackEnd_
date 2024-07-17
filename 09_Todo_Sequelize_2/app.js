"use strict"
/* -------------------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------------------- */

const express = require("express"); //? express i çağırdım
const app = express();              //? çalıştırıp app e atadım

require("dotenv").config();            //? dotenv i config i çalıştırıp
const PORT = process.env.PORT || 8000; //?  env dosyamı okuyabilirim

/* -------------------------------------------------------------------- */

//Accept json data:
app.use(express.json())   //? json dataları al ve objeye çevir

//Async errors to errorHandler:
require('express-async-errors')

/* --------------------------------------------------------------- */
// ROUTES:

// Model, controller da kullanılacagı için orada require edilmeli.
// const Todo = require('./app/models/todo.model') 
app.use(require('./app/routes/todo.router'))

/* --------------------------------------------------------------- */

// ErrorHandler:
app.use(require('./app/middlewares/errorHandler'))

/* --------------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
