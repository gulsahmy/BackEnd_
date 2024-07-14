"use strict";
/* --------------------------------------------------------
        EXPRESSJS - ROUTING
-------------------------------------------------------- */

// const express = require('express') - //? Bu şekilde tanımlanabilir yada

// express.Router()
const router = require('express').Router() //? kısaca böyle yazılabilir.

router.get('/', (req, res) => { res.send({ message: 'Home Page' }) })
router.get('/path', (req, res) => { res.send({ message: 'Path Page' }) })
router.post('/', (req, res) => { res.send({ message: 'Post Page' }) })
router.put('/', (req, res) => { res.send({ message: 'Put Page' }) })
router.delete('/', (req, res) => { res.send({ message: 'Delete Page' }) })

// router.route('/')                                                       
//         .get((req, res) => {res.send('get')})
//         .post((req, res) => {res.send('post')})

router.get('/user/:id', (req, res) => { res.send({ message: req.params.id }) })

module.exports = router