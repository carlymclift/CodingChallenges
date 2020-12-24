const chai = require('chai');
const expect = chai.expect;

const { kata8 } = require('../codewars/codewars')

describe('Challenges', () => {

  describe('Kata 8', () => {

    it('Multiply', () => {
      expect(kata8.multiply(1,1)).to.deep.equal(1)
      expect(kata8.multiply(2,1)).to.deep.equal(2)
      expect(kata8.multiply(2,2)).to.deep.equal(4)
      expect(kata8.multiply(3,5)).to.deep.equal(15)
    })

  })
})