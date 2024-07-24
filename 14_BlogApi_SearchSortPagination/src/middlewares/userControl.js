"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const { User } = require('../models/userModel')

/* ------------------------------------------------------- */
// Authentication Middleware
// Session içindeki user id ve passwordu kontrol eden middleware.

module.exports = async (req, res, next) => {

    req.user = null

    if (req?.session?._id){

        const user = await User.findOne({ _id: req.session._id})

        if (user && user.password == req.session.password) {

            req.user = user
            
        } else {

            req.session = null
        }
    } 
    next()
}

/* ------------------------------------------------------- */