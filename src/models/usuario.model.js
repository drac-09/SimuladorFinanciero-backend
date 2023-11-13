import mongoose from "mongoose";

const usuarioSchema = mongoose.Schema({
  usuario: {
    type: String,
    require: true,
    trim: true, // Descarta los espacios.
  },
  correo: {
    type: String,
    require: true,
    trim: true,
  },
  contrasenia: {
    type: String,
    require: true,
  },
});

export default mongoose.model("Usuario", usuarioSchema);
