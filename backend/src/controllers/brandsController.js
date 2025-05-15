import BrandsModel from "../models/Brands.js";
import {v2 as cloudinary} from "cloudinary";

import {config} from "../config.js";

//1- Configurar cloudinary con nuestra cuenta
cloudinary.config({
    cloud_name: config.cloudinary.cloudinary_name,
    api_key: config.cloudinary.cloudinary_api_key,
    api_secret: config.cloudinary.cloudinary_api_secret
})

//Array de funciones vacio
const brandsController = {};

//SELECT 
brandsController.getAllBrands = async(req, res) => {
    const Brands = await BrandsModel.find();
    res.json(Brands);
};

//INSERT 
brandsController.insertBrands = async (req, res) => {
    const{ name, year, slogan} = req.body;
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
const newBrand = new BrandsModel({ name, year, slogan, image: imageURL})
newBrand.save()

res.json({ message: "Brand send" });
};

export default brandsController; 