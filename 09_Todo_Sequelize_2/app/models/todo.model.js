"use strict"
/* -------------------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------------------- */

// SEQUELIZE:

const { Sequelize, DataTypes } = require('sequelize')

// Connection:
// const sequelize = new Sequelize('sqlite:./db.sqlite3')
// const sequelize = new Sequelize('sqlite:' + process.env.SQLITE)
const sequelize = new Sequelize('sqlite:' + (process.env.SQLITE || './db.sqlite3'))

// Sequelize Model:

// sequelize.define('tableName', {...columns})

const Todo = sequelize.define('todos', {

    // ID sütunu belirtmeye gerek yoktur. Sequelize ID sütununu otomatik oluşturur.

    // id:{
    //     type: DataTypes.INTEGER, // DataType
    //     allowNull: false, // default: true --- sütun verisi boş olabilir mi?
    //     unique: true, // default: false // benzersiz kayıt mı?
    //     defaultValue: 0, // Kayıt eklendiğinde default olarak ne yazılsın?
    //     // comment: 'yorum eklenebilir',
    //     // primaryKey: true, // default: false // tablonun her bir kaydını ifade eden benzersiz numara.
    //     // autoIncrement: true, // default: false, // Sütun değeri her bir kayıtta otomatik olarak +1 artsın mı?
    //     // field: 'custom_field_name'
    // },

    // createdAt ve updatedAt tanımlamaya da gerek yok. Otomatik oluşturulur.

    title: {
        type: DataTypes.STRING(256), // varchar(256)
        allowNull: false            
    },

    description: DataTypes.TEXT, // ShortHand

    priority: { // 1: High, 0: Normal, -1: Low
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0
    },

    isDone: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    // gulsah: {
    //     type: DataTypes.BOOLEAN,
    //     allowNull: false,
    //     defaultValue: false
    // }
})

// Syncronization:
// Modelleri veritabanına uygula:

// sequelize.sync()   // CREATE TABLE
// sequelize.sync({ force: true})   // DROP TABLE & CREATE TABLE
// sequelize.sync({ alter: true})   // TO BACKUP & DROP TABLE & CREATE TABLE & FROM BACKUP

//Connect to DB:
sequelize.authenticate()
.then(() => console.log('* DB Connected *'))
.catch(() => console.log('* DB Not Connected *'))

// MODEL EXPORT:
module.exports = Todo