const handlers = require('../handlers/handlers')
const router = require('express').Router()

router.get('/:userId', handlers.cart.get.getCartBooks)

router.post('/removeFromCart/:id', handlers.cart.put.removeFromCart)

module.exports = router