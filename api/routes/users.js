const express = require('express');
const router = express.Router();

const userRoutes = require('../controllers/users');

router.get('/', userRoutes.index); // gets all users
router.get('/:id', userRoutes.show); // gets user by user id
router.get('/:id/habits', userRoutes.showHabitsPerUser); // gets all habits per user id
router.post('/', userRoutes.create); // creates user post route


module.exports = router;

