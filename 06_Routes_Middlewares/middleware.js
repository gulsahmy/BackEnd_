"use strict"
/* --------------------------------------------------------------
        EXPRESSJS - MIDDLEWARES
--------------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* -------------------------------------------------------------- *
//? Middleware functions must be has three parameters.
//? Last parameter is for next()

// Middleware:
app.get('/', (req, res, next) => {

    console.log('middleware çalıştı.')

    // next()

    if ( req.query.courseName == 'clarusway') {
        next()
    } else {
        res.send({
            message: 'Kurs ismi yanlış girildi.'
        })
    }

})

// Route-Path:
app.get('/', (req, res) => {

    console.log('route-path çalıştı.')

    res.send({
        message: 'Hello World'
    })

})
/* -------------------------------------------------------------- */
app.get('/', (req, res, next) => {

    console.log('middleware çalıştı.')

    //req:
    req.message = 'Hello world from middleware'

    //res:
    if (req.query.course == 'clarusway') {
        res.message = 'Doğru yerdesiniz.'
    } else {
        res.message = 'acaba doğru yerde misiniz?'
    }

    next()

   
})

// Route-Path:
app.get('/', (req, res) => {

    console.log('route-path çalıştı.')

    res.send({
        // message: req.message
        message: res.message
    })
})


/* --------------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));