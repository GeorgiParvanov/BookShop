const models = require('../models')
const config = require('../config/config')
const utils = require('../utils')

module.exports = {
    get: {
        getCartBooks: (req, res, next) => {
            const { userId } = req.params

            models.User.findOne({ _id: userId }).populate('cart')
                .then(user => {
                    res.send(user.cart)
                })
                .catch(next)
        }
    },
    put: {
        addToCart: (req, res, next) => {
            const { bookId, userId } = req.params

            models.User.updateOne({ _id: userId }, { $push: { cart: bookId } })
                .then(updatedUser => {
                    res.send(updatedUser)
                })
                .catch(next)
        },
        removeFromCart: (req, res, next) => {
            const { bookId, userId } = req.params

            models.User.updateOne({ _id: userId }, { $pull: { cart: bookId } })
                .then(updatedUser => {
                    res.send(updatedUser)
                })
                .catch(next)
        },
        removeAllFromCart: (req, res, next) => {
            const { userId } = req.params

            models.User.updateOne({ _id: userId }, { $set: { cart: [] } })
                .then(updatedUser => {
                    res.send(updatedUser)
                })
                .catch(next)
        }
    }
}