// Array de métodos ( C R U D)
const productsController = {};

import Products from "../models/Products.js";
import productsModel from "../models/Products.js"

//SELECT
productsController.getProducts = async (req, res) => {
const products = await productsModel.find()
res.json(products)
}

// INSERT
productsController.createProducts = async (req, res) => {
    const{ name, description, price, stock } = req.body;
    const newProduct = new productsModel ({name, description, price, stock});
    await newProduct.save()
    res.json({ message : "product saved"});
}
    //DELETE
productsController.deleteProducts = async (req, res) => {
    await productsModel.findOneAndDelete(req.params.id)
    res.json({message:"product deleted"})
}

//UPDATE
productsController.updateProducts = async (req, res) => {
   //  Solicito todos los valores
    const {name, description, price, stock} = req.body;

    await productsModel.findByIdAndUpdate(req.params.id,{
       name,
       description,
       price,
       stock,
    },{new: true}
);
// muestro un mensaje que todo se actulizó
res.json({ message: "product uptated"});
};
export default productsController;