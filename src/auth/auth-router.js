const express = require('express')
const AuthService = require('./auth-service')
const { requireAuth } = require('../middleware/jwt-auth')

const authRouter = express.Router()
const jsonBodyParser = express.json()

authRouter
  .post('/login', jsonBodyParser,(req, res, next) => {
    // console.log("/login");
    const { username, password } = req.body
    const loginUser = { username, password }

    for (const [key, value] of Object.entries(loginUser))
      if (value == null)
        return res.status(400).json({
          error: `Missing '${key}' in request body`
        })
    
    AuthService.getUserWithUserName(
      req.app.get('db'),
      loginUser.username
    )
      .then(dbUser => {
        if (!dbUser)
          return res.status(400).json({
            error: 'Incorrect username or password',
          })

        return AuthService.comparePasswords(loginUser.password, dbUser.password)
          .then(compareMatch => {
            // console.log("Inside password compare", compareMatch);
            if (!compareMatch)
              return res.status(400).json({
                error: 'Incorrect username or password',
              })

            const sub = dbUser.username
            const payload = { user_id: dbUser.id }
            res.send({
              authToken: AuthService.createJwt(sub, payload),
            })
          })
      })
      .catch(next)
  })

authRouter.post('/refresh', requireAuth, (req, res) => {
  const sub = req.user.username
  const payload = { user_id: req.user.id }
  res.send({
    authToken: AuthService.createJwt(sub, payload),
  })
})

module.exports = authRouter


  //   try{
  //     // LEARN: Do these need to be used somewhere?
  //     const getUserWithUserName = await AuthService.getUserWithUserName(
  //       req.app.get('db'),
  //       loginUser.username
  //     )
  //     if (!dbUser){
  //       return res.status(400).json({
  //         error: 'Incorrect username or password',
  //       })
  //     }
  //     const comparePasswords = await AuthService.comparePasswords(loginUser.password, dbUser.password)
  //     if (!compareMatch){
  //       return res.status(400).json({
  //         error: 'Incorrect username or password',
  //       })
  //     }
  //     const sub = dbUser.username
  //     const payload = { user_id: dbUser.id }
  //     //LEARN: Is this res.send formatted properly?
  //     res.send({
  //       authToken: AuthService.createJwt(sub, payload),
  //     })
  //   } catch(e) {
  //     return next;
  //   }
  // })
