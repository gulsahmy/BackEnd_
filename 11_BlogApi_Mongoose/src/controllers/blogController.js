"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

// Call Models:
const {BlogCategory, BlogPost} = require('../models/blogModel')
/* ----------------------------------------------------------- */
// BlogCategory Controller:

module.exports.blogCategory = {

    create: async (req, res) => {

        // res.send('create method')

        const data = await BlogCategory.create(req.body)
        // console.log(data)

        res.status(201).send({
            error: false,
            result: data
        })
    }
}

/* ----------------------------------------------------------- */
// BlogPost Controller:
module.exports.blogPost = {

}






