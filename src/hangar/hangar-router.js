const express = require('express')
const HangarService = require('./hangar-service')
const { requireAuth } = require('../middleware/jwt-auth')
const parts_lists = require('./parts_lists')

const hangarRouter = express.Router()
const jsonBodyParser = express.json()

const { thrusterList } = parts_lists

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
    HangarService.getShipsWithUserAndId( 
      req.app.get('db'),
      req.user, req.params.ship_id
      )
    .then(ship => {
      // console.log(req.params.ship_id);
      // res.status(207).json({
      //   ship_name: "Todd", 
      //   ship_parts: [{frame: "Default Frame", cost: 12}]
      // })
      if(ship){
        ship.ship_parts = {
          thrusters: {name: ship.thrusters, options: thrusterList, cost: 3}
        }
        res.status(208).json(ship)
        console.log("thrusterList: ", thrusterList[0].cost)
        console.log("thrusterList: ", thrusterList[0].name)
      } else {
        res.sendStatus(404)
      }
    })
  })
module.exports = hangarRouter 