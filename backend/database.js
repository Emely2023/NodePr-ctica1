
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

import { config } from "./src/config.js";


//1- Confuguro la URI o dirección de la base de datos
//const URI = "mongodb://localhost:27017/ZonaDigitalDB20230621";

//- Conecto la base de datos 
mongoose.connect(config.db.URI);

// Comprobar  que todo funciona

//3- Creo una constante que es igual a la conexión
const connection = mongoose.connection;

// veo si funciona
connection.once("open", () => {
    console.log("DB is connected");
});

// veo si desconectó
connection.on("Disconnected", () => {
    console.log("DB is disconnected");
});

//veo si hay un error
connection.on("error", (error) => {
    console.log("error found" + error);
});


