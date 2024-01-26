import jwt from "jsonwebtoken";

export const autenticacionRequerida = (req, res, next) => {
  const { token } = req.cookies;
  const requestData = {
    method: req.method,
    url: req.originalUrl,
    headers: req.headers,
    cookies: req.cookies,
    // Incluye otros detalles que consideres necesarios
  };
  // console.log(req);
  if (!token) return res.status(401).json({ requestData });

  jwt.verify(token, process.env.TOKEN_SECRET, (err, usuario) => {
    if (err) return res.status(403).json({ message: "Token Invalido" });
    req.usuario = usuario;
    next();
  });
};
