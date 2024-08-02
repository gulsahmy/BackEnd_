"use strict"

const nodemailer = require('nodemailer')

module.exports = function sendMail(to, subject, message) {

    // GoogleMail (gmail)

// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'qadir@clarusway.com',
//       pass: 'krkh fxow gujl cjhf'
//     }
//   })

  // SendMail:
transporter.sendMail({
  
  from: 'qadir@clarusway.com',
  // to:'g8468510@gmail.com',
  to: to,
  // subject: 'Hello',
  subject: subject,
  // text: 'Hello There. How are you?',
  text: message,
  // html: '<p> <b> Hello There. </b> <br> How are you?</p>',
  html: message,

}, function (error, success){

  success ? console.log( 'SUCCESS', success) : console.log('ERROR: ', error)

})



}