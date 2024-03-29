import { Router } from "express";
import {
  obtenerEscenarios,
  crearEscenario,
  actualizarEscenario,
  eliminarEscenario,
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
router.put("/escenarios/:id", autenticacionRequerida, actualizarEscenario);
router.delete("/escenarios/:id", autenticacionRequerida, eliminarEscenario);

export default router;
