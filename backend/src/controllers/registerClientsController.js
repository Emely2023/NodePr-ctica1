//Importamos todas las librerias
import jsonwebtoken from "jsonwebtoken"; // Token
import bcryptjs from "bcryptjs"; // Encriptar
import nodemailer from "nodemailer"; // Enviar correos
import crypto from "crypto"; //Generar código

import clientsModel from "../models/Clientes.js"
import { config } from "../config.js";
import { register } from "module";

// Array de funciones
const registerClientController = {};

registerClientController.registerClient = async (req, res) => {
  // 1- Pedimos las cosas que vamos a guardar
  const {
    name,
    lastName,
    birthday,
    email,
    password,
    telephone,
    dui,
    isVerified,
  } = req.body;

  try {
    // Varificar si el cliente ya existe
    const existClient = await clientsModel.findOne({ email });
    if (existClient) {
      return res.json({ message: "Client already exists" });
    }

    // Encriptar la contraseña
    const passwordHash = await bcryptjs.hash(password, 10);

    // Guardamos en la base de datos
    const newClient = new clientsModel({
      name,
      lastName,
      birthday,
      email,
      password: passwordHash,
      telephone,
      dui: dui || null,
      isVerified: isVerified || false,
    });

    await newClient.save();

    // Genearar un codigo de verificacion
    const verficationCode = crypto.randomBytes(3).toString("hex");
    const expiresAt = Date.now() + 2 * 60 * 60 * 1000; // 2 horas

    // TOKEN
    const tokenCode = jsonwebtoken.sign(
      {
        //1- ¿que vamos a guardar?
        email,
        verficationCode,
        expiresAt,
      },
      //2- secreto
      config.JWT.secret,
      { expiresIn: config.JWT.expiresIn }
      //4- arrow funtion
      /*(error, token) => {
        if (error) console.log("error" + error);
        res.cookie("verificationToken", token);
        res.json({ message: "si" });
      }*/
    );

    // Guardar el token en una cookie
    res.cookie("verificationToken", tokenCode, {
      maxAge: 2 * 60 * 60 * 1000, // Duración de la cookie: 2 horas
    });

    // Enviar correo
    // 1- Transporter:  ¿Desde donde voy a enviar el correo?
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: config.email.user,
        pass: config.email.pass,
      },
    });

    //2- Options: ¿A quien se lo voy a enviar?
    const mailOptions = {
      from: config.email.user,
      to: email,
      subject: "Verificacion de correo",
      text: `Para verificar que eres dueño de la cuenta, utiliza este codigo ${verficationCode}\n Este codigo expira en dos horas\n`,
    };

    //3- Envio del correo
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) console.log("error" + error);
      res.json({ message: "Email sent" });
    });

    res.json({ message: "Client registered, Please verify your email" });
  } catch (error) {
    res.json({ message: "error" + error });
  }
};

registerClientController.verifyCodeEmail = async (req, res) => {
  const { verficationCode } = req.body;
  // Accedemos al token "verification token"
  // Ya que este contiene, el email, el codigo de verificacarion y cuando expira
  const token = req.cookies.verificationToken;

  if (!token) {
    return res.json({ message: "Please register your account first" });
  }

  try {
    // Verificamos y decodificamos el token
    // Para obtener el email y el codigo de verificacion
    // Que acabamos de guardar al momento de registrar
    const decoded = jsonwebtoken.verify(token, config.JWT.secret);
    const { email, verficationCode: storedCode } = decoded;

    // Comparar el codigo recibido con el almacenado en el token
    if (verficationCode !== storedCode) {
      return res.json({ message: "Invalid verification code" });
    }

    // busco al cliente
    const client = await clientsModel.findOne({ email });
    if (!client) {
      return res.json({ message: "Client not found" });
    }

    //A ese cliente le cambio el campo "isVerified" a true
    client.isVerified = true;
    await client.save();

    // Quitar el token con el email, codigo de verificacion y cuando expira
    res.clearCookie("verificationToken");

    res.json({ message: "Email verified successfully" });
  } catch (error) {
    res.json({ message: "error" + error });
  }
};

export default registerClientController;
