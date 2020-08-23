const adnmodel = require('../models/adn');
const mutant = require('../services/mutant');
const errors = require('../errorLog/error');
const mongoose = require('mongoose');
const app = require('../app');
const { ObjectId } = require('mongodb');
const { Nonsquarematrix } = require('../errorLog/error');

const mutantSequence = ['AAAA', 'TTTT', 'CCCC', 'GGGG'];//secuencia de al menos longitud 4 valida
const valid = /^ATCG/;//falta esta validacion

async function isMutantController(req, res) {
    const adn = req.body.adn;

    //inicio validaciones 
    // if ((valid.test(adn))) {
    //     res.status(errors['validSequence'].status).json({ result: errors['validSequence'].message });
    //     return;
    // };
    
    if ((adn.find(Number))) {
        res.status(errors['validSequence'].status).json({ result: errors['validSequence'].message });
        return;
    };
    

    if (adn.length < mutantSequence.length) {
        res.status(errors['Nonsquarematrix'].status).json({ result: errors['Nonsquarematrix'].message });
        return;
    };
    //Fin validaciones

    //busco primero el ADN ingresado
    const resultSearch = await adnmodel.findOne({ adn: adn });

    if (!resultSearch) { //pregunto primero si la funcion de busqueda encontro el mismo ADN en la BD o no
        if (mutant.isMutant(adn)) { //pregunto al servicio /mutant para saber si es mutante el ADN ingresado

            await adnmodel.create({ adn: adn, result: true })
                .then(res.status(200).json({ result: 'ADN MUTANTE' }));

        } else {
            await adnmodel.create({ adn: adn, result: false })
                .then(res.status(403).json({ result: 'ADN HUMANO' }));

        }
    } else {
        res.status(403).json({ result: 'El ADN A ANALIZAR YA EXISTE, INGRESE OTRA SECUENCIA' });
    }

}

module.exports = { isMutantController };