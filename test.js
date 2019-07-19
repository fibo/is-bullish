const assert = require('assert')

const isBullish = require('./is-bullish.js')

assert.ok(isBullish([1, 2, 4, 3]))
