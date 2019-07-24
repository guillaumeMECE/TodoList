
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
const remove = require('../controllers/Todo/Delete');

/**
 * Routes
 */
router.get('/all', read);
router.post('/add', create);
router.delete('/delete/:id', remove);

module.exports = router;
