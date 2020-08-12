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

    description: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    },

    ganre: {
        type: String,
        required: true
    }
}, { timestamps: { createdAt: 'created_at' } })

module.exports = new Model('Book', bookSchema)