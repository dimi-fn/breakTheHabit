const express = require('express');
const router = express.Router();


// auth&auth
const {verifyToken} = require("../middleware/auth");

/*********************************** user routes ***********************************/
const userRoutes = require('../controllers/users');

// gets all users
router.get('/', verifyToken, userRoutes.index); 

// gets user by user id
router.get('/:id', verifyToken, userRoutes.show); 

// creates user post route
router.post('/', verifyToken, userRoutes.create); 
/*********************************** user routes ***********************************/

module.exports = router;
