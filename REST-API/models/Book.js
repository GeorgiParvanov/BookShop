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

    authors: [{
        type: ObjectId,
        ref: "Author"
    }],

    ganres: [{
        type: ObjectId,
        ref: "Ganre"
    }],
})

module.exports = new Model('Book', bookSchema)