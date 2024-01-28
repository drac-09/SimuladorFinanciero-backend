import { Router } from "express";
import {
  registro,
  acceso,
  cerrar,
  prueba,
} from "../controllers/usuario.controller.js";
import { validarSchema } from "../middlewares/validador.middleware.js";
import { registroSchema, accesoSchema } from "../schemas/usuario.schema.js";

const router = Router();

router.post("/registro", validarSchema(registroSchema), registro);
router.post("/acceso", validarSchema(accesoSchema), acceso);
router.post("/cerrar", cerrar);
router.get("/prueba", prueba);

export default router;
