"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

// Mongoose:

const mongoose = require('mongoose')

/* ---------------------------------------------------------- *

// const ModelSchema = new mongoose.Schema({...fields}, {...settings })
const ModelSchema = new mongoose.Schema({

    // PrimaryKey (_id) tanımlamaya gerek yoktur. Otomatik tanımlanır.
    // _id: Number

    fieldName: {
        type: Number, // JS veri tipi
        default: null, // Veri gelmediğinde yazılacak veri
        trim: true, // Başındaki/Sonundaki boşlukları kırpar (string)
        unique: true, // Benzersiz kayıt
        // requireq: true, // Veri gönderimi zorunlu mu?
        required: [true, 'Bu data mutlaka gönderilmelidir.'], // Hata mesajı yazdırılabilir
        // enum: ['1', '2', '3'],
        // enum: [1, 2, 3], // Verilen değerlerden biri olmak zorunda
        enum: [[1, 2, 3], 'Bu değerlerden biri olmalıdır.'], 
        // validate: (data) => true // Gelen data formatının doğruluğunu kontrol eder.
        validate: [
            (data) => {return true},
            'Gönderilen data formatı yanlıştır.'
        ],
        get: (data) => data, // Bu veriye erişilmek istenildiğinde çalışacak fonksiyon
        set: (data) => data, // Bu field a veri kaydedilmek istendiğinde çalışacak fonksiyon
    }
}, {
    collection: 'tableName', // Tablo ismi
    timestamps: true // createAt ve updatedAt otomatik yönetilsin. (tanımlamaya gerek yok)
 })
 const ModelName = mongoose.model('ModelName', ModelSchema) // Schema yı model e çevirdik


/* ------------------------------------------------------- */
// BlogCategory Schema:

const BlogCategorySchema = new mongoose.Schema({

    // _id

    name: {
        type: String,
        trim: true,
        required: true
    }
}, {
    collection: 'blogCategory',
    timestamps: true
})
// const BlogCategory = mongoose.model('BlogCategory', BlogCategorySchema) // Model e çevirdik
/* ----------------------------------------------------------- */
// BlogPost Schema:

const BlogPostSchema = new mongoose.Schema({

    // _id,

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    categoryId: {
        type: mongoose.Schema.Types.ObjectId, // hexadecimal format: 'fedcba9876543210'
        ref: 'BlogCategory', // ID nin hangi modele ait olduğunu belirtir.
        required: true
    }, 

    title: {
        type: String,
        trim: true,
        required: true
    },

    content: {
        type: String,
        trim: true,
        required: true
    },

    published: {
        type: Boolean,
        default: true
    }

    // createdat // timestamps: true
    // updatedAt // timestamps: true

}, {
    collection: 'blogPost',
    timestamps: true
})

// const BlogPost = mongoose.model('BlogPost', BlogPostSchema) // Schema yı model e cevirdik.
/* ----------------------------------------------------------- */

// module.exports = {
//     BlogCategory: BlogCategory,
//     BlogPost: BlogPost
// }

module.exports = { // Tek seferde modele çevirip export yapabiliriz.
    BlogCategory: mongoose.model('BlogCategory', BlogCategorySchema),
    BlogPost: mongoose.model('BlogPost', BlogPostSchema)
}












/* ----------------------------------------------------------- */

