const express = require('express')
const path = require('path')
const UsersService = require('./users-service')

const UsersRouter = express.Router()
const jsonBodyParser = express.json()

UsersRouter
  .post('/', jsonBodyParser, async (req, res, next) => {
    const { password, username, } = req.body

    for (const field of ['username', 'password'])
    if (!req.body[field])
      return res.status(400).json({
        error: `Missing '${field}' in request body`
      })

    // TODO: check user_name doesn't start with spaces

    const passwordError = UsersService.validatePassword(password)

    if (passwordError)
      return res.status(400).json({ error: passwordError }) 
    
    try{
      const hasUserWithUserName = await UsersService.hasUserWithUserName(
        req.app.get('db'),
        username
      )
      if (hasUserWithUserName){
        return res.status(400).json({ error: `Username already taken` })
      }

      const hashedPassword = await UsersService.hashPassword(password)

      console.log("User saved to db");
      const newUser = {
        username,
        password: hashedPassword,
        date_created: 'now()',
      }
      const user = await UsersService.insertUser(
        req.app.get('db'),
        newUser
      )
      return res
        .status(201)
        // .location(path.posix.join(req.originalUrl, `/${user.id}`))
        .json(UsersService.serializeUser(user))
        
    } catch(e) {
      return next;
    }

  })

module.exports = UsersRouter