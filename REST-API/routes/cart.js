const handlers = require('../handlers/handlers')
const router = require('express').Router()

router.get('/', handlers.cart.get.getCartBooks)

router.post('/removeFromCart', handlers.cart.put.removeFromCart)

module.exports = router