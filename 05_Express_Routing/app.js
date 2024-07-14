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
// app.all('/', (req, res) => {res.end('app.all çalıştı')})    //! ALL Method

// ROUTE METHOD:
// app.route('/')  //! ortak url var ise aşagıdaki gibi kullanım yapılabilir.
//     .get((req, res) => {res.end('app.get çalıştı')})
//     .post((req, res) => {res.end('app.post çalıştı')})
//     .put((req, res) => {res.end('app.put çalıştı')})
//     .delete((req, res) => {res.end('app.delete çalıştı')})


/* -------------------------------------------------------- */

// URL (path) Options:

// app.get('/', (req, res) => { res.send('burası anasayfa')})
// app.get('/path', (req, res) => { res.send('burası path anasayfa')})

// Express Joker karakterleri destekler:
// app.get('/abc(x?)123', (req, res) => { res.send('now in here: /abc(x?)123')})
// app.get('/abc(x+)123', (req, res) => { res.send('now in here: /abc(x+)123')})
// app.get('/abc*123', (req, res) => { res.send('now in here: /abc*123')})

// Express RegularExpression destekler:

// app.get(/xyz/, (req, res) => { res.send('now in here: /xyz/')})
// app.get(/xyz$/, (req, res) => { res.send('now in here: /xyz$/')})
// app.get(/^\/xyz/, (req, res) => { res.send('now in here: /^\/xyz$/')})

/*------------------------------------------------------------------------- */

// URL Parameters:

// app.get('/*', (req, res) => {

//         res.send({
//                 url: { protocol: req.protocol,
//                         secure: req.secure,
//                         hostname: req.hostname,
//                         // baseUrl: req.baseUrl, // artık req.url geçerli
//                         params: req.params,
//                         query: req.query, // sadece query verir
//                         path: req.path,    // sadece subfolder (name/name1/name2/) verir
//                         originalUrl: req.originalUrl,   // url yi tümüyle verir
//                         url: req.url  // router url sini verir
//                 }
//         })

// })
/* ----------------------------------------------------------------------------------- */

// app.get('/user/:userId/config/:process', (req, res) => {

//         res.send({
//                 userId: req.params.userId,
//                 process: req.params.process,
//                 url: { 
//                         params: req.params,                     
//                      }
//         })
// })

// app.get('/user/:userId([0-9]+)', (req, res) => {
// app.get('/user/:userId(\\d)', (req, res) => {

//         res.send({
//                 path: req.path,
//                 userId: req.params.userId,
//                 query: req.query.abc,
//         })
// })

/* -------------------------------------------------------------------------------- */

// app.get('/user/:id', (req, res) => {

//         res.send({
//                 id: req.params.id,
//                 params: req.params
//         })
// })


/* -------------------------------------------------------------------------------- */

// Response.Methods:

// sendStatus:
// app.get('/', (req, res) => { res.sendStatus(404)})

//status:
// app.get('/', (req, res) => {res.status(200).send({ message: 'OK' }) })
// app.post('/', (req, res) => {res.status(201).send({ message: 'Created' }) })
// app.put('/', (req, res) => {res.status(202).send({ message: 'Updated' }) })
// app.patch('/', (req, res) => {res.status(202).send({ message: 'Updated' }) })
// app.delete('/', (req, res) => {res.status(204).send({ message: 'Deleted' }) })
// json() (send() methodunu kullanabiliriz)
// app.get('/', (req, res) => { res.json({ message: 'OK' }) })
// download():
// app.get('/download', (req, res) => { res.download('./readme.md' ) })
// app.get('/download', (req, res) => { res.download('./readme.md', 'newName.txt' ) })
// sendFile():
// console.log(__dirname)
// app.get('/package', ( req, res) => { res.sendFile(__dirname + '/package.json') }) // dosya yolu tam (gerçek) olmalı

// redirect()
// app.get('/clarusway', (req, res) => { res.redirect('https://clarusway.com') }) //! Default yönlendirme 302 dir.
//  app.get('/301', (req, res) => { res.redirect( 301, 'https://clarusway.com') })
//  app.get('/302', (req, res) => { res.redirect( 302, 'https://google.com') })











/* -------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------- */

// dotenv çalıştır:
require('dotenv').config()
const PORT = process.env.PORT || 8000

app.listen(PORT, () => console.log('Running: http://127.0.0.1:' + PORT))







