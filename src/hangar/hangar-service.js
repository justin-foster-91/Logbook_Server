const jwt = require('jsonwebtoken')
const config = require('../config')


const HangarService = {
  getShipsWithUser(db, user) {
    const ships = db('user_ships')
      .where({ user_id: user.id })
      return (
        ships
      );
  },
  getShipsWithUserAndId(db, user, ship_id) {
    const ship = db('user_ships')
      .where({ user_id: user.id, id: ship_id })
      .first()
      return (
        ship
      );
  },
  deleteShipByUserAndId(db, user, ship_id) {
    return db('user_ships')
    .where({ user_id: user.id, id: parseInt(ship_id, 10) })
    .delete()
  },
  changeShipPart(db, shipId, partType, partName) {
    // console.log('Test');
    return db('user_ships').update(partType, partName).where({ id: shipId }).returning('*')
    // const ship = db('user_ships')
    //   .where({ id: shipId })
    //   .first()
    //   return (
    //     ship
    //   );
  },
  createShipForUser(db, user) {
    return db('user_ships').insert({
      user_id: user.id, 
      ship_name: 'New Ship', 
      core: 'Micron Light', 
      thrusters: 'T6 thrusters', 
      armor: 'Mk 1 armor', 
      computer: 'Basic Computer', 
      defenses: 'Mk 1 defenses', 
      sensors: 'Cut-rate', 
      shields: 'Mk 1 Basic Shields', 
      engines: 'Signal Basic'
    })
    .returning('*')
  },
  verifyJwt(token) {
    return jwt.verify(token, config.JWT_SECRET, {
      algorithms: ['HS256'],
    })
  },
  parseBasicToken(token) {
    return Buffer
      .from(token, 'base64')
      .toString()
      .split(':')
  },
}

module.exports = HangarService