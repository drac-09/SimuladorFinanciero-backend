import { z } from "zod";

export const crearEscenarioSchema = z.object({
  nombre: z.string({
    required_error: "Nombre es requerido",
  }),
});
