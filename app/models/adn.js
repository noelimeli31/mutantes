const mongoose = require ('mongoose');
const { ObjectId } = require('mongodb');

//defino el modelo de mi JSON(atributos)
const AdnSchema = new mongoose.Schema({
    adn: [{ type: String, require: true}, ObjectId],
    result: Boolean ,
    
});

const adn = mongoose.model('Adn', AdnSchema);

module.exports = adn;