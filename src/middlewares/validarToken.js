import jwt from "jsonwebtoken";

export const autenticacionRequerida = (req, res, next) => {
  const { token } = req.cookies;
  // console.log(req);
  if (!token)
    return res.status(401).json({
      message: `No existe el token, autorización denegada ${req}`,
    });

  jwt.verify(token, process.env.TOKEN_SECRET, (err, usuario) => {
    if (err) return res.status(403).json({ message: "Token Invalido" });
    req.usuario = usuario;
    next();
  });
};
