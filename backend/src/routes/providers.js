import express from "express";
import providerController from "../controllers/providersController";
import multer from "multer"

const router = express.Router();

//Configurar una carpeta local que guarde 
//el registro de las imagenes subidas
const upload = multer({dest: "public/"})

router.route("/")
.get(providerController.getAllProviders)
.post(providerController.insertProviders);

export default router;