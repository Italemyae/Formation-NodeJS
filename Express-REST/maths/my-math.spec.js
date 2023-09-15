const { describe, it, beforeEach } = require("mocha");

const { expect } = require("chai");
const assert = require('assert');

// OUT
const MyMath = require('./my-math.js')

describe('my-math.js', () => {
  describe('sum function', () => {

    // setup
    beforeEach(() => { })

    it('should add 2 positiones intergers', () => {
      // Arrange
      const a = 1;
      const b = 2;

      // Act
      const res = MyMath.sum(a, b);

      // Assert
      // assert.equal(res, 3); // en natif node
      expect(res).to.equal(3); // acvec chai
    });
  });
});
