
const { Router } = require('express');

const router = Router();

/**
 * Middlewares imports
 */


/**
 * Controllers imports
 */
const read = require('../controllers/Todo/Read');
const create = require('../controllers/Todo/Create');
/**
 * Routes
 */
router.get('/all', read);
router.post('/add', create);

module.exports = router;
