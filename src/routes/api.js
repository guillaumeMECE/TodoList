
const { Router } = require('express');

const router = Router();

/**
 * Middlewares imports
 */


/**
 * Controllers imports
 */
const read = require('../controllers/Todo/Read');

/**
 * Routes
 */
router.get('/all', read);

module.exports = router;
