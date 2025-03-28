import Clientes from "../models/clientes.js"
import Empleados from "../models/Empleados.js"
import bcrypt from "bcryptjs" // Encriptar
import jsonwebtoken from "jsonwebtoken";
import { config } from "../config.js";

//Array de funciones

const loginController = {};

loginController.login = async(req,res)=> {
    //Pedimos las cosas
    const { email, password} = req.body;

    try {

        //validamos los 3 posibles niveles
        //1. Admin, 2. Empleado, 3. Cliente

        let userFound;// Guarda el usuario encontrado 
        let userType; // Guarda el tipo de usuario

        //1. Admin
    }catch (error){
        
    }

}
