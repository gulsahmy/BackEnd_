"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */

// UPLOAD:
// npm i multer

const multer = require('multer')

const upload = multer({

   // dest: './uploads'

  storage: multer.diskStorage({

    destination: './uploads',
    filename: function (req, file, returnCallback) {
      // console.log('file', file)
      // returnCallback(error, fileName)
      returnCallback(null, 'glsh.jpg')
    }
 })
})





/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
// routes/pizza:

const pizza = require("../controllers/pizza");

// URL: /pizzas

router.route("/")
.get(pizza.list)
//.post(upload.single('image'), pizza.create);
.post(upload.array('image'), pizza.create);
//.post(upload.any(), pizza.create);

router
  .route("/:id")
  .get(pizza.read)
  .put(pizza.update)
  .patch(pizza.update)
  .delete(pizza.delete);

/* ------------------------------------------------------- */
module.exports = router;

