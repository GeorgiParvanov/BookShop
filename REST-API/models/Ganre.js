const mongoose = require('mongoose')
const { Schema, model: Model } = mongoose
const { String, Number, ObjectId } = Schema.Types


const ganreSchema = new Schema({
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

module.exports = new Model('Ganre', ganreSchema)