const express = require('express')
const HangarService = require('./hangar-service')
const { requireAuth } = require('../middleware/jwt-auth')

const hangarRouter = express.Router()
const jsonBodyParser = express.json()

hangarRouter
  .route('/')
  .all(requireAuth)
  .get((req, res, next) => {
    console.log(req.user);
    HangarService.getShipsWithUser( 
      req.app.get('db'),
      req.user
      )
    .then(ships => {
      console.log(ships)
      res.status(200).json(ships);
      })
  })

hangarRouter
  .route('/:ship_id')
  .all(requireAuth)
  // .all(checkShipExists)
  .get((req, res) => {
    // res.json(ArticlesService.serializeArticle(res.article))
    res.json({
      ship_name: "Todd", 
      ship_parts: [{frame: "thisThing", cost: 12}]
    })
  })
  // .post('/hangar', jsonBodyParser,(req, res, next) => {

  // })
module.exports = hangarRouter