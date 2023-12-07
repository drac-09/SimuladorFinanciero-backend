import { Router } from "express";
import {
  obtenerEscenarios,
  crearEscenario,
} from "../controllers/escenario.controller.js";

import { autenticacionRequerida } from "../middlewares/validarToken.js";
import { validarSchema } from "../middlewares/validador.middleware.js";
import { crearEscenarioSchema } from "../schemas/escenario.schema.js";

const router = Router();

router.get("/escenarios", autenticacionRequerida, obtenerEscenarios);
router.post(
  "/escenario",
  autenticacionRequerida,
  validarSchema(crearEscenarioSchema),
  crearEscenario
);

export default router;
