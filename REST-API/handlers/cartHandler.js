const models = require('../models')
const config = require('../config/config')
const utils = require('../utils')

module.exports = {
    get: {
        getCartBooks: (req, res, next) => {
            const { userId } = req.params

            models.User.findOne({ _id: userId }).populate('Book')
                .then(user => {
                    console.log("cart: ", user.cart);
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
                    console.log('updatedUser', updatedUser)
                    res.send(updatedUser)
                })
                .catch(next)
        },
        removeFromCart: (req, res, next) => {
            const { _id } = req.user
            const bookId = req.params.id

            models.User.updateOne({ _id }, { $pull: { cart: bookId } })
                .then(updatedUser => {
                    console.log('updatedUser', updatedUser)
                    res.send(updatedUser)
                })
                .catch(next)
        }
    }
}