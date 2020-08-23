//URL que voy a acceder de la API

const express = require('express');
const mutantcrontroller = require ('../controllers/MutantController');

const Router = express.Router();

Router.post('/', mutantcrontroller.isMutantController)

module.exports = Router;