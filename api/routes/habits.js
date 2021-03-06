const express = require('express');
const router = express.Router();


// auth&auth
// const {verifyToken} = require("../middleware/auth");

/*********************************** habit routes ***********************************/
const habitRoutes = require('../controllers/habits');

// gets all habits
router.get('/', habitRoutes.index); 

// gets habit by habit id
router.get('/:id', habitRoutes.showHabitbyHabitId); 

// gets habit by user id
router.get('/user/:id', habitRoutes.showHabitsbyUser); 

// creates habit route
router.post('/', habitRoutes.create); 

// router.patch('/:id', habitRoutes.update); update habit route

//endpoint for the delete habit
router.delete('/:id', habitRoutes.destroy); 
/*********************************** habit routes ***********************************/

module.exports = router;
