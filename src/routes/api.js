
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
const update = require('../controllers/Todo/Update');
/**
 * Routes
 */
router.get('/all', read);
router.post('/add', create);
router.delete('/delete/:id', remove);
router.patch('/update/:id', update);

module.exports = router;
