const app = require('./server');

// set up port
const port = process.env.PORT || 3000;

// start server
app.listen(port, () => console.log(`Express now departing from port ${port} for the Habit Tracker - Grabbit!`));
