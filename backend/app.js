//importo tofo lo de la libreria de Express
import express from "express";

//creo una constante que es igual a la libreria que importé
const app = express();

// definir las rutas de las funciones que tendrá la página
app.use("api/products")
app-use("api/re")

//exporto la constante para poder uar express en otros archivos
export default app;
