import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import usuarioRoutes from "./routers/usuario.routes.js";
import escenarioRoutes from "./routers/escenario.routes.js";

const app = express();
const lista = [
  "https://simulador-financiero-frontend.vercel.app/",
  `http://localhost:${process.env.PORT_FRONTEND}`,
];

// Middlewares
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

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
