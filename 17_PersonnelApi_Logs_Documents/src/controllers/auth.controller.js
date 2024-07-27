"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */

const Personnel = require('../models/personnel.model')
const Token = require('../models/token.model')

const passwordEncrypt = require('../helpers/passwordEncrypt')

/* ------------------------------------------------------- */


module.exports = {

    login: async (req, res) => {
        /*
            #swagger.tags = ['Authentication']
            #swagger.summary = 'Login'
            #swagger.description = 'Login with username and password'
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    username: '*String',
                    password: '*String',
                }
            }
        */

        const { username, password } = req.body

        if ( username && password){

            const user = await Personnel.findOne({ username })

            if (user && user.password == passwordEncrypt(password)){

                    if (user.isActive){
                        
                        /* TOKEN */

                        // Token var mı?
                        let tokenData = await Token.findOne({userId: user._id})

                        // Token yoksa oluştur:
                        if(!tokenData){
                            tokenData = await Token.create({
                                userId: user.id,
                                token: passwordEncrypt(user._id + Date.now())
                            })
                        }

                        res.status(200).send({
                            error: false,
                            token: tokenData.token,
                            user

                        })
                        /* TOKEN */
                    } else {
                        res.errorStatusCode = 401
                        throw new Error('This user is not active.')
                    }
            } else {
                res.errorStatusCode = 401
                throw new Error('Wrong username or password.')
            }

        } else {
            res.errorStatusCode = 401
            throw new Error('Please enter username and password.')
        }
    },

    logout: async (req, res) => {

           /*
            #swagger.tags = ['Authentication']
            #swagger.summary = 'Logout'
            #swagger.description = 'Delete token'
            
        */

        // Token Delete:
        // if(req.user) {
        // const data = await Token.deleteOne({ userId: req.user._id })
        // }

        const data = req.user ? await Token.deleteOne({ userId: req.user._id }) : null

        res.status(200).send({
            error : false,
            message: 'Logout: OK',
            data
        })
    }
}






/* ------------------------------------------------------- */