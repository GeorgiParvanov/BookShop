const mongoose = require('mongoose')
const { Schema, model: Model } = mongoose
const { String, ObjectId } = Schema.Types
const bcrypt = require('bcrypt')
const saltRounds = 10


const userSchema = new Schema({

    username: {
        type: String,
        unique: true,
        required: true
    },

    password: {
        type: String,
        require: true
    },

    books: [{
        type: ObjectId,
        ref: "Book"
    }]
})

userSchema.methods = {

    matchPassword: function (password) {
        return bcrypt.compare(password, this.password)
    }

}

userSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        bcrypt.genSalt(saltRounds, (err, salt) => {
            bcrypt.hash(this.password, salt, (err, hash) => {
                if (err) {
                    next(err)
                    return
                }
                this.password = hash
                next()
            })
        })
        return
    }
    next()
})

module.exports = new Model('User', userSchema)