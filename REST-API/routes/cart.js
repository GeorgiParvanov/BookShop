const handlers = require('../handlers/handlers')
const router = require('express').Router()

router.get('/:userId', handlers.cart.get.getCartBooks)

router.get('/removeFromCart/:bookId/:userId', handlers.cart.put.removeFromCart)
router.get('/removeAllFromCart/:userId', handlers.cart.put.removeAllFromCart)

module.exports = router