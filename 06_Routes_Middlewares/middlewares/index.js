"use strict"
/* --------------------------------------------------------------
        EXPRESSJS - MIDDLEWARES
--------------------------------------------------------------- *
const middleware1 = (req, res, next) => {
    console.log('middleware1 çalıştı.')
    next()
}
const middleware2 = (req, res, next) => {
    console.log('middleware2 çalıştı.')
    next()
}
const middleware3 = (req, res, next) => {
    console.log('middleware3 çalıştı.')
    next()
}

module.exports = [middleware1, middleware2, middleware3]

/* ----------------------------------------------------------------- */

module.exports = {
    
    middleware1: (req, res, next) => {
    console.log('middleware1 çalıştı.')
    next()
},
    middleware2: (req, res, next) => {
    console.log('middleware2 çalıştı.')
    next()
},

    middleware3: (req, res, next) => {
    console.log('middleware3 çalıştı.')
    next()
}

}



/* ----------------------------------------------------------------- */
/* ----------------------------------------------------------------- */
/* ----------------------------------------------------------------- */