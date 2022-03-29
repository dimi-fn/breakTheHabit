const express = require('express');
const router = express.Router();


// auth&auth
const {verifyToken} = require("../middleware/auth");

/*********************************** habit routes ***********************************/
const habitRoutes = require('../controllers/habits');

// gets all habits
router.get('/', verifyToken, habitRoutes.index); 

// gets habit by habit id
router.get('/:id', verifyToken, habitRoutes.showHabitbyHabitId); 

// gets habit by user id
router.get('/user/:id', verifyToken, habitRoutes.showHabitsbyUser); 

// creates habit route
router.post('/', verifyToken, habitRoutes.create); 

// router.patch('/:id', habitRoutes.update); update habit route

//endpoint for the delete habit
router.delete('/:id', verifyToken, habitRoutes.destroy); 
/*********************************** habit routes ***********************************/

module.exports = router;
