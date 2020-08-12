const router = require('../routes/routes');

module.exports = (app) => {

    app.use('/api/user', router.user);
    app.use('/api/books', router.book);
    app.use('/api/cart', router.cart);

    app.use('*', (req, res, next) => res.send('<h1> Something went wrong. Try again. :thumbsup: </h1>'))
};