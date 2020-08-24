//lanzar el servidor
const express = require ('express');
const Database = require('../config/mutantdatabase');
const CONFIG = require('../config/config');
const App = require('../app');

Database.connect();

App.listen(CONFIG.PORT, function(error){
    if(error) return console.log(error);
    console.log(`Servidor corriendo en puerto: ${CONFIG.PORT}`);
});
