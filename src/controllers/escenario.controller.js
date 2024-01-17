import Escenario from "../models/escenario.model.js";

export const obtenerEscenarios = async (req, res) => {
  try {
    const escenarios = await Escenario.find({
      usuario: req.usuario.id,
    }).populate("usuario");
    res.json(escenarios);
  } catch (error) {
    // console.log(req);
    return res.status(404).json({ message: `Algo salio mal` });
  }
};

export const crearEscenario = async (req, res) => {
  try {
    const {
      nombre,
      fe_datos,
      fe_flujos,
      fe_depreciacion,
      rcb_datos,
      pr_flujo,
      pr_acumulado,
      pr_Recuperacion,
      pp_tabla,
      pp_datos,
    } = req.body;
    const nuevoEscenario = new Escenario({
      nombre,
      fe_datos,
      fe_flujos,
      fe_depreciacion,
      rcb_datos,
      pr_flujo,
      pr_acumulado,
      pr_Recuperacion,
      pp_tabla,
      pp_datos,
      usuario: req.usuario.id,
    });
    const nuevoEscenarioGuardado = await nuevoEscenario.save();
    res.json(nuevoEscenarioGuardado);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const actualizarEscenario = async (req, res) => {
  try {
    const escenario = await Escenario.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!escenario)
      return res.status(404).json({ message: "Escenario no encontrado" });
    res.json(escenario);
  } catch (error) {
    return res.status(404).json({ message: "Escenario no encontrado" });
  }
};

// nombre, fe_flujos, fe_depreciacion, rcb_datos, pr_flujo, pr_acumulado, pr_Recuperacion, pp_tabla, pp_datos
