"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
const router = require('express').Router()

const {user} = require('../controllers/userController')

/* ---------------------------------------------------------- */

// URL: /user ->

router.route('/')
    .get(user.list)
    .post(user.create)

router.route('/:userId')
    .get(user.read)
    .put(user.update)
    .patch(user.update)
    .delete(user.delete)




/* ---------------------------------------------------------- */
module.exports = router