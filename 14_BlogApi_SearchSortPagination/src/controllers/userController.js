"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const { User } = require('../models/userModel')

// User Controller:

module.exports.user = {

    list: async (req, res) => {

        // const data = await User.find()
        const data = await res.getModelList(User)      


        res.status(200).send({
            error: false,
            result: data
        })
    },

    // CRUD ->

    create: async (req, res) => {

        const data = await User.create(req.body)
  
        res.status(201).send({
            error: false,
            result: data
        })
    },

    read: async (req, res) => {

        const data = await User.findOne({ _id: req.params.userId })

        res.status(200).send({
            error: false,
            result: data
        })
    },

    update: async (req, res) => {
        
        // const data = await User.updateOne({ _id: req.params.userId }, req.body )
        const data = await User.updateOne({ _id: req.params.userId }, req.body, { runValidators: true} )

        res.status(202).send({
            error: false,
            result: data, // Güncel data
            new: await User.findOne({ _id: req.params.userId }) // Güncellenmiş datayı göster
        })
    },

    delete: async (req, res) => {

        const data = await User.deleteOne({ _id: req.params.userId})
        console.log(data)

        if(data.deleteCount >= 1) {
            res.sendStatus(204)
        } else {

            res.errorStatusCode = 404
            throw new Error('Not Found.')
        }
    }

}

/* ----------------------------------------------------------- */
