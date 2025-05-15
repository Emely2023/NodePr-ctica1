import express from "express";
import brandsController from "../controllers/brandsController.js";
import multer from "multer"

const router = express.Router();

//Configurar una carpeta local que guarde 
//el registro de las imagenes subidas
const upload = multer({dest: "public/"})

router.route("/")
.get(brandsController.getAllBrands)
.post(upload.single("image"),brandsController.insertBrands);

export default router;