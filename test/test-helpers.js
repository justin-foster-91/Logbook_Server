const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

function makeUsersArray() {
  return [
    {
      id: 1,
      username: 'test-user-1',
      password: 'password',
      date_created: new Date('2029-01-22T16:28:32.615Z'),
    },
    {
      id: 2,
      username: 'test-user-2',
      password: 'password',
      date_created: new Date('2029-01-22T16:28:32.615Z'),
    },
    {
      id: 3,
      username: 'test-user-3',
      password: 'password',
      date_created: new Date('2029-01-22T16:28:32.615Z'),
    },
    {
      id: 4,
      username: 'test-user-4',
      password: 'password',
      date_created: new Date('2029-01-22T16:28:32.615Z'),
    },
  ]
}

function makeShipsArray() {
  return [
    {
      id: 1,
      user_id: 1,
      ship_name: 'Ship 2',
      core: 'Micron Light',
      thrusters: 'T6 thrusters',
      armor: 'Mk 1 armor',
      computer: 'Basic Computer',
      defenses: 'Mk 1 defenses',
      sensors: 'Cut-rate',
      shields: 'Mk 1 Basic Shields',
      engines: 'Signal Basic',
    }
  ]
}

function makeArticlesFixtures() {
  const testUsers = makeUsersArray()
  const testShips = makeShipsArray()
  return { testUsers, testShips }
}

function cleanTables(db) {
  return db.transaction(trx =>
    trx.raw(
      `TRUNCATE
        user_ships,
        logbook_users
      `
    )
    .then(() =>
      Promise.all([
        trx.raw(`ALTER SEQUENCE logbook_users_id_seq minvalue 0 START WITH 1`),
        trx.raw(`ALTER SEQUENCE user_ships_id_seq minvalue 0 START WITH 1`),
        trx.raw(`SELECT setval('logbook_users_id_seq', 0)`),
        trx.raw(`SELECT setval('user_ships_id_seq', 0)`),
      ])
    )
  )
}

function cleanShipTables(db) {
  return db.transaction(trx =>
    trx.raw(
      `TRUNCATE
        user_ships
      `
    )
    .then(() =>
      Promise.all([
        trx.raw(`ALTER SEQUENCE user_ships_id_seq minvalue 0 START WITH 1`),
        trx.raw(`SELECT setval('user_ships_id_seq', 0)`),
      ])
    )
  )
}

function makeAuthHeader(user, secret = process.env.JWT_SECRET) {
  const token = jwt.sign({ user_id: user.id }, secret, {
    subject: user.username,
    algorithm: 'HS256',
  })
  return `Bearer ${token}`
}

function seedUsers(db, users) {
  const preppedUsers = users.map(user => ({
    ...user,
    password: bcrypt.hashSync(user.password, 1)
  }))
  return db.into('logbook_users').insert(preppedUsers)
    .then(() =>
      // update the auto sequence to stay in sync
      db.raw(
        `SELECT setval('logbook_users_id_seq', ?)`,
        [users[users.length - 1].id],
      )
    )
}

function seedShips(db, ships) {
  const preppedShips = ships.map(ship => ({
    ...ship
  }))
  return db.into('user_ships').insert(preppedShips)
    .then(() =>
      // update the auto sequence to stay in sync
      db.raw(
        `SELECT setval('user_ships_id_seq', ?)`,
        [ships[ships.length - 1].id],
      )
    )
}

module.exports = {
  makeUsersArray,
  makeShipsArray,
  // makeArticlesArray,
  // makeExpectedArticle,
  // makeExpectedArticleComments,
  // makeMaliciousArticle,
  // makeCommentsArray,

  makeArticlesFixtures,
  cleanTables,
  cleanShipTables,
  // seedArticlesTables,
  // seedMaliciousArticle,
  makeAuthHeader,
  seedUsers,
  seedShips,
}