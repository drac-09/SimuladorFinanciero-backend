import Usuario from "../models/usuario.model.js";
import bcrypt from "bcrypt";
import { crearAccesoToken } from "../libs/jwt.js";
import jwt from "jsonwebtoken";

export const registro = async (req, res) => {
  const { usuario, correo, contrasenia } = req.body;
  try {
    const usuarioEncontrado = await Usuario.findOne({ correo });
    if (usuarioEncontrado) {
      return res.status(400).json(["El Correo ya esta es uso"]);
    }

    // Se encripta la constraseña
    const contraseniaHash = await bcrypt.hash(contrasenia, 10);
    const nuevoUsuario = new Usuario({
      usuario,
      correo,
      contrasenia: contraseniaHash,
    });

    // Se guarda el nuevo usuario
    const usuarioGuardado = await nuevoUsuario.save();

    // Se crear el token
    const token = await crearAccesoToken({ id: usuarioGuardado._id });
    res.cookie("token", token);
    res.json({
      id: usuarioGuardado._id,
      correo: usuarioGuardado.correo,
      token: token,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const acceso = async (req, res) => {
  const { correo, contrasenia } = req.body;
  try {
    const usuarioEncontrado = await Usuario.findOne({ correo });

    if (!usuarioEncontrado)
      return res.status(400).json(["Usuario no Encontrado"]);

    const comparar = await bcrypt.compare(
      contrasenia,
      usuarioEncontrado.contrasenia
    );
    if (!comparar) return res.status(400).json(["Error en Contraseña"]);
    const token = await crearAccesoToken({ id: usuarioEncontrado._id });
    res.cookie("token", token);
    res.json({
      id: usuarioEncontrado._id,
      correo: usuarioEncontrado.correo,
      token: token,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const cerrar = (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });
  return res.sendStatus(200);
};

export const prueba = (req, res) => {
  return res.status(400).json(["Paso hasta aqui"]);
};

// export const profile = async (req, res) => {
//   const userFound = await User.findById(req.user.id);
//   if (!userFound) return res.status(400).json({ message: "User no found" });
//   return res.json({
//     id: userFound._id,
//     usuario: userFound.usuario,
//     correo: userFound.correo,
//     createdAt: userFound.createdAt,
//     updatedAt: userFound.updatedAt,
//   });
// };

// export const verifyToken = async (req, res) => {
//   const { token } = req.cookies;
//   if (!token) return res.status(401).json({ message: "Unauthorized" });
//   jwt.verify(token, TOKEN_SECRET, async (err, user) => {
//     if (err) return res.status(401).json({ message: "Unauthorized" });
//     const userFound = await User.findById(user.id);
//     if (!userFound) return res.status(401).json({ message: "Unauthorized" });

//     return res.json({
//       id: userFound._id,
//       usuario: userFound.usuario,
//       correo: userFound.correo,
//     });
//   });
// };
