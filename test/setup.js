process.env.TZ = 'UCT'
process.env.NODE_ENV = 'test'
process.env.JWT_SECRET = 'super-secret'
process.env.JWT_EXPIRY = '3m'

const { expect } = require('chai')
const supertest = require('supertest')

require('dotenv').config()

process.env.TEST_DB_URL = process.env.TEST_DB_URL
  || "postgresql://postgres@localhost/logbook"

global.expect = expect
global.supertest = supertest