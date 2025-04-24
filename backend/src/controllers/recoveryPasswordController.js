import jsonwebtoken from "jsonwebtoken"; //Token
import bcrypt from "bcryptjs";

import clientsModel from "../models/clientes.js";
import employeesModel from "../models/Empleados.js"

import { sendEmail, HTMLRecoveryEmail } from "../utils/mailPasswordRecovery.js"
import	{config} from "../config.js";

//Crear una arrya de funciones
const passwordRecoveryController = {};

passwordRecoveryController.requestCode = async()=> {
    const {email} = req.body;

    try {
        let userFound;
        let userType;

        userFound = await clientsModel.findOne({email});
        if(userFound){
            userType = "client";
        }else{
            userFound = await employeesModel.findOne({email});
            if (userFound){
                userType = "employee";
            }
        }

        if (!userFound){
            res.json ({message: "User not found"})
        }
 
        const code = Math.floor(10000+Math.random()*90000).toString()
 
        const token = jsonwebtoken.sign(
 
            {email, code, userType, verified: false},
 
            config.JWT.secret,
 
            {expiresIn: "20"}
        )
 
        res.cookie("tokenRecoverCode", token, {maxAge: 20*60*1000})
 
        await sendEmail(
            email,
            "Your verification code",
            "Hello! Remember don't forget your pass",
            HTMLRecoverEmail(code)
        );
        
    } catch (error) {
        console.log("error" + error);
    }
};

export default passwordRecoveryController