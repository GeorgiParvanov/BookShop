const mongoose = require('mongoose')
const { Schema, model: Model } = mongoose
const { String, Number, ObjectId } = Schema.Types


const bookSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },

    price: {
        type: Number,
        require: true
    },

    author: {
        type: String,
    },

    ganre: {
        type: String,
    }
}, { timestamps: { createdAt: 'created_at' } })

module.exports = new Model('Book', bookSchema)