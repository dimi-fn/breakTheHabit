// setup requires
const express = require('express');
const cors = require('cors');
const server = express();

// setup uses
server.use(cors());
server.use(express.json());

/* setup routes */
// users
// const userRoutes = require('./routes/users');
// server.use('/users', userRoutes);

// habits
// const habitRoutes = require('./routes/habits');
// server.use('/habits', habitRoutes);
/* setup routes */

// send message on post 3000 upon successfull server running
server.get('/', (req, res) => res.send('Welcome to the Habit Tracker - Grabbit!'));

// export the express server
module.exports = server;
