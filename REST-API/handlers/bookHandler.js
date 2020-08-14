const models = require('../models')
const config = require('../config/config')
const utils = require('../utils')

module.exports = {
    get: {
        getBooks: (req, res, next) => {
            const length = req.query.length ? parseInt(req.query.length) : 20
            console.log('getBooks query:', req.query)
            models.Book.find().sort('-created_at').limit(length)
                .then((books) => res.send(books))
                .catch(next)
        },
        getBook: (req, res, next) => {
            const bookId = req.params.id
            // const newbookId = bookId.substring(1, bookId.length)
            // console.log("newbookID: ", newbookId);
            // var mongoose = require('mongoose');
            // console.log(mongoose.Types.ObjectId.isValid(bookId));
            models.Book.findById(bookId)
                .then(book => {
                    // console.log('bookHandler book: ', book);
                    res.send(book)
                })
                .catch(next)
        }
    },

    // post: {
    //     addToCart: (req, res, next) => {
    //         const { bookId } = req.body
    //         // const id = req.params.id  -  maybe like that
    //         const { _id } = req.user

    //         models.User.updateOne({ _id }, { $push: { cart: bookId } })
    //             .then(updatedUser => {
    //                 console.log('updatedUser', updatedUser)
    //                 res.send(updatedUser)
    //             })
    //             .catch(next)
    //     },
    //     removeFromCart: (req, res, next) => {
    //         const id = req.params.id
    //         models.User.updateOne({ id }, { $pull: { cart: bookId } })
    //             .then(updatedUser => {
    //                 console.log('updatedUser', updatedUser)
    //                 res.send(updatedUser)
    //             })
    //             .catch(next)
    //     }
    // }
}