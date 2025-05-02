// Array de métodos ( C R U D)
const clientescontroller = {};


import ClientesModel from "../models/Clientes.js";

//SELECT
clientescontroller.getClientes = async (req, res) => {
const clientes = await ClientesModel.find()
res.json(clientes)
}

// INSERT
clientescontroller.createClientes = async (req, res) => {
    const{ name, lastName, birthday, email, password, telephone, dui,isVerified } = req.body;
    const newClientes = new ClientesModel ({name, lastName, birthday, email, password, telephone, dui,isVerified });
    await newClientes.save()
    res.json({ message : "Client saved"});
}
    //DELETE
clientescontroller.deleteClientes = async (req, res) => {
    await clientescontroller.findOneAndDelete(req.params.id)
    res.json({message:"Client deleted"})
}

//UPDATE
clientescontroller.updateClientes = async (req, res) => {
   //  Solicito todos los valores
    const {name, lastName, birthday, email, password, telephone, dui,isVerified} = req.body;

    await ClientesModel.findByIdAndUpdate(req.params.id,{
        name,
        lastName,
        birthday,
        email,
        password, 
        telephone,
        dui,
        isVerified
    },{new: true}
);
// muestro un mensaje que todo se actualizó
res.json({ message: "Client uptated"});
};
export default clientescontroller;