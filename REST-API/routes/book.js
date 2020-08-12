const handlers = require('../handlers/handlers')
const router = require('express').Router()

router.get('/', handlers.book.get.getBooks)
router.get('/:id', handlers.book.get.getBook)

router.post('/addToCart/:id', handlers.cart.put.addToCart)

module.exports = router