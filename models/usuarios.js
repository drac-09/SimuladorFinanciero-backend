var mongoose = require('mongoose');

var esquema = new mongoose.Schema({
     nombre: String,
     apellido: String,
     correo: String,
     contrasenia: String,
     escenarios: mongoose.SchemaTypes.Mixed
});

module.exports = mongoose.model('usuarios', esquema);