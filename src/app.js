import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import { PORT_FRONTEND } from "./config.js";
import usuarioRoutes from "./routers/usuario.routes.js";
// import taskRoutes from "./routers/tasks.routes.js";

const app = express();

// Middlewares
app.use(
  cors({
    origin: `http://localhost:${PORT_FRONTEND}`,
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());

// Rutes
app.use("/api/", usuarioRoutes);
// app.use("/api/", taskRoutes);

export default app;
