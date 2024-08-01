"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// sync():

module.exports = async function () {
  return null;
  /* CLEAR DATABASE */
  const { mongoose } = require("../configs/dbConnection");
  await mongoose.connection.dropDatabase();
  console.log("- Database and all data DELETED!");
  /* CLEAR DATABASE */
  try {
    const users = require("./user.json");
    const User = require("../models/user");
    await User.insertMany(users);
    console.log("users added");
  } catch (error) {
    console.log("user couldn't add");
    console.log(error);
  }
  try {
    const toppings = require("./topping.json");
    const Topping = require("../models/topping");
    await Topping.insertMany(toppings);
    console.log("toppings added");
  } catch (error) {
    console.log("toppings couldn't add");
    console.log(error);
  }
  try {
    const pizzas = require("./pizza.json");
    const Pizza = require("../models/pizza");
    await Pizza.insertMany(pizzas);
    console.log("pizzas added");
  } catch (error) {
    console.log("pizzas couldn't add");
    console.log(error);
  }
};

