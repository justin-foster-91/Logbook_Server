const express = require('express')
const HangarService = require('./hangar-service')
const { requireAuth } = require('../middleware/jwt-auth')

const hangarRouter = express.Router()
const jsonBodyParser = express.json()

hangarRouter
  .route('/')
  .all(requireAuth)
  .get((req, res, next) => {
    HangarService.getShipsWithUser( 
      req.app.get('db'),
      req.user
      )
    .then(ships => {
      // console.log("Ships: ", ships);
      res.status(200).json(ships);
    })
  })

hangarRouter
  .route('/:ship_id')
  .all(requireAuth)
  // .all(checkShipExists)
  .get((req, res, next) => {
    HangarService.getShipsWithUser( 
      req.app.get('db'),
      req.user
      )
    .then(ship => {
      // Get Specific ship (Dummy data)
      console.log("Ship :", ship[0]);
      res.status(207).json({
        ship_name: "Todd", 
        ship_parts: [{frame: "Default Frame", cost: 12}]
      })
      // res.status(208).json(ship[0].ship_name)
    })
  // .post('/hangar', jsonBodyParser,(req, res, next) => {
  })
module.exports = hangarRouter