const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const {port} = require('./config/config').server;

// Init DB connection
require('./config/db');

const app = express();

// Load routes
const routes = require('./routes');

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes
app.use('/npc', routes.npc);

// Error handler
app.use(function (err, req, res, next) {
  return res.status(500).send({
    msg: err.message
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server started\nVisit the page http://localhost:${port}`);
});
