import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const autenticacionRequerida = (req, res, next) => {
  const { token } = req.cookies;
  if (!token)
    return res
      .status(401)
      .json({ message: "No existe el token, autorización denegada" });

  jwt.verify(token, TOKEN_SECRET, (err, usuario) => {
    if (err) return res.status(403).json({ message: "Token Invalido" });
    req.usuario = usuario;
    next();
  });
};
