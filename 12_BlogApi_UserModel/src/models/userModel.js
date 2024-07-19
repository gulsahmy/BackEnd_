"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
const mongoose = require('mongoose')
/* --------------------------------------------------------- */
// Password Encrypt (PBKDF2 Method) : 

const cryptp = require('node:crypto')

/* --------------------------------------------------------- */

const UserSchema = new mongoose.Schema({

    email: {
        type: String,
        trim: true,
        unique: true,
        // required: true        
        required: [true, 'Email is required.']        
    },

    password: {
        type: String,
        trim: true,
        // required: true
        required: [true, 'Password is required.'], 

        set: (password) => { // Veri kaydederken, return edilen data kaydedilir}
            console.log(password)
            return 'gulsah'
    },
},

    firstName: String,

    lastName: String
}, {

    collectioc: 'users',
    timestamps: true
})
/* --------------------------------------------------------- */
// module.exports = mongoose.model('User', UserSchema) // Direct
module.exports.User = mongoose.model('User', UserSchema) // In Object