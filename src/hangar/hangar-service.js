const jwt = require('jsonwebtoken')
const config = require('../config')


const HangarService = {
  getShipsWithUserId(db, user_id) {
    return db('logbook_ships')
      .where({ user_id })
      .all()
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