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
/* -------------------------------------------------------------- *
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
/* ------------------------------------------------------------------------- *

app.get('/', (req, res, next) => {
    console.log('middleware1 çalıştı.')
    req.message1 = 'middleware1'
    next()   
})
app.get('/', (req, res, next) => {
    console.log('middleware2 çalıştı.')
    req.message2= 'middleware2'
    next()   
})
app.get('/', (req, res, next) => {
    console.log('middleware3 çalıştı.')
    // req.message3 = 'middleware3'
    next()   
})
app.get('/', (req, res, next) => {
    console.log('middleware4 çalıştı.')
    req.message4 = 'middleware4'
    next()   
})

// Route-Path:
app.get('/', (req, res) => {

      res.send({            
        message: 'Sorun yok.',
        message1: req.message1,
        message2: req.message2,
        message3: req.message3,
        message4: req.message4
    })
})
/* -------------------------------------------------------------- */
// app.get('/', (req, res, next) => {
//     console.log('middleware1 çalıştı.')
//     next()   
// })

// const middleware1 = (req, res, next) => {
//     console.log('middleware1 çalıştı.')
//     next()   }

// const middleware2 = (req, res, next) => {
//     console.log('middleware2 çalıştı.')
//     next()   }

    // app.use(middleware2, middleware1)   
    // app.get('/', middleware1)

    // app.use('/test', [middleware1, middleware2])

    // app.get('/*', (req, res) => {
    //     res.send({
    //         message:'Sorun yok'
    //     })
    // })
    // app.all('/*', [middleware1, middleware2], (req, res) => {
    //     res.send({
    //         message:'Sorun yok'
    //     })
    // })
/* ------------------------------------------------------------------- */

// Ayrı dosyadan çağırma:

const middlewares = require('./middlewares/index')

app.get('/*', middlewares, (req, res) => {

        res.send({
            message:'middlewares/index',
        })
    })



/* --------------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));