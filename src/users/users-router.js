const express = require('express')
const path = require('path')
const UsersService = require('./users-service')

const UsersRouter = express.Router()
const jsonBodyParser = express.json()

UsersRouter
  .post('/', jsonBodyParser, (req, res, next) => {
    const { password, username, } = req.body
    console.log("User saved to db");
    const newUser = {
      username,
      password,
      date_created: 'now()',
    }
    return UsersService.insertUser(
      req.app.get('db'),
      newUser
    )
      .then(user => {
        res
          .status(201)
          // .location(path.posix.join(req.originalUrl, `/${user.id}`))
          .json(UsersService.serializeUser(user))
      })

  })

module.exports = UsersRouter