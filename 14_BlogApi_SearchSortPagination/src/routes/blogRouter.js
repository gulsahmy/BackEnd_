"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const router = require('express').Router()

//Call Controllers:
const { blogCategory, blogPost } = require('../controllers/blogController');


/* ------------------------------------------------------------------ */

// URL: /blog ->

// BlogCategory
router.route('/category')
    .get(blogCategory.list)
    .post(blogCategory.create)

router.route('/category/:categoryId')
    .get(blogCategory.read)
    .put(blogCategory.update)
    .patch(blogCategory.update)
    .delete(blogCategory.delete)


/* ------------------------------------------------------------------ */
// BlogPost

router.route('/post')
    .get(blogPost.list)
    .post(blogPost.create)

router.route('/post/:postId')
    .get(blogPost.read)
    .put(blogPost.update)
    .patch(blogPost.update)
    .delete(blogPost.delete)
/* ------------------------------------------------------------------ */

module.exports = router