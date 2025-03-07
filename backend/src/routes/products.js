import express from "express";
import productsController from "../controllers/products.js"
//Router que nos ayuda a color métodos
// que tendrá mi ruta


//Router nos ayuda a color los métodos que tendrá mi ruta
const router = express.Router();


router
.route("/")
.get(productsController.getProducts)
.post(productsController.createProducts)

router
.route("/:id")
.put(productsController.updateProducts)
.delete(productsController.deleteProducts);

export default router;