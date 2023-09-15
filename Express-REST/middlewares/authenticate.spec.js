const { describe, it, beforeEach, afterEach } = require('mocha');
const { use, expect } = require('chai');
const sinonChai = require('sinon-chai');
const sinon = require('sinon');

// OUT
const authenticate = require('./authenticate.js');

// dependances
const { tokens } = require('../models/user.cjs');

use(sinonChai);

describe('authenticate middleware', () => {
  describe('with valid token', () => {

    beforeEach(() => {
      tokens.push('ABC123');
    });

    afterEach(() => {
      tokens.pop();
    });


    it('should call next when token is valid', () => {
      // Arrange

      const req = {
        headers: {
          authorization: 'Bearer ABC123',
        },
      };
      const res = {
        json: sinon.spy(),
      };
      const next = sinon.spy();

      // Act
      authenticate(req, res, next);

      // Assert
      expect(next).to.have.been.called();
    });

    tokens.pop(); // remove 'ABC123'
  });
});
