const express = require('express');
const router = express.Router();

const userRoutes = require('../controllers/users');

router.get('/', userRoutes.index); // gets all users
router.get('/:id', userRoutes.show); // gets user by id
router.post('/', userRoutes.create); // creates user post route


module.exports = router;

