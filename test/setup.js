const { expect } = require('chai')
const supertest = require('supertest')

require('dotenv').config()

process.env.TEST_DB_URL = process.env.TEST_DB_URL
  || "postgresql://postgres@localhost/logbook"

global.expect = expect
global.supertest = supertest