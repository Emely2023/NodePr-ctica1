//importo tofo lo de la libreria de Express
import express from "express";
import productsRoutes from "./src/routes/products.js";

//creo una constante que es igual a la libreria que importé
const app = express();

//  que acepte datos en json
app.use(express.json());

// definir las rutas de las funciones que tendrá la página
app.use("/api/products", productsRoutes);

//exporto la constante para poder uar express en otros archivos
export default app;
