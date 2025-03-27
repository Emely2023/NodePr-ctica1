//importo tofo lo de la libreria de Express
import express from "express";
import productsRoutes from "./src/routes/products.js";
import clientes from "./src/routes/clientes.js";
import empleados from "./src/routes/empleados.js";
import Reviews from "./src/routes/reviews.js";
import registerEmployeesRoutes from "./src/routes/registerEmployees.js"
import cookieParser from "cookie-parser";

//creo una constante que es igual a la libreria que importé
const app = express();

//  que acepte datos en json
app.use(express.json());

app.use(cookieParser())

// definir las rutas de las funciones que tendrá la página
app.use("/api/products", productsRoutes);   
app.use("/api/clientes", clientes);
app.use("/api/empleados",empleados);
//app.use("/api/sucursales",sucursalesRoutes);
app.use("/api/reviews",Reviews);
app.use("/api/registerEmployee",registerEmployeesRoutes);




//exporto la constante para poder uar express en otros archivos
export default app;
