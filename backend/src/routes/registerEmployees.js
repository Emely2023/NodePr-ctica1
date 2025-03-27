import express from "express";
import registerEmployeesController from "../controllers/registerEmployeesController.js";
//Router() nos ayuda a color ls métodos
//que tendrá mi ruta
const router = express.Router();

router.route("/").post(registerEmployeesController.register)


export default router;