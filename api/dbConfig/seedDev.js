const db = require('./init');
const fs = require('fs');

// Use the dev_seeds.sql file to seed and initialize database
const seeds = fs.readFileSync(__dirname + '/dev_seeds.sql').toString();

db.query(seeds, () => console.log('Dev database seeded!'));
