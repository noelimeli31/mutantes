const express = require('express');
//configuracion servidor
const bodyParser = require('body-parser');
const { modelNames } = require('mongoose');

const App = express();

const mutantRoutes = require('./routes/MutantRoutes');
const statsRoutes = require('./routes/statRoutes');

//configuraciones para manejar peticiones y enviar respuesta en formato JSON
App.use(bodyParser.json());
App.use(bodyParser.urlencoded({ extended: false }))
App.use('/mutant',mutantRoutes);
App.use('/stats',statsRoutes);


module.exports = App;
