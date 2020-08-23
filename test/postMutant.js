process.env.NODE_ENV = 'test';

const expect = require('chai').expect;
const request = require('supertest');

const app = require('../app/app.js');
const conn = require('../app/config/mutantdatabase.js');

describe('POST /ADN', () => {
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

  it('OK, post new sequence ADN Human', (done) => {
    this.timeout(5000);
    setTimeout(done, 5000);
    request(app).post('/mutant')
      .send({ 'dna': '["ATGCGA", "CAGTGC", "TTATTT", "AGACGG", "GCGTCA", "TCACTG"]'})
      .then((res) => {
        const body = res.body;
        expect(403);
       done();
      }).catch(done);
      
  });

  it('OK, post new sequence ADN Mutant', (done) => {
    this.timeout(5000);
    setTimeout(done, 5000);
    request(app).post('/mutant')
      .send({ 'dna': '["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]'})
      .then((res) => {
        const body = res.body;
        expect(200);
       done();
      }).catch(done);
      
  });
 
})