"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const Department = require("../models/department.model");

module.exports = {
  list: async (req, res) => {
    const data = await res.getModelList(Department);

    res.status(200).send({
      error: false,
      data,
      detail: await res.getModelListDetails(Department),
    });
  },

  create: async (req, res) => {
    const data = await Department.create(req.body);
    res.status(201).send({
      error: false,
      data,
    });
  },

  read: async (req, res) => {
    const data = await Department.findOne({ _id: req.params.id });

    res.status(200).send({
      error: false,
      data,
    });
  },
  //filter, update,options
  // const options = { upsert: true };
  // acknowledged: İşlemin MongoDB tarafından tanındığını gösterir.
  // matchedCount: Filtre kriterleriyle eşleşen belge sayısını belirtir.
  // modifiedCount: Güncellenen belge sayısını belirtir.
  // upsertedId: Eğer upsert kullanıldıysa ve yeni bir belge oluşturulduysa, bu belgenin _id değeri burada yer alır.
  // upsertedCount: upsert işlemi ile kaç belgenin oluşturulduğunu belirtir.

  update: async (req, res) => {
    const data = await Department.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
    });

    res.status(202).send({
      error: false,
      data,
      new: await Department.findOne({ _id: req.params.id }),
    });
  },

  delete: async (req, res) => {
    const data = await Department.deleteOne({ _id: req.params.id });
    res.status(data.deletedCount ? 204 : 404).send({
      error: !data.deletedCount,
      data,
    });
  },

  personnels: async (req, res) => {
    const Personnel = require("../models/personnel.model");

    const data = await res.getModelList(
      Personnel,
      { departmentId: req.params.id },
      "departmentId",
    );

    res.status(200).send({
      error: false,
      detail: await res.getModelListDetails(
        Personnel,
        { departmentId: req.params.id },
        "departmentId",
      ),
      data,
    });
  },
};

