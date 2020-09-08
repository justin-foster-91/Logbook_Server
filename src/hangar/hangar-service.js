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