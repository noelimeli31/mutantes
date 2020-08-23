process.env.NODE_ENV = 'test';

const expect = require('chai').expect;
const request = require('supertest');

const app = require('../app/app.js');
const conn = require('../app/config/mutantdatabase.js');

describe('GET /stat', () => {
  before((done) => {
    conn.connect()
      .then(() => done())
      .catch((err) => done(err));
  })

  after((done) => {
    conn.close()
      .then(() => done())
      .catch((err) => done(err));
  })

  it('OK, getting human and mutant', (done) => {
    this.timeout(5000);
    setTimeout(done, 5000);
    request(app).get('/stats')
      .then((res) => {
        const body = res.body;
        expect(body.length).to.equal(0);
        done();
      }).catch(done);
      
  });

})