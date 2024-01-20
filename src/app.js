import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import usuarioRoutes from "./routers/usuario.routes.js";
import escenarioRoutes from "./routers/escenario.routes.js";

const app = express();
const lista = [
  `http://localhost:${process.env.PORT_FRONTEND}`,
  "https://simulador-financiero-frontend.vercel.app/",
  "https://vercel.com/drac-09/simulador-financiero-frontend/E5wgczVnXqeruEx8QQhmRV7fVgVF",
];

// Middlewares
app.use(
  cors({
    origin: lista,
    credentials: true,
  })
);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );
  next();
});

app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());

// Rutes
app.use("/api/", usuarioRoutes);
app.use("/api/", escenarioRoutes);

//Mensaje
app.get("/api/", function (req, res) {
  res.send("Servidor Funcionando");
});

export default app;
