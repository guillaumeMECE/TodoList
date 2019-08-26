
const { Router } = require('express');

const router = Router();

/**
 * Middlewares imports
 */

/**
 * Controllers imports
 */
const { Read, Create, Delete, Update } = require('@controllers');

/**
 * Routes
 */
router.get('/all', Read);
router.post('/add', Create);
router.delete('/delete/:id', Delete);
router.patch('/update/:id', Update);

module.exports = router;
