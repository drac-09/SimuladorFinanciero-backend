import jwt from "jsonwebtoken";

export const autenticacionRequerida = (req, res, next) => {
  const { token } = req.cookies;
  // console.log(req);
  if (!token)
    return req
      .status(401)
      .json({ message: "No existe el token, autorización denegada" });

  jwt.verify(token, process.env.TOKEN_SECRET, (err, usuario) => {
    if (err) return res.status(403).json({ message: "Token Invalido" });
    req.usuario = usuario;
    next();
  });
};
