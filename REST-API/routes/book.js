const handlers = require('../handlers/handlers')
const router = require('express').Router()

router.get('/', handlers.book.get.getBooks)
router.get('/book/:id', handlers.book.get.getBook)

router.get('/addToCart/:bookId/:userId', handlers.cart.put.addToCart)

module.exports = router