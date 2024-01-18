import { Router } from "express";
import {
  registro,
  acceso,
  cerrar,
  prueba,
  // profile,
  // verifyToken,
} from "../controllers/usuario.controller.js";
// import { autenticacionRequerida } from "../middlewares/validarToken.js";
import { validarSchema } from "../middlewares/validador.middleware.js";
import { registroSchema, accesoSchema } from "../schemas/usuario.schema.js";

const router = Router();

router.post("/registro", validarSchema(registroSchema), registro);
router.post("/acceso", validarSchema(accesoSchema), acceso);
router.post("/cerrar", cerrar);
router.post("/prueba", prueba);
// router.get("/verify", verifyToken);
// router.get("/profile", autenticacionRequired, profile);

export default router;
