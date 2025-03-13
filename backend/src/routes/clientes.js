import express from "express";
import clientescontroller from "../controllers/clientescontroller.js"
//Router que nos ayuda a color métodos
// que tendrá mi ruta


//Router nos ayuda a color los métodos que tendrá mi ruta
const router = express.Router();


router
.route("/")
.get(clientescontroller.getClientes)
.post(clientescontroller.createClientes)

router
.route("/:id")
.put(clientescontroller.updateClientes)
.delete(clientescontroller.deleteClientes);

export default router;