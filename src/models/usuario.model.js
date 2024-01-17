import mongoose from "mongoose";

const usuarioSchema = mongoose.Schema({
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
