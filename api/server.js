// setup requires
const express = require('express');
const cors = require('cors');
const server = express();

// setup uses
server.use(cors());
server.use(express.json());

/* setup routes for users*/
const userRoutes = require('./routes/users');
server.use('/users', userRoutes);
/* setup routes for users*/

/* setup routes for habits*/
const habitRoutes = require('./routes/habits');
server.use('/habits', habitRoutes);
/* setup routes for habits*/

const authRoutes = require('./routes/auth');
server.use('/auth', authRoutes);

// send message on post 3000 upon successfull server running
server.get('/', (req, res) => res.send('Welcome to the Habit Tracker - Grabbit!'));

// export the express server
module.exports = server;
