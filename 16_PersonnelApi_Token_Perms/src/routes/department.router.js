"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */

const department = require("../controllers/department.controller");

const permissions = require('../middlewares/permissions') 

/* ------------------------------------------------------- */
router.route("/")
.get(permissions.isLogin, department.list)
.post(permissions.isLogin, department.create);

router
  .route("/:id")
  .get(permissions.isLogin, department.read)
  .put(permissions.isLogin, department.update)
  .patch(permissions.isLogin, department.update)
  .delete(permissions.isLogin, department.delete);

router.get("/:id/personnels", permissions.isAdminOrLead,  department.personnels);

module.exports = router;

