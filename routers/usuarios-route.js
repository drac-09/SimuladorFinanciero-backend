var express = require('express');
var router = express.Router();
var usuario = require('../models/usuarios');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

const jwt = require('jsonwebtoken');



// GET - Obtener todos los usuarios
router.get('/all', function (req, res) {
     usuario.find()
          .then(resultado => {
               res.send(resultado);
               res.end();
          }).catch(error => {
               res.send(error);
               res.end();
          })
});


//POST - Registrar usuario
router.post('/registrar', async (req, res) => {
     let user = await usuario.findOne({ correo: req.body.correo });
     if (user) {
          return res.status(401).send('Usuario ya existe!');
     } else {
          const user = new usuario(
               {
                    // nombre: req.body.nombre,
                    // apellido: req.body.apellido,
                    correo: req.body.correo,
                    contrasenia: req.body.contrasenia,
               }
          );
          //Insertar registro a la DB
          await user.save().then(resultado => {
               // res.send({ mensaje: 'Usuario Registrado', cliente: user });
               const token = jwt.sign({_id: user._id}, 'claveSecreta');
               res.status(200).json({token});
          }).catch(error => {
               res.send(error);
               res.end();
          })
     }
})


// POST - Inicio se sesion de un usuario
router.post('/login', async (req, res) => {
     const { correo, password } = req.body;
     const user = await usuario.findOne({correo})                                                      
     if(!user) return res.status(401).send('Usuario y/o contraseña incorrecta');                                          
     if(user.password !== password) return res.status(401).send('Usuario y/o contraseña incorrectos');
     const token = jwt.sign({_id: usuario._id}, 'claveSecreta');
     return res.status(200).json({
                                   "token":token,
                                   "id":user._id
                              });
});



// PUT - Añadir un escenario
router.post('/:id', function (req, res) {
     usuario.updateMany(
          {
               _id: req.params.id
          },
          {
               $push:{
                    escenarios: {
                         _id:                mongoose.Types.ObjectId(),
                         nombre:             req.body.nombre,
                         fe_datos:           req.body.fe_datos,
                         fe_flujos:          req.body.fe_flujos,
                         fe_depreciacion:    req.body.fe_depreciacion,
                         rcb_datos:          req.body.rcb_datos,
                         pr_flujo:           req.body.pr_flujo,
                         pr_acumulado:       req.body.pr_acumulado,
                         pr_Recuperacion:    req.body.pr_Recuperacion,
                         pp_tabla:           req.body.pp_tabla,
                         pp_datos:           req.body.pp_datos,
                    }
               }
          }
     ).then(resultado => {
          res.send(resultado);
          res.end();
     })
     .catch(error => {
          res.send(error);
          res.end();
     })
});

// GET - Obtener todos los escenarios
router.get('/:id/escenarios', function (req, res) {
     usuario.find({_id: req.params.id},{escenarios: true})
     .then(resultado => {
          res.send(resultado[0].escenarios);
          res.end();
     }).catch(error => {
          res.send(error);
          res.end();
     })
});

module.exports = router;
