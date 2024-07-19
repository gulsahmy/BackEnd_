"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
const mongoose = require('mongoose')
/* --------------------------------------------------------- */
// Password Encrypt (PBKDF2 Method) : 

const crypto = require('node:crypto')

//Parameters:
const keyCode = process.env.SECRET_KEY // Şifreleme anahtarı
const loopCount = 10000 // Döngü Sayısı
const charCount = 32 // write 32 for 64
const encType = 'sha512' // Şifreleme algoritması

const passwordEncrypt = function (password) {

    return crypto.pbkdf2Sync(password, keyCode, loopCount, charCount, encType ).toString("hex")
}

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

        // set: (password) => passwordEncrypt(password)// Veri kaydederken, return edilen data kaydedilir}
        set: passwordEncrypt    // kısaca..

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