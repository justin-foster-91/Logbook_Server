bcrypt = require('bcryptjs')
const xss = require('xss')

const UsersService = {
  insertUser(db, newUser) {
    return db
      .insert(newUser)
      .into('logger_users')
      .returning('*')
      .then(([user]) => user)
  },
  serializeUser(user) {
    return {
      id: user.id,
      username: xss(user.username),
      date_created: new Date(user.date_created),
    }
  }
}

module.exports = UsersService