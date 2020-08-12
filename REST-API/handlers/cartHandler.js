const models = require('../models')
const config = require('../config/config')
const utils = require('../utils')

module.exports = {
    get: {
        getCartBooks: (req, res, next) => {
            const { _id } = req.user

            models.User.findOne({ _id }).populate('book')
                .then(user => {
                    res.send(user.cart)
                })
                .catch(next)
        }
    },
    put: {
        addToCart: (req, res, next) => {
            const { bookId } = req.body
            // const id = req.params.id  -  maybe like that
            const { _id } = req.user

            models.User.updateOne({ _id }, { $push: { cart: bookId } })
                .then(updatedUser => {
                    console.log('updatedUser', updatedUser)
                    res.send(updatedUser)
                })
                .catch(next)
        },
        removeFromCart: (req, res, next) => {
            const id = req.params.id
            models.User.updateOne({ id }, { $pull: { cart: bookId } })
                .then(updatedUser => {
                    console.log('updatedUser', updatedUser)
                    res.send(updatedUser)
                })
                .catch(next)
        }
    }
}