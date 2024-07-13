"use strict"
/* ----------------------------------------------- *
                NODEJS
/* ----------------------------------------------- */
// HTTPSERVER:

const http = require('node:http') // BuiltIn Module

/* ----------------------------------------------- *

// http.createServer((request, response) => {...})

const app = http.createServer((request, response) => {

    response.end('Hello World')
    console.log('Console Print')
})

// Default server (local domain) = localhost
// Default server IP (local IP) = 127.0.0.1
app.listen(8000,  () => console.log('Server started: http://127.0.0.1:8000'))

/* ------------------------------------------------------------------------- *

const app = http.createServer((req, res) => {
    // server oluştu.

    // console.log(req)
    // console.log(res)
    // console.log(req.url)

    if (req.url == '/'){
        res.end('Main Page')
    } else if (req.url == '/second'){
        res.end('second page')
    } else {
        res.end('any page')
    }
})

app.listen(8000, () => console.log('http://127.0.0.1:8000'))

/* ------------------------------------------------------------------------- */

const app = http.createServer((req, res) => {
 

    if (req.url == '/api'){

        // res.end('API') // res.end işlemi blocklar, devam eden kodlar çalışmaz.

        // res.write('Yazi-1')
        // res.write('Yazi-2')
        // res.write('Yazi-3')
        // res.write('Yazi-4')
        // res.end() // son komut olmalı.

        if (req.method == 'GET'){          

            const obj = {
                result: true,
                message: 'Hello World'
            }
            

            // setHeader (single header)
            res.setHeader ('title', 'value')

            res.writeHead(400, {
                    'Content-Enconding': 'utf-8',
                    'Multi-Headers': 'test'
            })
            
            res.write(JSON.stringify(obj))
            res.end()
        }

    } else {

        res.end('Wrong Method')
    }
})
app.listen(8000, () => console.log('http://127.0.0.1:8000'))










/* ------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------- */
