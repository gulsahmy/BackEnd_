"use strict";
/* -----------------------------------------------------------------
  EXPRESS - BUILT-IN MIDDLEWARES
------------------------------------------------------------------ */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ---------------------------------------------------------------- */

//? Gelen datayı al:

//? Gelen JSON datayı al:
app.use(express.json())

//? Gelen text datayı al:
app.use(express.text())

//? Gelen FORM-ENCODED kabul et:
app.use(express.urlencoded({ extended: true }))

app.all('/', (req, res) => {

    res.send({
        // message: 'OK'
        params: req.params, // url de params tanımlı olmalı.
        query: req.query,
        headers: req.headers,
        body: req.body
    })
})

// app.use('/images', express.static('./images'))
app.use('/public', express.static('./images'))





/* ---------------------------------------------------------------- */
/* ---------------------------------------------------------------- */
/* ---------------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));