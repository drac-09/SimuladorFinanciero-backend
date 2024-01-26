import jwt from "jsonwebtoken";

export const autenticacionRequerida = (req, res, next) => {
  const { token } = req.headers;
  const requestData = {
    method: req.method,
    url: req.originalUrl,
    headers: req.headers,
    cookies: req.cookies,
    // Incluye otros detalles que consideres necesarios
  };
  // console.log(req);
  // return res.status(401).json({ requestData });
  if (!token)
    return res
      .status(401)
      .json({ message: "No existe el token, autorización denegada" });

  jwt.verify(token, process.env.TOKEN_SECRET, (err, usuario) => {
    if (err) return res.status(403).json({ message: "Token Invalido" });
    req.usuario = usuario;
    next();
  });
};
