"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
// Mongoose ODM
// $ npm i mongoose

const mongoose = require('mongoose')

const dbConnection = () => {

    // mongoose.connect('mongodb://localhost:27017/blogAPI')
    // mongoose.connect(process.env?.MONGODB)
    mongoose.connect(process.env?.MONGODB || 'MONGODB = mongodb://localhost:27017/blogAPI')
    .then(() => console.log('* DB Connected.'))
    .catch(() => console.log('* DB Not Connected.'))
}

module.exports = dbConnection