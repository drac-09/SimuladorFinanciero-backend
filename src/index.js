import app from "./app.js";
import { connectDB } from "./modules/database-module.js";
import { PORT } from "./config.js";

connectDB(); //Conexion a la Base de Datos
app.listen(PORT);
console.log("Server on port: ", PORT); // Levantar el servidor
