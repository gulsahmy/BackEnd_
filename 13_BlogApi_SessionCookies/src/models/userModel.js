"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
const mongoose = require('mongoose')
/* --------------------------------------------------------- *
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
// call from file:

const passwordEncrypt = require('../helpers/passwordEncrypt')

/* --------------------------------------------------------- */

const UserSchema = new mongoose.Schema({

    email: {
        type: String,
        trim: true,
        unique: true,
        // required: true        
        required: [true, 'Email is required.'],        
        // validate: (email) => { // return=true ise kaydeder.
        //    if(email.includes('@') && email.includes('.')) {
        //     return true
        //    } else {
        //     return false
        //    }
        // }
        // validate: (email) => (email.includes('@') && email.includes('.'))  // kısaca..
        validate: [
            (email) => (email.includes('@') && email.includes('.')),
            'Email type is incorrect.'
        ]


    },

    password: {
        type: String,
        trim: true,
        // required: true
        required: [true, 'Password is required.'], 

        // set: (password) => passwordEncrypt(password)// Veri kaydederken, return edilen data kaydedilir}
        // set: passwordEncrypt    // kısaca..
        // Set methodu validate methodundan önce çalışır. Dolayısıyla validate data aynı formatta kalır.

        // set: (password) => {
        //     if (password.length >= 8){
        //         return passwordEncrypt(password)
        //     } else {
        //         return ' wrong '
        //     }
        // },
        // validate: (password) => {
        //     if (password == 'wrong') {
        //         return false
        //     } else {
        //         return true
        //     }
        // }
        set: (password) => (password.length >=8 ? passwordEncrypt(password) : 'wrong'), // kısaca..
        validate: (password) => (password != 'wrong') // kısaca..

        //! Güncelleme yaparken default olarak validate çalışmaz.
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