"use strict"
/* -------------------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------------------- */

// const router = express.Router()
const router = require('express').Router()

// Model:
const Todo = require('../models/todo.model')

// LIST TODOS:
router.get('/', async (req, res) => {

    // const data = await Todo.findAll()
    const data = await Todo.findAndCountAll()

    res.status(200).send({
        error: false,
        result: data
    })
})

//CREATE TODO:
router.post('/', async (req, res) => {

    // const receivedData = req.body
    // // console.log(receivedData)

    // const data = await Todo.create({
    //     title: receivedData.title,
    //     description: receivedData.description,
    //     priority: receivedData.priority,
    //     isDone: receivedData.isDone
    // })

    const data = await Todo.create(req.body)

    // console.log(data)

    res.status(201).send({
        error: false,
        result: data.dataValues
    })
})

//READ TODO:
router.get('/:id', async (req, res) => {

    // const data = await Todo.findOne({ where: { id: req.params.id } })
    const data = await Todo.findByPk( req.params.id )

    res.status(200).send({
        error: false,
        result: data
    })
})

// UPDATE TODO:
router.put('/:id', async (req, res) => {

    // const data = await Todo.update({...newData}, {...filter})
     const data = await Todo.update(req.body, { where: { id: req.params.id }})
    //  console.log(data)

     res.status(202).send({
        error: false,
        result: data,
        message: (data[0] ? 'Updated' : 'Not Updated.'),
        new: await Todo.findByPk(req.params.id) // Güncellenmiş kaydı göster.
     })
})

// DELETE TODO:
router.delete('/:id', async (req, res) => {

    // const data = await Todo.destroy({...filter})
    const data = await Todo.destroy({ where: { id: req.params.id } })
    // console.log(data)

    // res.status(204).send({
    //     error: false,
    //     result: data,
    //     message: (data>=1 ? 'Deleted' : 'Can not Deleted.')
    // })

    if (data >= 1){
        //Deleted:
        // res.status(200).send({
        //     error: false,
        //     result: data,
        //     message: 'Deleted.'
        // })

       res.sendStatus(204)  // sadece status çıktısı ver.

    } else {
        // Not deleted:
        // res.status(404).send({
        //     error: true,
        //     result: data,
        //     message: 'Can not Deleted.'
        // })

            res.errorStatusCode = 404
            throw new Error ('Can not deleted. Maybe already deleted.')
    }
})

module.exports = router