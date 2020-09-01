const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const logger = require('morgan');

const app = express();
app.use(logger('dev'));

//help in parsing request body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//connecting routes
require('./routes')(app)

module.exports = app;
