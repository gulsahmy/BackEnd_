"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

/* --------------------------------------------------------- */
// Password Encrypt (PBKDF2 Method) : 

const crypto = require('node:crypto')

//Parameters:
const keyCode = process.env.SECRET_KEY // Şifreleme anahtarı
const loopCount = 10000 // Döngü Sayısı
const charCount = 32 // write 32 for 64
const encType = 'sha512' // Şifreleme algoritması

module.exports = function (password) {

    return crypto.pbkdf2Sync(password, keyCode, loopCount, charCount, encType ).toString("hex")
}

/* --------------------------------------------------------- */
