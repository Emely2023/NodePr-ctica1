import ProviderModel from "../models/providers.js"
import {v2 as cloudinary} from "cloudinary";

import {config} from "../config.js";

//1- Configurar cloudinary con nuestra cuenta
cloudinary.config({
    cloud_name: config.cloudinary.cloudinary_name,
    api_key: config.cloudinary.cloudinary_api_key,
    api_secret: config.cloudinary.cloudinary_api_secret
})

//Array de funciones vacio
const providerController = {};

//SELECT 
providerController.getAllProviders = async(req, res) => {
    const providers = await ProviderModel.find();
    res.json(providers);
};

//INSERT 
providerController.insertProviders = async (req, res) => {
    const{ name, telephone} = req.body;
    let imageURL = ""
  
    //Subir la imagen a cloudinary
    if(req.file){
        const result = await cloudinary.uploader.upload(
            req.file.path,
            {
                folder: "public",
                allowed_formats: ["png", "jpg", "jpeg"]
            }
        )
        imageURL = result.secure_url
    }
//GUARDAR TODO EN LA BASE DE DATOS
const newProvider = new ProviderModel({ name, telephone, image: imageURL})
newProvider.save()

res.json({ message: "Provider send" });
};

export default providerController;

