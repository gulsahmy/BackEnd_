"use strict"

/* -------------------------------------------------------- *

        NODEJS EXPRESS & ROUTINGS

/* -------------------------------------------------------- */
// https://expressjs.com/
// $ npm i express dotenv

const express = require('express')
const app = express()

// app.get('/', (req, res) => {
//     // res.end('app.get çalıştı')
//     // const obj = {
//     //     error: false,
//     //     message: 'Welcome'
//     // }
//     // res.end(JSON.stringify(obj))

//     //? SEND Method:  // Send methodu hem objeyi destekler hem string i !!!
//     // res.send('Welcome to World')

//     // STATUS METHOD:
//     // res.status(404)
//     // res.send({
//     //     error:false,
//     //     message:'Page Not Found'
//     // })

//     res.status(404).send({
//         error:false,
//         message:'Page Not Found'
//     })

//     // res.send({
//     //     error: false,
//     //     message: 'Welcome'
//     // })

// })

// app.post('/', (req, res) => {
//     res.end('app.post çalıştı')
// })
// app.put('/', (req, res) => {
//     res.end('app.put çalıştı')
// })
// app.delete('/', (req, res) => {
//     res.end('app.delete çalıştı')
// })
/* -------------------------------------------------------- */

// app.get('/', (req, res) => {res.end('app.get çalıştı')})
// app.post('/', (req, res) => {res.end('app.post çalıştı')})
// app.put('/', (req, res) => {res.end('app.put çalıştı')})
// app.delete('/', (req, res) => {res.end('app.delete çalıştı')})
// app.all('/', (req, res) => {res.end('app.all çalıştı')})

// ROUTE METHOD:
// app.route('/')  //! ortak url var ise aşagıdaki gibi kullanım yapılabilir.
//     .get((req, res) => {res.end('app.get çalıştı')})
//     .post((req, res) => {res.end('app.post çalıştı')})
//     .put((req, res) => {res.end('app.put çalıştı')})
//     .delete((req, res) => {res.end('app.delete çalıştı')})


/* -------------------------------------------------------- */

// URL (path) Options:

app.get('/', (req, res) => { res.send('burası anasayfa')})
app.get('/path', (req, res) => { res.send('burası path anasayfa')})

// Express Joker karakterleri destekler:
// app.get('/abc(x?)123', (req, res) => { res.send('now in here: /abc(x?)123')})
// app.get('/abc(x+)123', (req, res) => { res.send('now in here: /abc(x+)123')})
// app.get('/abc*123', (req, res) => { res.send('now in here: /abc*123')})

// Express RegularExpression destekler:

// app.get(/xyz/, (req, res) => { res.send('now in here: /xyz/')})
// app.get(/xyz$/, (req, res) => { res.send('now in here: /xyz$/')})
app.get(/^\/xyz/, (req, res) => { res.send('now in here: /^\/xyz$/')})











/* -------------------------------------------------------- */
// dotenv çalıştır:
require('dotenv').config()
const PORT = process.env.PORT || 8000

app.listen(PORT, () => console.log('Running: http://127.0.0.1' + PORT))

/* -------------------------------------------------------- */





/* -------------------------------------------------------- */
/* -------------------------------------------------------- */
/* -------------------------------------------------------- */