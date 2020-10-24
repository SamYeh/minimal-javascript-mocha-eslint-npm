import * as calculator from '../lib/calculator.js'
import * as assert from 'assert'

describe('calculator', () => {
  describe('#add', () => {
    it('adds two numbers', () => {
      assert.strictEqual(calculator.add(2, 2), 4)
    })
  })
})
