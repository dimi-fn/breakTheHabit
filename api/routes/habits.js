const express = require('express');
const router = express.Router();

const habitRoutes = require('../controllers/habits');


router.get('/', habitRoutes.index); // gets all habits
router.get('/:id', habitRoutes.show); // gets habit by id
router.post('/', habitRoutes.create); // creates habit route
// router.patch('/:id', habitRoutes.update); update habit route
router.delete('/:id', habitRoutes.destroy); //endpoint for the delete habit

module.exports = router;

