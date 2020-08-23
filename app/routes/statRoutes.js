//URL que voy a acceder de la API

const express = require('express');
const statsController = require('../controllers/statsController');

const Router = express.Router();

//devuelvo cantidad de mutantes, humanos y ratio
Router.get('/', statsController.statsCount)

module.exports = Router;