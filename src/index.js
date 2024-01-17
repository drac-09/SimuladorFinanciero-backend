import app from "./app.js";
import { connectDB } from "./modules/database-module.js";

connectDB(); //ConexiÓn a la Base de Datos
app.listen(process.env.PORT || 5000); // Puerto para levantar el servidor
console.log("Server on port: ", process.env.PORT); // Levantar el servidor
