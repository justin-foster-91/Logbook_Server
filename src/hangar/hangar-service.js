const jwt = require('jsonwebtoken')
const config = require('../config')


const HangarService = {
  getShipsWithUser(db, user) {
    const stuff = db('logbook_ships')
      .where({ user_id: user.user_id })
      console.log("Stuff: ", stuff);
      return stuff;
    // [
    //   {id:1, name:"Ship 40"},
    //   {id:2, name:"Ship 2"},
    //   {id:3, name:"Ship 3"},
    //   {id:4, name:"Ship 4"}
    //   ];
    
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