const assert = require('assert')

const isBullish = require('./is-bullish.js')

assert.ok(isBullish([1, 20, 400, 0]) === false)

assert.ok(isBullish([1, 2, 4, 3]) === true)
