const handlers = require('../handlers/');
const router = require('express').Router();

router.get('/', handlers.user.get);
router.get('/verify', handlers.user.post.verifyLogin);

router.post('/login', handlers.user.post.login);
router.post('/register', handlers.user.post.register);
router.post('/logout', handlers.user.post.logout);

router.put('/:id', handlers.user.put);

router.delete('/:id', handlers.user.delete);

module.exports = router;