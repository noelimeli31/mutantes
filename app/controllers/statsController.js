const modelsadn = require ('../models/adn');
const mutant = require('../services/mutant');
const error = require('../errorLog/error');
const mongoose = require('mongoose');

//devuelvo la cantidad de mutantes, humanos y su ratio.
async function statsCount(req,res){

    //busco en la base de datos la cantidad de adn mutante y adn humano
    const mutants = await modelsadn.countDocuments({ result: true });
    const humans = await modelsadn.countDocuments( {result: false });
    const ratio = mutants/(mutants + humans).toPrecision(2);//.toFixed(2); //para formatear el numero
    return res.status(200).json({
        'count_mutant_dna': mutants,
        'count_human_dna': humans,
        ratio,
    })
}

module.exports = {statsCount};