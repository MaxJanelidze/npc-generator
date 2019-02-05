const mongoose = require('mongoose');

// Load database credentials
const {host, user, password, db} = require('./config').database;

// Build DB connection string
const URI = `mongodb://${user}:${password}@${host}/${db}`

mongoose.Promise = global.Promise;
const database = mongoose.connect(URI, {useNewUrlParser: true});

module.exports = database;