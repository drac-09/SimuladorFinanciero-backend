import { z } from "zod";

export const registroSchema = z.object({
  usuario: z.string({
    required_error: "El usuario es requerido",
  }),
  correo: z
    .string({
      required_error: "El correo es requerido",
    })
    .email({
      message: "Correo no valido",
    }),
  contrasenia: z
    .string({
      required_error: "La contraseña es requerida",
    })
    .min(6, {
      message: "La contraseña debe tener mas de 6 caracteres",
    }),
});

export const accesoSchema = z.object({
  correo: z
    .string({
      required_error: "El correo es requerido",
    })
    .email({
      message: "Correo no valido",
    }),
  contrasenia: z
    .string({
      required_error: "La contraseña es requerida",
    })
    .min(6, {
      message: "La contraseña debe tener mas de 6 caracteres",
    }),
});
