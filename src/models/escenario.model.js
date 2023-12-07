import mongoose from "mongoose";

const escenarioSchema = mongoose.Schema({
  nombre: {
    type: String,
    require: true,
  },
  fe_datos: {
    type: Array,
  },
  fe_flujos: {
    type: Array,
  },
  fe_depreciacion: {
    type: String,
  },
  rcb_datos: {
    type: Array,
  },
  pr_flujo: {
    type: Array,
  },
  pr_acumulado: {
    type: Array,
  },
  pr_Recuperacion: {
    type: String,
  },
  pp_tabla: {
    type: Array,
  },
  pp_datos: {
    type: Array,
  },
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
    require: true,
  },
});

export default mongoose.model("Escenario", escenarioSchema);

// fe_datos:            Flujo de datos - datos formulario
// fe_flujos:           Flujo de datos - flujos
// fe_depreciacion:     Flujo de datos - depreciación
// rcb_datos:           Relacion costo-beneficio - datos
// pr_flujo:            Periodo de recuperación - flujo neto de efectivo.
// pr_acumulado:        Periodo de recuperación - Acumulado
// pr_Recuperacion:     Periodo de recuperación - periodo de recuperación
// pp_tabla:            Pago a préstamo - datos tabla
// pp_datos:            Pago a préstamo - datos formulario

// fe_datos
// fe_flujos
// fe_depreciacion
// rcb_datos
// pr_flujo
// pr_acumulado
// pr_Recuperacion
// pp_tabla
// pp_datos
