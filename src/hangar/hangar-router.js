const express = require('express')
const HangarService = require('./hangar-service')
const { requireAuth } = require('../middleware/jwt-auth')
const parts_lists = require('./parts_lists')

const hangarRouter = express.Router()
const jsonBodyParser = express.json()

const { partsList } = parts_lists

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
  .post(jsonBodyParser, (req, res, next) => {
    HangarService.createShipForUser( 
      req.app.get('db'),
      req.user
      )
    .then(ship => {
      // console.log(ship);
      res.status(200).json(ship[0]);
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
        const partAndOptions = (partType) => {
          return {name: ship[partType], 
          options: partsList[partType + 'List'], 
          cost: partsList.findCost(partType + 'List', ship[partType])}
        }
        ship.ship_parts = {
          thrusters: partAndOptions('thrusters'),
          core: partAndOptions('core'),
          armor: partAndOptions('armor'),
          computer: partAndOptions('computer'),
          defenses: partAndOptions('defenses'),
          sensors: partAndOptions('sensors'),
          shields: partAndOptions('shields'),
          engines: partAndOptions('engines')
        }
        res.status(200).json(ship)
        // console.log("partsList: ", partsList[0]);
      } else {
        res.sendStatus(404)
      }
    })
  })
  .delete((req, res, next) => {
    HangarService.deleteShipByUserAndId( 
      req.app.get('db'),
      req.user, req.params.ship_id
      )
      .then(() =>
        res.status(200).json({message: 'ok'})
      )
  })


hangarRouter
  .route('/:ship_id')
  .all(requireAuth)
  // .all(checkShipExists)
  .post(jsonBodyParser, (req, res, next) => {
    const { partType, partName } = req.body
    
    HangarService.changeShipPart( 
      req.app.get('db'),
      req.params.ship_id, partType, partName
    )

    .then(ship => {
      ship = ship[0]
      if(ship){
        ship[partType] = partName
        const partAndOptions = (partType) => {
          return {name: ship[partType], 
          options: partsList[partType + 'List'], 
          cost: partsList.findCost(partType + 'List', ship[partType])}
        }
        ship.ship_parts = {
          thrusters: partAndOptions('thrusters'),
          core: partAndOptions('core'),
          armor: partAndOptions('armor'),
          computer: partAndOptions('computer'),
          defenses: partAndOptions('defenses'),
          sensors: partAndOptions('sensors'),
          shields: partAndOptions('shields'),
          engines: partAndOptions('engines')
        }
        res.status(200).json(ship)
      } else {
        res.sendStatus(404)
      }
    })
  })

module.exports = hangarRouter 