import ProviderModel from "../models/Providers.js";
import { v2 as cloudinary } from "cloudinary";
import { config } from "../config.js";

// 1- Configurar cloudinary con nuestra cuenta
cloudinary.config({
  cloud_name: config.cloudinary.cloudinary_name,
  api_key: config.cloudinary.cloudinary_api_key,
  api_secret: config.cloudinary.cloudinary_api_secret,
});

// Array de funciones
const providerController = {};

// SELECT
providerController.getAllProviders = async (req, res) => {
  try {
    const providers = await ProviderModel.find();
    res.json(providers);
  } catch (error) {
    console.error("Error getting providers:", error);
    res.status(500).json({ message: "Error getting providers" });
  }
};

// INSERT
providerController.insertProviders = async (req, res) => {
  try {
    const { name, telephone } = req.body;
    let imageURL = "";

    // Subir la imagen a cloudinary
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "public",
        allowed_formats: ["png", "jpg", "jpeg"],
      });
      imageURL = result.secure_url;
    }

    const newProvider = new ProviderModel({ name, telephone, image: imageURL });
    await newProvider.save();

    res.json({ message: "Provider saved" });
  } catch (error) {
    console.error("Error inserting provider:", error);
    res.status(500).json({ message: "Error inserting provider" });
  }
};

// UPDATE
providerController.updateProvider = async (req, res) => {
  try {
    const { name, telephone } = req.body;
    let imageURL = req.body.image; // Para conservar imagen si no se cambia

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "public",
        allowed_formats: ["png", "jpg", "jpeg"],
      });
      imageURL = result.secure_url;
    }

    await ProviderModel.findByIdAndUpdate(req.params.id, {
      name,
      telephone,
      image: imageURL,
    });

    res.json({ message: "Provider updated" });
  } catch (error) {
    console.error("Error updating provider:", error);
    res.status(500).json({ message: "Error updating provider" });
  }
};

// DELETE
providerController.deleteProvider = async (req, res) => {
  try {
    await ProviderModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Provider deleted" });
  } catch (error) {
    console.error("Error deleting provider:", error);
    res.status(500).json({ message: "Error deleting provider" });
  }
};

export default providerController;
