import empleadosmodel from "../models/Empleados.js"
import bcrypyjs from "bcryptjs" ; //Encriptar
import Jsonwebtoken from "jsonwebtoken"; //Token
import {config} from "../config.js";
import empleadoscontroller from "./empleadoscontroller.js";

// creamos una array de funciones
const registerEmployeesController = {};

registerEmployeesController.register = async(req,res) =>{
    //Ask for data
    const {
        name,
        lastname,
        birthday,
        email,
        addrres,
        hiredate,
        password,
        telephone,
        isssNumber,
        dui,
        Isverified
    } = req.body;

    try{
        // 1 -Verificamos que el empleado existe
        const existsEmployee = await empleadosmodel.findOne({email})
        if(existsEmployee)
        {
            return res.json({message: "Employee already exist"})
        }

        //Encriptamos la constraseña
        const passwordHash = await bcrypyjs.hash(password, 10)

        //save the employee
        const newEmployee = new empleadosmodel({name,lastname,birthday,email,addrres,hiredate,password,telephone,isssNumber,dui,Isverified})

        await newEmployee.save();

        //TOKEN
        Jsonwebtoken.sign(
             //1- que voy a guardar
             {id: newEmployee._id},
             //2- secreto
             config.JWT.secret,
             //Cuando Expira
             {expiresIn: config.JWT.expiresIn},
             //4 función 
             (error, token) =>{
                if (error)console.log ("error"+error)
                    res.cookie("authToken", token)


                res.cookie("authToken", token)
                res.json({message: "empleado guardado"})
             }
        )
           

        
    }
    catch(error)
    {
        console.log("error" + error)
        res.json({message: "Error saving employee"})
    }
}

export default registerEmployeesController;


