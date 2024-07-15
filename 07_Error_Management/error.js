"use strict"

/* -----------------------------------------------------------------
        EXPRESS - ERROR MANAGEMENT
------------------------------------------------------------------ */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ---------------------------------------------------------------- */
//THTOW:

app.get('/user/:id', function (req, res) {

        // throw new Error('Hata oluştu.')

        // res.send({
        //         id: req.params.id,
        //         message: 'Hello World'
        // })

        if (isNaN(req.params.id)){

                res.errorStatusCode = 400 // errorHandler a statusCode gönderdik.

                throw new Error('ID parametresi sayı olmak zorundadır.')
        } else {
                res.send('ID doğru.')
        }
})
/* ---------------------------------------------------------------- *

app.get('/user/:id', function(req, res){
        try {
                if(isNaN(req.params.id)){
                        throw new Error('ID parametresi sayı olmak zorundadır.')
                } else {
                       res.status(200).send({
                        error: false,
                        message: 'ID doğru. Herşey yolunda gidiyor.'
                       })

                }
        } catch (err) {
                // Hata oluşursa catch() çalışır ve hata err parametresi ile gönderilir.

                res.status(400).send({
                        error: true,
                        message: err.message
                })
        }
})
/* ---------------------------------------------------------------- */
// ErrorHandler 4 parametreli olmak zorunda. Hata yakalayıcı parametre 1. parametredir.
// ErrorHandler en sonda yer almalı

const errorHandler = (error, req, res, next) => {

        const statusCode = res?.errorStatusCode || 500

        res.status(statusCode).send({
                error: true,
                message: error.message
        })
}
app.use(errorHandler)





/* ---------------------------------------------------------------- */
/* ---------------------------------------------------------------- */
/* ---------------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT ));