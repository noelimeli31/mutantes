//conexion a la base de datos

const mongoose = require ('mongoose');
const CONFIG = require ('./config');


function connect() {
    return new Promise((resolve, reject) => {
  
      if (process.env.NODE_ENV === 'test') {// para poder usar una base de datos fuera de produccion para los test
        const Mockgoose = require('mockgoose').Mockgoose;
        const mockgoose = new Mockgoose(mongoose);
  
        mockgoose.prepareStorage()
          .then(() => {
            mongoose.connect(CONFIG.DB,
              { useNewUrlParser: true, useCreateIndex: true })
              .then((res, err) => {
                if (err) return reject(err);
                resolve();
              })
          })
      } else {
          mongoose.connect(CONFIG.DB,
            { useNewUrlParser: true, useCreateIndex: true })
            .then((res, err) => {
              if (err) return reject(err);
              resolve();
            })
      }
    });
  }
  
  function close() {
    return mongoose.disconnect();
  }
  
  module.exports = { connect, close };