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
app.use(cors());

app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());

// Rutes
app.use("/api/", usuarioRoutes);
app.use("/api/", escenarioRoutes);

//Mensaje
app.get("/prueba", function (req, res) {
  res.send("Servidor Funcionando");
});

export default app;
