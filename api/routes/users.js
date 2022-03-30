const express = require('express');
const router = express.Router();


// auth&auth
// const {verifyToken} = require("../middleware/auth");

/*********************************** user routes ***********************************/
const userRoutes = require('../controllers/users');

// gets all users
router.get('/', userRoutes.index); 

// gets user by user id
router.get('/:id', userRoutes.show); 

// creates user post route
router.post('/', userRoutes.create); 
/*********************************** user routes ***********************************/

module.exports = router;
