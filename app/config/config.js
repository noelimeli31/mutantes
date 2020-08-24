//configuracion de puerto y conexion a la BD
module.exports = {
    PORT: process.env.PORT || 3000,
    DB: process.env.DB || `mongodb://localhost:${process.env.PORT}/mutantes`
}