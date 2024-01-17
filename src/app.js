import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import usuarioRoutes from "./routers/usuario.routes.js";
import escenarioRoutes from "./routers/escenario.routes.js";

const app = express();

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());

// Rutes
app.use("/api/", usuarioRoutes);
app.use("/api/", escenarioRoutes);

export default app;
