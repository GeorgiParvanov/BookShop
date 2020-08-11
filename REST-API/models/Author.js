const mongoose = require('mongoose')
const { Schema, model: Model } = mongoose
const { String, Number, ObjectId } = Schema.Types


const authorSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },

    books: [{
        type: ObjectId,
        ref: "Book"
    }]
})

module.exports = new Model('Author', authorSchema)