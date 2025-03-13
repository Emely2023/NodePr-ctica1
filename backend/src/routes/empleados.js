import express from "express";
import empleadoscontroller from "../controllers/empleadoscontroller.js"
//Router que nos ayuda a color métodos
// que tendrá mi ruta


//Router nos ayuda a color los métodos que tendrá mi ruta
const router = express.Router();


router
.route("/")
.get(empleadoscontroller.getEmpleados)
.post(empleadoscontroller.createEmpleados)

router
.route("/:id")
.put(empleadoscontroller.updateEmpleados)
.delete(empleadoscontroller.deleteEmpleados);

export default router;