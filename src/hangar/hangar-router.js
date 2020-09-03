const express = require('express')
const HangarService = require('./hangar-service')
const { requireAuth } = require('../middleware/jwt-auth')

const hangarRouter = express.Router()
const jsonBodyParser = express.json()

hangarRouter
  .route('/')
  .all(requireAuth)
  .get((req, res, next) => {
    // console.log(req.user);

  })
  // .post('/hangar', jsonBodyParser,(req, res, next) => {

  // })
module.exports = hangarRouter