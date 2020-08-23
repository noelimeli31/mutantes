const adn = require("../models/adn");
const app = require('../app');

//Estos valores prodrían estar parametrizados en la base de datos(ya que por requerimiento podría cambiar).
//Por ahora los manejo así
const sequenceRequerid = 2;
const validSequence = 4;
const longitud = 3;

let sequencesMutant = 0;

exports.isMutant = function (Adn) {
    let adnArray = [[]];
    //invoco función para crear matriz NxN
    adnArray = createMatriz(Adn);
    let countSequence = 0;
    
    //empiezo a recorrer la matriz
    for (let y = 0; y < adnArray[0].length; y++) {
        for (let x = 0; x < adnArray[0].length; x++) {
            //asigno el caracter de la fila y columna extraida
            let assignedCharacter = adnArray[y][x];
            
            //invoco primero al que me parece que va a recorrer más rapido
            //envio indice de la fila y columna, el caracter a comparar y la matriz
           if (horizontalSearch(y, x, assignedCharacter, adnArray))
                countSequence++;
        
            if (verticalSearch(y, x, assignedCharacter, adnArray))
                countSequence++;
        
            if (obliqueSearch(y, x, assignedCharacter, adnArray))
                countSequence++;
            
                //pregunto si llego a la secuencia requerida y corto, si no es así...sigo
                if (countSequence > sequenceRequerid)
                break;

        }
        
        if (countSequence > sequenceRequerid)
            break;
    }
    
    //retorno el resultado final una vez obtenida las dos secuencias minimas requeridas
    if (countSequence > sequenceRequerid) {
        return true;
    }
    else
        return false;
}

//
const horizontalSearch = function (i, j, assignedCharacter, adnArray) {
   //si la columna es mayor a 3, dejo de buscar.
    if (longitud - (j + 1) < 0) {
        return false;
    }

    let result = true;
    //lo recorro 4 veces para buscar si existe la secuencia
    for (let x = 0; x < validSequence; x++) {
        if (adnArray[i][j + x] !== assignedCharacter) {
            result = false;
            break;
        }
    }
    return result;
}

const verticalSearch = function (i, j, assignedCharacter, adnArray) {
   //si la fila es mayor a 3, dejo de buscar.
    if (longitud - (i + 1) < 0) {
        return false;
    }
 
    let result = true;
    //lo recorro 4 veces para buscar si existe la secuencia
    for (let x = 0; x < validSequence; x++) {
        if (adnArray[i + x][j] !== assignedCharacter) {
            result = false;
            break;
        }
    }
    return result;
}

const obliqueSearch = function (i, j, assignedCharacter, adnArray) {
  
    //si la fila y columna es mayor a 3, dejo de buscar.
    if ((longitud - (i + 1) < 0) || (longitud - (j + 1) < 0)) {
        return false;
    }

    let result = true;
    //lo recorro 4 veces para buscar si existe la secuencia
    for (let x = 0; x < validSequence; x++) {
        if (adnArray[i + x][j + x] !== assignedCharacter) {
            result = false;
            break;
        }
    }
    return result;
}

//función para crear la matriz NxN para luego realizar las búsquedas
const createMatriz = function (adnArray) {
    const newArrray = [[]];
    for (let i = 0; i < adnArray.length; i++) {
        newArrray[i] = new Array(adnArray.length);
    };

    adnArray.forEach((Adn, x) => {
        //uso sintaxis extendida para poder expandir los caracteres(function spread)
        //voy tomando por separado caracterer por caracter

        [...Adn].forEach((char, y) => {
            newArrray[x][y] = char;
        })
    });

    return newArrray;
}

