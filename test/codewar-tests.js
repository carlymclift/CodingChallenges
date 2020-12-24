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

    it('Find numbers which are divisible by given number', () => {
      expect(kata8.divisibleBy([1,2,3,4,5,6], 2)).to.deep.equal([2,4,6])
      expect(kata8.divisibleBy([1,2,3,4,5,6], 3)).to.deep.equal([3,6])
      expect(kata8.divisibleBy([0,1,2,3,4,5,6], 4)).to.deep.equal([0,4])
      expect(kata8.divisibleBy([0], 4)).to.deep.equal([0])
      expect(kata8.divisibleBy([1,3,5], 2)).to.deep.equal([])
    })

  })
})