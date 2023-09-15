const { describe, it, beforeEach, afterEach } = require('mocha');
const { use, expect } = require('chai');
const sinonChai = require('sinon-chai');
const sinon = require('sinon');

// OUT
const { list } = require('../controllers/todo.cjs');
const Todo = require('../models/todo.cjs');

use(sinonChai);


describe('todo constrollers', () => {
  describe('list controller', () => {
    // async car fonction under test await (promise)
    it('should call res.json with data from model', async () => {
      // Arrange
      const req = {};
      const res = {
        json: sinon.spy(),
      };

      const next = () => {};

      sinon.mock(Todo).expects('find').resolves([{id: 1, title: 'ABC'}]);

      // Act
      await list(req, res, next);

      // Assert
      expect(res.json).to.have.been.calledOnceWithExactly([{id: 1, title: 'ABC'}]);
      sinon.verifyAndRestore();
    })
  })
})
