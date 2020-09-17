const knex = require('knex')
const jwt = require('jsonwebtoken')
const { app } = require('../src/app')
const helpers = require('./test-helpers')

describe('Hangar Endpoints', function() {
  let db

  const {
    testUsers,
    testShips,
  } = helpers.makeArticlesFixtures()

  before('make knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DATABASE_URL,
    })
    app.set('db', db)
  })

  after('disconnect from db', () => db.destroy())

  before('cleanup', () => helpers.cleanTables(db))

  afterEach('cleanup', () => helpers.cleanTables(db))

  describe.only(`POST /api/hangar`, () => {
    beforeEach('insert users', () =>
      helpers.seedUsers(
        db,
        testUsers,
      )
    )
    beforeEach('insert ships', () =>
      helpers.seedShips(
        db,
        testShips,
      )
    )

    it(`Unauthorized user receives 401 response`, () => {
      return supertest(app)
      .post('/api/hangar')
      .send({})
      .expect(401)
    })
    it(`User receive 200 response and default ship`, () => {
      return supertest(app)
      .post('/api/hangar')
      .set('Authorization', helpers.makeAuthHeader(testUsers[0]))
      .send({})
      .expect(200)
    })
  })

})
