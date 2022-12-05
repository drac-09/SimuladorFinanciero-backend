const express = require('express');                              // Express
const cors = require('cors');                                    // CORS
const bodyParser = require('body-parser')                        // para analizar archivos JSON
const database = require('./modules/database-module');           // Conexión a la base de datos

const usuariosRoute = require('./routers/usuarios-route')        // exporto el archivo route de usuarios


require('dotenv').config();   
const app = express();

app.set('puerto', process.env.PORT || 7777);
app.use(cors());                                                 // Permite comunicacion entre servidores
app.use(express.json());                                         // Permite que el servidor entienda json
app.use(bodyParser.json());                                      // Permite que el servidor entienda json
app.use(bodyParser.urlencoded({ extended: true }));              // Permite que el servidor entienda formularios

// Rutas
app.use('/usuario', usuariosRoute);                             //Ruta para usuarios

//Mensaje
app.get('/', function (req, res) {
     res.send('Servidor Simulador Financiero Funcionando');
});


app.listen(app.get('puerto'), () => {
     console.log(`Servidor escuchando al puerto:${app.get('puerto')}`);
});

