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
                throw new Error('ID parametresi sayı olmak zorundadır.')
        } else {
                res.send('ID doğru.')
        }
})



/* ---------------------------------------------------------------- */
/* ---------------------------------------------------------------- */
/* ---------------------------------------------------------------- */
/* ---------------------------------------------------------------- */
/* ---------------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT ));