const { describe, it, beforeEach, afterEach } = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');
const sinonChai = require('sinon-chai');
const sinon = require('sinon');
const app = require('../app');

// OUT
const { list } = require('../controllers/todo.cjs');
const Todo = require('../models/todo.cjs');

chai.use(sinonChai);
chai.use(chaiHttp);


describe('routes todo', () => {
  describe('GET /API/todos', () => {
    // async car fonction under test await (promise)
    it('should return status 200 with data from database', async () => {
      // Arrange
      const req = chai.request(app).get('/api/todos');
      sinon.mock(Todo).expects('find').resolves([{id: 1, title: 'ABC'}]);

      // Act
      const res = await req;

      // Assert
      chai.expect(res).to.have.status(200);
      chai.expect(res.body).to.deep.equal([{id: 1, title: 'ABC'}]);
      sinon.verifyAndRestore();
    })
  })
})


// Excercice 2
// En vous inspirant du test ci dessous
// tester la route GET /api/tosods/1
// (status 200)
// (findById mocké appelé avec "1")
// (res/body deep equal le resolve du mock)
