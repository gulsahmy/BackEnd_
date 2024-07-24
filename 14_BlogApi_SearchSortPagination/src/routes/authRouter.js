"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
const router = require('express').Router()

const {auth} = require('../controllers/authController')

/* ---------------------------------------------------------- */

// URL: /auth ->

router.post('/login', auth.login)
// router.post('/logout', auth.logout)
router.all('/logout', auth.logout)




/* ---------------------------------------------------------- */
module.exports = router