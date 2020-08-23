
const errorsLog = {

    validSequence: {
        status: 400,
        message: 'Error al procesar el ADN ingresado. La secuencia debe contener solo las letras A,T,C o G'
    },

    Nonsquarematrix: {
        status: 400,
        message: 'Imposible analizar el ADN. La secuencia minima ingresada para analizar debe ser 4x4'
    }
};

module.exports = errorsLog;