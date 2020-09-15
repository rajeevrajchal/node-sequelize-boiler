const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const logger = require('morgan');
const cors = require('cors')

const app = express();
app.use(cors())
app.use(logger('dev'));

//help in parsing request body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//connecting routes
require('./routes')(app)

module.exports = app;
