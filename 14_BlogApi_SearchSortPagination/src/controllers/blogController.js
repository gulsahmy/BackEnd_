"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

// Call Models:
const {BlogCategory, BlogPost} = require('../models/blogModel')
/* ----------------------------------------------------------- */
// BlogCategory Controller:

module.exports.blogCategory = {

    list: async (req, res) => {

        const data = await BlogCategory.find()

        res.status(200).send({
            error: false,
            result: data
        })
    },

    // CRUD ->

    create: async (req, res) => {

        req.body.userId = req.user?._id



        // res.send('create method')

        const data = await BlogCategory.create(req.body)
        // console.log(data)

        res.status(201).send({
            error: false,
            result: data
        })
    },

    read: async (req, res) => {

        // const categoryId = req.params.categoryId
        // const data = await BlogCategory.findOne({_id: categoryId})

        const data = await BlogCategory.findOne({ _id: req.params.categoryId })

        res.status(200).send({
            error: false,
            result: data
        })
    },

    update: async (req, res) => {
        
        // const data = await BlogCategory.updateOne({...filter}, {...data})
        const data = await BlogCategory.updateOne({ _id: req.params.categoryId }, req.body )

        res.status(202).send({
            error: false,
            result: data, // Güncel data
            new: await BlogCategory.findOne({ _id: req.params.categoryId }) // Güncellenmiş datayı göster
        })
    },

    delete: async (req, res) => {

        // const data = await BlogCategory.deleteOne({...filter})
        const data = await BlogCategory.deleteOne({ _id: req.params.categoryId})
        console.log(data)

        // res.status(204).send({
        //     error: false,
        //     result: data
        // })

        if(data.deleteCount >= 1) {
            res.sendStatus(204)
        } else {

            res.errorStatusCode = 404
            throw new Error('Not Found.')
        }
    }

}

/* ----------------------------------------------------------- */
// BlogPost Controller:
module.exports.blogPost = {

    list: async (req, res) => {

        // console.log(req.query)

        //? FILTERING & SEARCHING & SORTING & PAGINATION

        //? FILTERING:
        //? URL?filter[fieldName1]=value1&filter[fieldName2]=value2
        const filter = req.query?.filter || {}
        // console.log(filter)     


        //? SEARCHING:
        //? URL?search[fieldName1]=value1&search[fieldName2]=value2
        const search = req.query?.search || {}
        // console.log(search)
        //* https://www.mongodb.com/docs/manual/reference/operator/query/regex/
        for (let key in search)
            search[key] = {$regex: search[key] }
        // console.log(search)
       

        //? SORTING:
        //? URL?sort[fieldName1]=asc&sort[fieldName2]=desc
        const sort = req.query?.sort || {}
        // console.log(sort)

        // PAGINATION:
        // URL?page=3&limit=15
        let limit = Number(req.query?.limit)
        limit = limit > 0 ? limit : Number(process.env?.PAGE_SIZE || 20)
        console.log(limit, typeof limit)

        const data = await BlogPost.find({...filter, ...search}).sort(sort).limit(limit)


        // const data = await BlogPost.find({...filter}, {...select})
        // const data = await BlogPost.find({}, {categoryId: true, title: true, content: true})
        // const data = await BlogPost.find({}, {_id: 1, categoryId: 1, title: 1, content: 1})
        // const data = await BlogPost.find({}, {categoryId: true, title: true, content: true}).populate('categoryId')
        // const data = await BlogPost.find().populate('categoryId')

        res.status(200).send({
            error: false,
            result: data
        })
    },

    // CRUD ->

    create: async (req, res) => {

        const data = await BlogPost.create(req.body)
      
        res.status(201).send({
            error: false,
            result: data
        })
    },

    read: async (req, res) => {

        const data = await BlogPost.findOne({ _id: req.params.postId }).populate('categoryId')

        res.status(200).send({
            error: false,
            result: data
        })
    },

    update: async (req, res) => {
        
       
        const data = await BlogPost.updateOne({ _id: req.params.postId }, req.body )

        res.status(202).send({
            error: false,
            result: data, // Güncel data
            new: await BlogPost.findOne({ _id: req.params.postId }) // Güncellenmiş datayı göster
        })
    },

    delete: async (req, res) => {

        const data = await BlogPost.deleteOne({ _id: req.params.postId})
        console.log(data)

               if(data.deleteCount >= 1) {
            res.sendStatus(204)
        } else {

            res.errorStatusCode = 404
            throw new Error('Not Found.')
        }
    }
}







