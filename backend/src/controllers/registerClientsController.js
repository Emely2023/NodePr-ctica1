import jsonwebtoken from "jsonwebtoken";
import bcrypt from "bcryptjs"; //Encriptar
import nodemailer from "nodemailer"; //Enviar correo
import crypto from "crypto";


import clientes from "../models/clientes.js";
import { config } from "../config.js";



//Array de funciones
const registerClientsController = {};

registerClientsController.registerClient = async (req, res) => {
    const{
        name,
        lastname,
        adress,
        birthday,
        email,
        password,
        telephone,
        dui,
        isVerified,
    } = req.body;
    try{
        //Verficar si el cliente existe
        const existClient = await clientes.findOne({email})
        if(existClient){
            return res.json({message : "Client already exist"})
        }
        //Encriptar la constraseña
        const passwordHash = await bcrypt.hash(password, 10)

    //Guardamos en la base de datos
    const newClient = new clientes({
        name,
        lastname,
        adress,
        birthday,
        email,
        password,
        telephone,
        dui: dui || null,
        isVerified: isVerified || false,
    })
    await newClient.save()


    //Generar un codigo de verificación 
    const verificationCode = crypto.randomBytes(3).toString("hex")
    const expiresAt = Date.now() + 2 * 60 * 60 * 1000; //2 horas

    // TOKEN
    const tokenCode = jsonwebtoken.sign({
        //que vamos a guardar?
        email, verificationCode, expiresAt},
        //2- Secreto
        config.JWT.secret,
        {expiresIn:config.JWT.expiresIn},
        
        //4 arrow funtion
        (error, token) => {
            if (error) console.log("error"+error);
            res.cookie("verificationToken", token, {maxAge:  2 * 60 * 60 * 1000})

        })

        //Enviar correo
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: config.email.user,
                pass: config.email.pass
            }
        })

        //2- Options: ¿A quien se lo voy a enviar?
        const mailOptions = {
            from: config.email.user,
            to: email,
            subject: "verificacion de correo",
            text: `Para verificar que eres dueño de la cuenta, utiliza este código ${verificationCode}\n Este código expira en dos horas \n`
        }

        // 3 Enviar el correo
        transporter.sendMail(mailOptions,(error, info) => {
            if(error) console.log("error"+ error)
             res.json ({message: "Email sent"})
        })

        res.json({message: "Client registered, please verify your email"})

    } catch (error) {
      res.json({message: "error"+ error})
    }
};
 registerClientsController.verifyCodeEmail = async (req, res) => {
    const {verificationCode } = req.body;
    //Accedemos al token "verfication token"

    const token = req.cookies.verificationCode;

    if(!token){
        return res.json({message: "Please register your account first"})
    }
    try {
        const decoded = jsonwebtoken.verify(token, config.JWT.secret)
        const {email, verificationCode: storecode} = decoded;

    // Comparar que el codigo recibido con el almacenado en el token
    if(verificationCode !== storecode){
        return res.json({message: "Invalid verification code"})
    }

    const client = await clientes.findOne({email})
    if(!client){
        return res.json({message: " client no found"})
    }
    
        //A ese cliente le cambio el campo "Isverified" a true
        client.isVerified = true,
        await client.save();

        //Quitar el token con el email
        res.clearCookie("verificationToken")

        res.json({message: "Email verified succesfully"})



    } catch (error) {
        res.json({message: "error"+error})
    }
 }

 export default registerClientsController;
   