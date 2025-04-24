//importo tofo lo de la libreria de Express
import express from "express";
import productsRoutes from "./src/routes/products.js";
import clientes from "./src/routes/clientes.js";
import empleados from "./src/routes/empleados.js";
import Reviews from "./src/routes/reviews.js";
import registerEmployeesRoutes from "./src/routes/registerEmployees.js"
import cookieParser from "cookie-parser";
import loginRoutes from "./src/routes/login.js"
import logoutRoutes from "./src/routes/logout.js"
import registerClientsRoutes from "./src/routes/registerClients.js";
import recoveryPasswordRoutes from "./src/routes/recoveryPassword.js";

//creo una constante que es igual a la libreria que importé
const app = express();

//  que acepte datos en json
app.use(express.json());

//que postman acepte guardar cookies
app.use(cookieParser())

// definir las rutas de las funciones que tendrá la página
app.use("/api/products", productsRoutes);   
app.use("/api/clientes", clientes);
app.use("/api/empleados",empleados);
//app.use("/api/sucursales",sucursalesRoutes);
app.use("/api/reviews",Reviews);


app.use("/api/registerEmployee",registerEmployeesRoutes);
app.use("/api/login",loginRoutes)
app.use("/api/logout",logoutRoutes)

app.use("/api/registerClients",registerClientsRoutes)

app.use("api/recoveryPassword",recoveryPasswordRoutes);


//exporto la constante para poder uar express en otros archivos
export default app;
