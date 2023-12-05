import app from "./app.js";
import { connectDB } from "./modules/database-module.js";
import { PORT } from "./config.js";

connectDB(); //ConexiÓn a la Base de Datos
app.listen(PORT || 5000); // Puerto para levantar el servidor
console.log("Server on port: ", PORT); // Levantar el servidor
