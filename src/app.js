require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV } = require('./config')
const authRouter = require('./auth/auth-router')
const usersRouter = require('./users/users-router')
const hangarRouter = require('./hanger/hangar-router')

const app = express()

// LEARN: The example option has a skip at the end. Do I need that?
const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption))

app.use(helmet())
app.use(cors())

app.use('/api/auth', authRouter)
app.use('/api/users', usersRouter)
app.use('/api/hangar', hangarRouter)

// epStart = EndPointStart, this automatically changes the server test
const epStart = '/';
const startupGreet = 'Welcome aboard Captain, all systems online.';
app.get(epStart, (req, res) => {
  res.send(startupGreet)
})

app.use(function errorHandler(error, req, res, next) {
  let response;
  if (NODE_ENV === 'production') {
    response = { error: { message: "server error" } };
  } else {
    console.error(error);
    response = { message: error.message, error };
  }
  res.status(500).json(response);
});

module.exports = { app, epStart, startupGreet }