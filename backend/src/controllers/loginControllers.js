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

        if(email === config.ADMIN.emailAdmin && password === config.ADMIN.password){
            userType= "admin";
            userFound= {_id: "admin"};
        }else{
            //2.Empleados
            userFound = await Empleados.findOne({email});
            userType = "employee"
            if(!userFound){
                //3. Cliente
                userFound = await Clientes.findOne({email});
                userType = "customer"
                
            }
        }

    //Si no encontramos a ningun usuario con esas credenciales
    if(!userFound){
        return res.json({ message: "User not found"});
    }

    //Validar la contraseña
    //SOLO SI NO ES ADMIN
    if(userType !== "admin"){
        const isMatch = await bcryptjs.compare(password, userFound.password)
        if(!isMatch){
            return res.json({message: "Invalid password"})
        }
    }

    //TOKEN 

    //PARA VALIDAR
    jsonwebtoken.sign(
        //1-Que voy a guardar
        {id: userFound._id, userType},
        //Secreto
        config.JWT.secret,
        //cuando expira
        {expiresIn: config.JWT.expiresIn},
        //4. Funcion Flecha
        (error, token)=>{
            if(error) console.log("error"+ error)
                res.cookie("authCookie", token)
            res.json({message: "Login successfull"})
        }
    )
        
           
    }catch (error){

    }

}
